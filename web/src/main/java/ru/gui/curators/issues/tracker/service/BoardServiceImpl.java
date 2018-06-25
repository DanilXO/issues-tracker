package ru.gui.curators.issues.tracker.service;

import ru.gui.curators.issues.tracker.bean.BoardBean;
import ru.gui.curators.issues.tracker.bean.ColumnBean;
import ru.gui.curators.issues.tracker.bean.TicketBean;
import ru.gui.curators.issues.tracker.bean.UserBean;
import ru.gui.curators.issues.tracker.converter.BoardConverter;
import ru.gui.curators.issues.tracker.converter.ColumnConverter;
import ru.gui.curators.issues.tracker.converter.TicketConverter;
import ru.gui.curators.issues.tracker.converter.UserBoardConverter;
import ru.gui.curators.issues.tracker.dto.BoardDto;
import ru.gui.curators.issues.tracker.dto.ColumnDto;
import ru.gui.curators.issues.tracker.dto.LightBoardDto;
import ru.gui.curators.issues.tracker.dto.TicketDto;
import ru.gui.curators.issues.tracker.entity.BoardEntity;
import ru.gui.curators.issues.tracker.entity.ColumnEntity;
import ru.gui.curators.issues.tracker.entity.TicketEntity;
import ru.gui.curators.issues.tracker.exception.IssuesTrackerApplicationException;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@ApplicationScoped
class BoardServiceImpl implements BoardService {
    private final TicketBean ticketBean;
    private final TicketConverter ticketConverter;
    private final ColumnBean columnBean;
    private final ColumnConverter columnConverter;
    private final BoardBean boardBean;
    private final BoardConverter boardConverter;
    private final UserBean userBean;
    private final UserBoardConverter userBoardConverter;


    @Inject
    public BoardServiceImpl(TicketBean ticketBean,
                            TicketConverter ticketConverter,
                            ColumnBean columnBean,
                            ColumnConverter columnConverter,
                            BoardBean boardBean,
                            BoardConverter boardConverter,
                            UserBean userBean,
                            UserBoardConverter userBoardConverter) {
        this.boardBean = boardBean;
        this.boardConverter = boardConverter;
        this.userBean = userBean;
        this.userBoardConverter = userBoardConverter;
        this.ticketBean = ticketBean;
        this.ticketConverter = ticketConverter;
        this.columnBean = columnBean;
        this.columnConverter = columnConverter;
    }

    @Override
    @Transactional
    public List<BoardDto> loadAllDashboards() {
        return boardBean.loadAll().stream()
                .map(boardConverter::convert)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public BoardDto loadBoardById (BigInteger id) {
        return Optional.of(boardBean.find(id))
                .map(boardConverter::convert)
                .orElseThrow(() -> new IssuesTrackerApplicationException(String.format("Not find Dashboard with id %s", id)));
    }

    @Override
    public TicketDto loadTicketById(BigInteger id) {
        return Optional.of(ticketBean.find(id))
                .map(ticketConverter::convert)
                .orElseThrow(() -> new IssuesTrackerApplicationException(String.format("Not find Ticket with id %s", id)));
    }

    @Override
    @Transactional
    public List<BoardDto> loadUserDashboards(BigInteger userId) {
        return Optional.of(userBean.find(userId))
                .orElseThrow(() -> new IssuesTrackerApplicationException(String.format("Not find User with id %s", userId))).getUsersBoards()
                .stream()
                .map(userBoardConverter::convert)
        .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public List<LightBoardDto> loadUserLightDashboards(BigInteger userId) {
        return Optional.of(userBean.find(userId))
                .orElseThrow(() -> new IssuesTrackerApplicationException(String.format("Not find User with id %s", userId))).getUsersBoards().
                        stream()
                .map(userBoardConverter::lightConvert)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public ColumnDto loadOneColumn(BigInteger id) {
        return Optional.of(columnBean.find(id))
                .map(columnConverter::convert)
                .orElseThrow(() -> new IssuesTrackerApplicationException(String.format("Not find Column with id %s", id)));
    }

   @Override
    public void createNewBoard(BoardDto boardDto) {
        BoardEntity boardEntity = new BoardEntity();
        boardEntity.setId(boardDto.getId());
        boardEntity.setBoardName(boardDto.getName());
        boardBean.persist(boardEntity);
    }

    @Override
    public void createNewColumnForBoard(BigInteger boardId, ColumnDto columnDto){
        ColumnEntity columnEntity = new ColumnEntity();
        columnEntity.setId(columnDto.getId());
        columnBean.persist(columnEntity);

        BoardDto boardDto = loadBoardById(boardId);
        BoardEntity boardEntity = new BoardEntity();
        boardEntity.setId(boardDto.getId());
        boardEntity.setBoardName(boardDto.getName());
        boardEntity.getColumns().add(columnEntity);
        boardBean.persist(boardEntity);
    }

    @Override
    public void createNewTicketForColumn(BigInteger columnId, TicketDto ticketDto){
        TicketEntity ticketEntity = new TicketEntity();
        ticketEntity.setId(ticketDto.getId());
        ticketEntity.setTitle(ticketDto.getTitle());
        ticketEntity.setDescription(ticketDto.getDescription());
        ticketBean.persist(ticketEntity);

        ColumnDto columnDto = loadOneColumn(columnId);
        ColumnEntity columnEntity = new ColumnEntity();
        columnEntity.setId(columnDto.getId());
        columnEntity.getTickets().add(ticketEntity);
        columnBean.persist(columnEntity);
    }
}
