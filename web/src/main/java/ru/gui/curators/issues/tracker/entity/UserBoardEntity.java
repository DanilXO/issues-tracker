package ru.gui.curators.issues.tracker.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = " USERS_BOARDS")
public class UserBoardEntity implements Serializable {
    @EmbeddedId
    private UserBoardPk userBoardPk;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "USER_ID")
    private UserEntity user;

    @ManyToOne
    @MapsId("boardId")
    @JoinColumn(name = "BOARD_ID")
    private BoardEntity board;

    @OneToOne()
    @JoinColumn(name = "ROLE_ID")
    private RoleEntity role;

    public UserBoardPk getUserBoardPk() {
        return userBoardPk;
    }

    public void setUserBoardPk(UserBoardPk userBoardPk) {
        this.userBoardPk = userBoardPk;
    }

    public UserEntity getUser() {
        return user;
    }

    public void setUser(UserEntity user) {
        this.user = user;
    }

    public BoardEntity getBoard() {
        return board;
    }

    public void setBoard(BoardEntity board) {
        this.board = board;
    }

    public RoleEntity getRole() {
        return role;
    }

    public void setRole(RoleEntity role) {
        this.role = role;
    }
}
