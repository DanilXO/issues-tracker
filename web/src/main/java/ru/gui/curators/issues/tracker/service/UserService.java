package ru.gui.curators.issues.tracker.service;

import ru.gui.curators.issues.tracker.dto.CredentialDto;
import ru.gui.curators.issues.tracker.dto.UserDto;

import java.math.BigInteger;
import java.util.List;

public interface UserService {
    List<UserDto> loadAll();

    UserDto load(BigInteger id);

    UserDto loadByCredential(CredentialDto creadentialDto);

    void create(CredentialDto creadentialDto);
}
