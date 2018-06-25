package ru.gui.curators.issues.tracker.converter;

import ru.gui.curators.issues.tracker.dto.UserDto;
import ru.gui.curators.issues.tracker.entity.UserEntity;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class UserConverter {
    public UserDto convert(UserEntity userEntity) {
        return new UserDto(userEntity.getId(), userEntity.getLogin());
    }
}