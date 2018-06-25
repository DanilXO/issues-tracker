package ru.gui.curators.issues.tracker.exception.mapper;

import ru.gui.curators.issues.tracker.dto.ErrorObject;
import ru.gui.curators.issues.tracker.exception.IssuesTrackerApplicationException;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.*;

@Provider
public class IssuesTrackerExceptionMapper implements ExceptionMapper<IssuesTrackerApplicationException>
{
    @Override
    public Response toResponse(IssuesTrackerApplicationException e)
    {
        return Response.serverError()
                .entity(new ErrorObject(500, e.getMessage()))
                .build();
    }
}