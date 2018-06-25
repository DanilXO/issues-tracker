package ru.gui.curators.issues.tracker.dto;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

public class ColumnDto implements Serializable{
    private final BigInteger id;
    private final String name;
    private final List<TicketDto> tickets;

    public ColumnDto (BigInteger id, String name, List<TicketDto> tickets) {
        this.id = id;
        this.name = name;
        this.tickets = tickets;
    }
    public ColumnDto () {
        this(BigInteger.ONE, "", null);
    }

    public BigInteger getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<TicketDto> getTickets() {
        return tickets;
    }
}
