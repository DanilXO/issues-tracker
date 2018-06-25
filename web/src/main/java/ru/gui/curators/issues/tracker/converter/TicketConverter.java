package ru.gui.curators.issues.tracker.converter;

import ru.gui.curators.issues.tracker.dto.TicketDto;
import ru.gui.curators.issues.tracker.entity.TicketEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TicketConverter {
    public TicketDto convert(TicketEntity ticketEntity) {
        return new TicketDto(ticketEntity.getId(), ticketEntity.getTitle(), ticketEntity.getDescription());
    }
}
