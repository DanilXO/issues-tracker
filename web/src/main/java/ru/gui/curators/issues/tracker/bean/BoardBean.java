package ru.gui.curators.issues.tracker.bean;

import ru.gui.curators.issues.tracker.entity.BoardEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigInteger;

@Stateless
public class BoardBean extends AbstractEao<BoardEntity, BigInteger> {

    @PersistenceContext
    private EntityManager entityManager;

    BoardBean() {
        super(BoardEntity.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return entityManager;
    }
}
