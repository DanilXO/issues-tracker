package ru.gui.curators.issues.tracker;

import io.swagger.v3.jaxrs2.Reader;
import io.swagger.v3.jaxrs2.ReaderListener;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

import javax.enterprise.inject.spi.CDI;
import javax.servlet.ServletContext;
import java.util.Collections;

@OpenAPIDefinition
public class OpenApiUpdater implements ReaderListener {
    @Override
    public void beforeScan(Reader reader, OpenAPI openAPI) {
        //no need
    }

    @Override
    public void afterScan(Reader reader, OpenAPI openAPI) {
        openAPI.info(
                new Info()
                        .title("Issue Tracker Project Api")
                        .version(getClass().getPackage().getImplementationVersion())
        );

        openAPI.servers(Collections.singletonList(new Server().description("AWESOME Server").url(CDI.current().select(ServletContext.class).get().getContextPath())));
    }
}
