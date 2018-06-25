package ru.gui.curators.issues.tracker.bean;

import ru.gui.curators.issues.tracker.entity.ColumnEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigInteger;

@Stateless
public class ColumnBean extends AbstractEao<ColumnEntity, BigInteger> {
    @PersistenceContext
    private EntityManager entityManager;

    ColumnBean() {
        super(ColumnEntity.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return entityManager;
    }
}
