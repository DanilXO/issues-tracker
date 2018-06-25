package ru.gui.curators.issues.tracker.converter;

import ru.gui.curators.issues.tracker.dto.BoardDto;
import ru.gui.curators.issues.tracker.dto.LightBoardDto;
import ru.gui.curators.issues.tracker.entity.BoardEntity;
import ru.gui.curators.issues.tracker.entity.UserBoardEntity;

import javax.enterprise.context.ApplicationScoped;
import java.util.Collections;

@ApplicationScoped
public class UserBoardConverter {
    public BoardDto convert(UserBoardEntity userBoardEntity) {
        return new BoardDto(userBoardEntity.getBoard().getId(), userBoardEntity.getBoard().getBoardName(), Collections.emptyList());
    }

    public LightBoardDto lightConvert(UserBoardEntity userBoardEntity) {
        return new LightBoardDto(userBoardEntity.getBoard().getId(), userBoardEntity.getBoard().getBoardName());
    }
}