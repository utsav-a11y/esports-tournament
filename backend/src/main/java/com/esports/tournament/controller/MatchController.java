package com.esports.tournament.controller;

import com.esports.tournament.entity.Match;
import com.esports.tournament.entity.MatchResult;
import com.esports.tournament.service.MatchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/matches")
@CrossOrigin(origins = "*")

public class MatchController {
    @org.springframework.beans.factory.annotation.Autowired private MatchService matchService;

    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        return ResponseEntity.ok(matchService.getAllMatches());
    }

    @GetMapping("/results")
    public ResponseEntity<List<MatchResult>> getAllMatchResults() {
        return ResponseEntity.ok(matchService.getAllMatchResults());
    }
}
