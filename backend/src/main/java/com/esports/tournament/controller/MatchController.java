package com.esports.tournament.controller;

import com.esports.tournament.entity.Match;
import com.esports.tournament.entity.MatchResult;
import com.esports.tournament.service.MatchService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/matches")
public class MatchController {

    private final MatchService matchService;

    public MatchController(MatchService matchService) {
        this.matchService = matchService;
    }

    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        return ResponseEntity.ok(matchService.getAllMatches());
    }

    @GetMapping("/results")
    public ResponseEntity<List<MatchResult>> getAllMatchResults() {
        return ResponseEntity.ok(matchService.getAllMatchResults());
    }
}
