package ru.gui.curators.issues.tracker.dto;

public class CredentialDto
{
    private final String login;
    private final String password;

    public CredentialDto(String login, String password) {
        this.login = login;
        this.password = password;
    }

    public CredentialDto() {
        this("testuser","qwerty");
    }

    public String getLogin() {
        return login;
    }

    public String getPassword() {
        return password;
    }
}
