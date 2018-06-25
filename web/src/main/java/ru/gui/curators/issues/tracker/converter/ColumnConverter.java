package ru.gui.curators.issues.tracker.converter;

import ru.gui.curators.issues.tracker.dto.ColumnDto;
import ru.gui.curators.issues.tracker.entity.ColumnEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.stream.Collectors;

@ApplicationScoped
public class ColumnConverter
{
    private final TicketConverter ticketConverter;

    @Inject
    public ColumnConverter(TicketConverter ticketConverter)
    {
        this.ticketConverter = ticketConverter;
    }

    public ColumnConverter()
    {
        this(null);
    }

    public ColumnDto convert(ColumnEntity columnEntity)
    {
        return new ColumnDto(columnEntity.getId(), columnEntity.getName(), columnEntity.getTickets()
                .stream()
                .map(ticketConverter::convert)
                .collect(Collectors.toList())
        );
    }
}
