package ru.gui.curators.issues.tracker.dto;

public class ErrorObject
{
    private final int errorCode;
    private final String uiMessage;
    private String developerMessage;

    public ErrorObject(int errorCode, String uiMessage)
    {
        this.errorCode = errorCode;
        this.uiMessage = uiMessage;
    }

    public ErrorObject(int errorCode, String uiMessage, String developerMessage)
    {
        this.errorCode = errorCode;
        this.uiMessage = uiMessage;
        this.developerMessage = developerMessage;
    }

    public int getErrorCode()
    {
        return errorCode;
    }

    public String getUiMessage()
    {
        return uiMessage;
    }

    public String getDeveloperMessage()
    {
        return developerMessage;
    }
}
