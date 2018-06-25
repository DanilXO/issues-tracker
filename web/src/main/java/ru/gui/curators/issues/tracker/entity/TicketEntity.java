package ru.gui.curators.issues.tracker.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;

@Entity
@Table(name = "TICKETS")
public class TicketEntity implements Serializable {
    @Id
    @SequenceGenerator(name = "id_ticket_sequence", sequenceName = "ticket_sequence", initialValue = 100, allocationSize = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_ticket_sequence")
    @Column(name = "TICKET_ID", nullable = false)
    private BigInteger id;

    @Column(name = "TICKET_TITLE", nullable = false)
    private String title;

    @Column(name = "TICKET_DESCRIPTION", nullable = false)
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "COLUMN_ID")
    private ColumnEntity column;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ColumnEntity getColumn() {
        return column;
    }

    public void setColumn(ColumnEntity column) {
        this.column = column;
    }
}

