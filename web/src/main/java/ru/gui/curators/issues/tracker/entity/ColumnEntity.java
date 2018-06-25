package ru.gui.curators.issues.tracker.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "COLUMNS")
public class ColumnEntity implements Serializable {
    @Id
    @SequenceGenerator(name = "id_column_sequence", sequenceName = "column_sequence", initialValue = 100, allocationSize = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_column_sequence")
    @Column(name = "COLUMN_ID", nullable = false)
    private BigInteger id;

    @Column(name = "COLUMN_NAME", nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private BoardEntity board;

    @OneToMany(mappedBy = "column")
    private List<TicketEntity> tickets;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BoardEntity getBoard() {
        return board;
    }

    public void setBoard(BoardEntity board) {
        this.board = board;
    }

    public List<TicketEntity> getTickets() {
        return tickets;
    }

    public void setTickets(List<TicketEntity> tickets) {
        this.tickets = tickets;
    }
}
