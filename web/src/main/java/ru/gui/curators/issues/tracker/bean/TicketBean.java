package ru.gui.curators.issues.tracker.bean;

import ru.gui.curators.issues.tracker.entity.TicketEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigInteger;

@Stateless
public class TicketBean extends AbstractEao<TicketEntity, BigInteger> {
    @PersistenceContext
    private EntityManager entityManager;

    TicketBean() {
        super(TicketEntity.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return entityManager;
    }
}
