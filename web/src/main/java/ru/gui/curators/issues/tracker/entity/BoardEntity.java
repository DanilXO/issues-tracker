package ru.gui.curators.issues.tracker.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

@Entity
@Table(name = "BOARDS")
public class BoardEntity implements Serializable {
    @Id
    @SequenceGenerator(name = "id_board_sequence", sequenceName = "board_sequence", initialValue = 100, allocationSize = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_board_sequence")
    @Column(name = "BOARD_ID", nullable = false)
    private BigInteger id;

    @Column(name = "BOARD_NAME", nullable = false)
    private String boardName;

    @OneToMany(mappedBy = "user")
    private List<UserBoardEntity> usersBoards;

    @OneToMany(mappedBy = "board")
    private List<ColumnEntity> columns;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getBoardName() {
        return boardName;
    }

    public void setBoardName(String boardName) {
        this.boardName = boardName;
    }

    public List<UserBoardEntity> getUsersBoards() {
        return usersBoards;
    }

    public void setUsersBoards(List<UserBoardEntity> usersBoards) {
        this.usersBoards = usersBoards;
    }

    public List<ColumnEntity> getColumns() {
        return columns;
    }

    public void setColumns(List<ColumnEntity> columns) {
        this.columns = columns;
    }
}
