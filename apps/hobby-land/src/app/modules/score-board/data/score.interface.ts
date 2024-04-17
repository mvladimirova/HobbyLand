export interface Score {
  date: Date;
  gameName: string;
  players: string[];
  winner: Player;
}

export interface Player {
  name: string;
  id: string;
}
