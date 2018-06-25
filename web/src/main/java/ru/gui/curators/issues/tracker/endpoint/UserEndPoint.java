package ru.gui.curators.issues.tracker.endpoint;

import ru.gui.curators.issues.tracker.dto.CredentialDto;
import ru.gui.curators.issues.tracker.service.UserService;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Path("/issues-tracker")
public class UserEndPoint {
    @Inject
    UserService userService;

    @POST
    @Path("user")
    @Consumes(MediaType.APPLICATION_JSON)
    public void createUser(CredentialDto creadentialDto) {
        userService.create(creadentialDto);
    }
}
