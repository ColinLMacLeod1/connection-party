export interface Room {
  roomID: string;
  games: Game[];
}

export interface Game {
  createdBy: string;
  title: string;
  yellow: Category;
  green: Category;
  blue: Category;
  purple: Category;
}

export interface Category {
  title: string;
  words: string[];
  hint: string;
}
