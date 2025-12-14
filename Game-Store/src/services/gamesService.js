import { games } from '../data/games';

export function getAllGames() {
  return games;
}

export function getGameById(id) {
  return games.find(game => game.id === Number(id));
}