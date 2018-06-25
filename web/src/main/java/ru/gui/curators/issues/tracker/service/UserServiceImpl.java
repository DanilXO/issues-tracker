package ru.gui.curators.issues.tracker.service;

import ru.gui.curators.issues.tracker.bean.UserBean;
import ru.gui.curators.issues.tracker.converter.UserConverter;
import ru.gui.curators.issues.tracker.dto.CredentialDto;
import ru.gui.curators.issues.tracker.dto.UserDto;
import ru.gui.curators.issues.tracker.entity.UserEntity;
import ru.gui.curators.issues.tracker.exception.IssuesTrackerApplicationException;

import javax.ejb.EJBException;
import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@ApplicationScoped
public class UserServiceImpl implements UserService {
    private final UserBean userBean;
    private final UserConverter userConverter;

    @Inject
    public UserServiceImpl(UserBean userBean,
                           UserConverter userConverter) {
        this.userBean = userBean;
        this.userConverter = userConverter;
    }

    public UserServiceImpl() {
        this(null, null);
    }

    @Override
    @Transactional
    public List<UserDto> loadAll() {
        return userBean.loadAll().stream()
                .map(userConverter::convert)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public UserDto load(BigInteger id) {
        try
        {
            return Optional.of(userBean.find(id))
                    .map(userConverter::convert)
                    .orElseThrow(() -> new IssuesTrackerApplicationException(String.format("Not find User with id %s", id)));
        }
        catch (EJBException e)
        {
            throw new IssuesTrackerApplicationException(String.format("Not find User with id %s", id));
        }
    }

    @Override
    public UserDto loadByCredential(CredentialDto creadentialDto) {
        try
        {
            return Optional.of(userBean.loadUserByCredential(creadentialDto.getLogin(), creadentialDto.getPassword()))
                    .map(userConverter::convert)
                    .orElseThrow(() -> new IssuesTrackerApplicationException("Not exists user with this Credential"));

        }
        catch (EJBException e)
        {
            throw new IssuesTrackerApplicationException("Not exists user with this Credential", e);
        }
    }

    @Override
    @Transactional
    public void create(CredentialDto creadentialDto){
        UserEntity userEntity = new UserEntity();
        userEntity.setLogin(creadentialDto.getLogin());
        userEntity.setPassword(creadentialDto.getPassword());
        userBean.persist(userEntity);
    }
}
