package ru.gui.curators.issues.tracker.dto;

import java.io.Serializable;
import java.math.BigInteger;

public class UserDto implements Serializable {
    private final BigInteger id;
    private final String login;

    public UserDto(BigInteger id, String login) {
        this.id = id;
        this.login = login;
    }

    public UserDto() {
        this(BigInteger.ZERO, "testuser");
    }

    public BigInteger getId() {
        return id;
    }

    public String getLogin() {
        return login;
    }
}
