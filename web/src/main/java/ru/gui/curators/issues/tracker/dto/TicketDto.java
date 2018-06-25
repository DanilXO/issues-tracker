package ru.gui.curators.issues.tracker.dto;

import java.io.Serializable;
import java.math.BigInteger;

public class TicketDto implements Serializable{
    private final BigInteger id;
    private final String title;
    private final String description;

    public TicketDto (BigInteger id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
    public TicketDto () {
        this(BigInteger.ONE, "NULL", "NULL");
    }

    public BigInteger getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }
}
