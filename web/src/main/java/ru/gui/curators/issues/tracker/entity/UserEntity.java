package ru.gui.curators.issues.tracker.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

import static ru.gui.curators.issues.tracker.entity.UserEntity.FIND_USER_BY_PASSWORD_ADN_LOGIN;

@Entity
@Table(name = "USERS")
@NamedQueries({
        @NamedQuery(name = FIND_USER_BY_PASSWORD_ADN_LOGIN,
                query = "select u from UserEntity u where u.password = :password and u.login = :login")
})

public class UserEntity implements Serializable {
    public static final String FIND_USER_BY_PASSWORD_ADN_LOGIN = "findUserByPasswordAndLogin";

    @Id
    @SequenceGenerator(name = "id_user_sequence", sequenceName = "user_sequence", initialValue = 100, allocationSize = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_user_sequence")
    @Column(name = "USER_ID")
    private BigInteger id;

    @Column(name = "LOGIN", nullable = false)
    private String login;

    @Column(name = "PASSWORD", nullable = false)
    private String password;

    @OneToMany(mappedBy = "user")
    private List<UserBoardEntity> usersBoards;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<UserBoardEntity> getUsersBoards() {
        return usersBoards;
    }

    public void setUsersBoards(List<UserBoardEntity> usersBoards) {
        this.usersBoards = usersBoards;
    }
}
