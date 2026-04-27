package com.esports.tournament.service;

import com.esports.tournament.entity.Match;
import com.esports.tournament.entity.MatchResult;
import com.esports.tournament.repository.MatchRepository;
import com.esports.tournament.repository.MatchResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MatchService {
    @org.springframework.beans.factory.annotation.Autowired private MatchRepository matchRepository;
    @org.springframework.beans.factory.annotation.Autowired private MatchResultRepository matchResultRepository;

    public List<Match> getAllMatches() {
        return matchRepository.findAll();
    }

    public List<MatchResult> getAllMatchResults() {
        return matchResultRepository.findAll();
    }
}
