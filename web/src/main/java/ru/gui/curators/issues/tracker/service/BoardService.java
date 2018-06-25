package ru.gui.curators.issues.tracker.service;

import ru.gui.curators.issues.tracker.dto.BoardDto;
import ru.gui.curators.issues.tracker.dto.ColumnDto;
import ru.gui.curators.issues.tracker.dto.LightBoardDto;
import ru.gui.curators.issues.tracker.dto.TicketDto;

import java.math.BigInteger;
import java.util.List;

public interface BoardService {
    List<BoardDto> loadAllDashboards();

    BoardDto loadBoardById (BigInteger id);

    TicketDto loadTicketById(BigInteger id);

    List<BoardDto> loadUserDashboards(BigInteger userId);

    List<LightBoardDto> loadUserLightDashboards(BigInteger userId);

    ColumnDto loadOneColumn(BigInteger id);

    void createNewBoard(BoardDto boardDto);

    void createNewColumnForBoard(BigInteger boardId, ColumnDto columnDto);

    void createNewTicketForColumn(BigInteger columnId, TicketDto ticketDto);
}
