package ru.gui.curators.issues.tracker.bean;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.io.Serializable;
import java.util.List;

public abstract class AbstractEao<Entity extends Serializable, Pk extends Serializable>
{
    private Class<Entity> entityClass;

    AbstractEao(Class<Entity> entityClass)
    {
        this.entityClass = entityClass;
    }

    protected abstract EntityManager getEntityManager();

    public Class<Entity> getEntityClass()
    {
        return entityClass;
    }

    public void persist(Entity entity)
    {
        getEntityManager().persist(entity);
    }

    public Entity merge(Entity entity)
    {
        return getEntityManager().merge(entity);
    }

    public void remove(Entity entity)
    {
        if (entity == null)
        {
            throw new  IllegalStateException("You can not delete a null object");
        }
        getEntityManager().remove(entity);
    }

    public void removeByPk(Pk id)
    {
        Entity entity = getEntityManager().find(entityClass, id);
        if (entity == null) {
            return;
        }
        remove(entity);
    }

    public Entity find(Pk id)
    {
        return getEntityManager().find(entityClass, id);
    }

    public void refresh(Entity entity)
    {
        getEntityManager().refresh(entity);
    }

    public TypedQuery<Entity> namedQuery(String queryName)
    {
        return getEntityManager().createNamedQuery(queryName, entityClass);
    }

    public TypedQuery<Entity> query(String queryString)
    {
        return getEntityManager().createQuery(queryString, entityClass);
    }

    public List<Entity> loadAll()
    {
        CriteriaBuilder builder = getEntityManager().getCriteriaBuilder();
        CriteriaQuery<Entity> query = builder.createQuery(entityClass);
        Root<Entity> entityRoot = query.from(entityClass);
        query.select(entityRoot);
        return getEntityManager().createQuery(query).getResultList();
    }
}