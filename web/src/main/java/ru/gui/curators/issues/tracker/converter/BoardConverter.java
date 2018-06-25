package ru.gui.curators.issues.tracker.converter;

import ru.gui.curators.issues.tracker.dto.BoardDto;
import ru.gui.curators.issues.tracker.entity.BoardEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.stream.Collectors;

@ApplicationScoped
public class BoardConverter {
    private final ColumnConverter columnConverter;

    @Inject
    public BoardConverter(ColumnConverter columnConverter) {
        this.columnConverter = columnConverter;
    }

    public BoardConverter() {
        this(null);
    }

    public BoardDto convert(BoardEntity boardEntity) {
        return new BoardDto(boardEntity.getId(),
                boardEntity.getBoardName(),
                boardEntity.getColumns().stream()
                .map(columnConverter::convert)
                .collect(Collectors.toList()));
    }
}