package com.esports.tournament.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "esports_teams")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "team_id")
    private Integer id;

    @Column(name = "team_name")
    private String name;
}
