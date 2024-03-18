export interface Score {
  date: Date;
  gameName: string;
  players: Player[];
}

interface Player {
  name: string;
  winner?: boolean;
}
