package ru.gui.curators.issues.tracker.endpoint;

import ru.gui.curators.issues.tracker.dto.CredentialDto;
import ru.gui.curators.issues.tracker.dto.UserDto;
import ru.gui.curators.issues.tracker.service.UserService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Path("/issues-tracker")
public class AuthenticationEndPoint {
    @Inject
    UserService userService;

    @POST
    @Path("auth")
    @Consumes(MediaType.APPLICATION_JSON)
    public UserDto authentification(CredentialDto credentialDto) {
        return userService.loadByCredential(credentialDto);
    }
}