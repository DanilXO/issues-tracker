package ru.gui.curators.issues.tracker.exception;

import javax.ejb.ApplicationException;

@ApplicationException(rollback = true)
public class IssuesTrackerApplicationException extends RuntimeException
{
    public IssuesTrackerApplicationException(String message) {
        super(message);
    }

    public IssuesTrackerApplicationException(String message, Throwable cause) {
        super(message, cause);
    }
}
