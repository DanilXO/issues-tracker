package ru.gui.curators.issues.tracker.bean;

import ru.gui.curators.issues.tracker.entity.UserEntity;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.math.BigInteger;

import static ru.gui.curators.issues.tracker.entity.UserEntity.FIND_USER_BY_PASSWORD_ADN_LOGIN;

@Stateless
public class UserBean extends AbstractEao<UserEntity, BigInteger> {

    @PersistenceContext
    private EntityManager entityManager;

    UserBean() {
        super(UserEntity.class);
    }

    @Override
    protected EntityManager getEntityManager() {
        return entityManager;
    }

    public UserEntity loadUserByCredential(String login, String password) {
        return entityManager.createNamedQuery(FIND_USER_BY_PASSWORD_ADN_LOGIN, UserEntity.class)
                .setParameter("password", password)
                .setParameter("login", login)
                .getSingleResult();
    }
}
