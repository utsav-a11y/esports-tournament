package com.esports.tournament.service;

import com.esports.tournament.entity.Tournament;
import com.esports.tournament.repository.TournamentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class TournamentService {
    @org.springframework.beans.factory.annotation.Autowired private TournamentRepository tournamentRepository;

    public List<Tournament> getAllTournaments() {
        return tournamentRepository.findAll();
    }

    public Tournament createTournament(Tournament tournament) {
        return tournamentRepository.save(tournament);
    }
}
