package ru.gui.curators.issues.tracker.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.math.BigInteger;

@Embeddable
public class UserBoardPk implements Serializable {
    @Column(name = "USER_ID")
    private BigInteger userId;

    @Column(name = "BOARD_ID")
    private BigInteger boardId;

    public BigInteger getUserId() {
        return userId;
    }

    public void setUserId(BigInteger userId) {
        this.userId = userId;
    }

    public BigInteger getBoardId() {
        return boardId;
    }

    public void setBoardId(BigInteger boardId) {
        this.boardId = boardId;
    }
}