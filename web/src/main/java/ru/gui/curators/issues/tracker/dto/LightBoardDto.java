package ru.gui.curators.issues.tracker.dto;

import java.io.Serializable;
import java.math.BigInteger;

public class LightBoardDto implements Serializable {
    private final BigInteger id;
    private final String name;

    public LightBoardDto(BigInteger id, String name) {
        this.id = id;
        this.name = name;
    }

    public LightBoardDto() {
        this(BigInteger.ONE, "stub name");
    }

    public BigInteger getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
