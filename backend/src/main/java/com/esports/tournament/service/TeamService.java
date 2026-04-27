package com.esports.tournament.service;

import com.esports.tournament.entity.Team;
import com.esports.tournament.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class TeamService {
    @org.springframework.beans.factory.annotation.Autowired private TeamRepository teamRepository;

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team registerTeam(Team team) {
        return teamRepository.save(team);
    }
}
