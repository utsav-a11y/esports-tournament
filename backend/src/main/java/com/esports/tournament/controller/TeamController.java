package com.esports.tournament.controller;

import com.esports.tournament.entity.Team;
import com.esports.tournament.service.TeamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teams")
@CrossOrigin(origins = "*")

public class TeamController {
    @org.springframework.beans.factory.annotation.Autowired private TeamService teamService;

    @GetMapping
    public ResponseEntity<List<Team>> getAllTeams() {
        return ResponseEntity.ok(teamService.getAllTeams());
    }

    @PostMapping("/register")
    public ResponseEntity<Team> registerTeam(@RequestBody Team team) {
        return ResponseEntity.ok(teamService.registerTeam(team));
    }
}
