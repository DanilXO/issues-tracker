package ru.gui.curators.issues.tracker.entity;

import javax.persistence.*;
import java.math.BigInteger;

@Entity
@Table(name = "ROLES")
public class RoleEntity {
    @Id
    @SequenceGenerator(name = "id_role_sequence", sequenceName = "role_sequence", initialValue = 100, allocationSize = 10)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "id_role_sequence")
    @Column(name = "ROLE_ID", nullable = false)
    private BigInteger id;

    @Column(name = "ROLE_NAME", nullable = false)
    private String roleName;

    @OneToOne(mappedBy="role")
    private UserBoardEntity userBoard;

    public BigInteger getId() {
        return id;
    }

    public void setId(BigInteger id) {
        this.id = id;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }
}
