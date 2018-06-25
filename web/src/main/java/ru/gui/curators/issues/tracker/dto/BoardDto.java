package ru.gui.curators.issues.tracker.dto;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

public class BoardDto implements Serializable {
    private final BigInteger id;
    private final String name;
    private final List<ColumnDto> columns;

    public BoardDto(BigInteger id, String name,List<ColumnDto> columns) {
        this.id = id;
        this.name = name;
        this.columns = columns;
    }

    public BoardDto() {
        this(BigInteger.ONE, "stub name",null);
    }

    public BigInteger getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public List<ColumnDto> getColumns() {
        return columns;
    }
}
