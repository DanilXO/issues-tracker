package ru.gui.curators.issues.tracker.endpoint;

import ru.gui.curators.issues.tracker.dto.BoardDto;
import ru.gui.curators.issues.tracker.dto.ColumnDto;
import ru.gui.curators.issues.tracker.dto.LightBoardDto;
import ru.gui.curators.issues.tracker.dto.TicketDto;
import ru.gui.curators.issues.tracker.service.BoardService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.math.BigInteger;
import java.util.Collection;

@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Path("/issues-tracker")
public class BoardEndPoint {
    @Inject
    BoardService boardService;

    @GET
    @Path("board")
    public Collection<BoardDto> loadBoards() {
        return boardService.loadAllDashboards();
    }

    @GET
    @Path("board/{boardId}")
    public BoardDto loadOneBoard(@PathParam("boardId") BigInteger boardId) {
        return boardService.loadBoardById(boardId);
    }

    @GET
    @Path("ticket/{ticketId}")
    public TicketDto loadTicket (@PathParam("ticketId") BigInteger ticketId) {
        return boardService.loadTicketById(ticketId);
    }

    @GET
    @Path("user/{userId}/board")
    public Collection<BoardDto> loadUserBoards(@PathParam("userId") BigInteger userId) {
        return boardService.loadUserDashboards(userId);
    }

    @GET
    @Path("user/{userId}/lightBoard")
    public Collection<LightBoardDto> loadOneLightBoard(@PathParam("userId") BigInteger userId){
        return boardService.loadUserLightDashboards(userId);
    }

    @POST
    @Path("board")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createBoard(BoardDto board) {
        boardService.createNewBoard(board);
    }

    @POST
    @Path("board/{boardId}/column")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createColumn(@PathParam("boardId") BigInteger boardId, ColumnDto columnDto) {
        System.out.println(columnDto);
        boardService.createNewColumnForBoard(boardId, columnDto);
    }

    @POST
    @Path("board/{boardId}/{columnId}/ticket")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createTicket(@PathParam("columnId") BigInteger columnId, TicketDto ticketDto) {
        boardService.createNewTicketForColumn(columnId, ticketDto);
    }
}
