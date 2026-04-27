package com.esports.tournament.service;

import com.esports.tournament.entity.Player;
import com.esports.tournament.repository.PlayerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PlayerService {
    @org.springframework.beans.factory.annotation.Autowired private PlayerRepository playerRepository;

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public Player createPlayer(Player player) {
        return playerRepository.save(player);
    }
}
