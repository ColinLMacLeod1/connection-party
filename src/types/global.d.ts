export interface Room {
  roomID: string;
  games: Game[];
}

export interface Game {
  createdBy?: string;
  title?: string;
  yellow: Category;
  green: Category;
  blue: Category;
  purple: Category;
}

export interface Category {
  title: string;
  words: string[];
  hint?: string;
}


export interface GameSetup {
  createdBy: string;
  title: string;
  yellow: CategorySetup;
  green: CategorySetup;
  blue: CategorySetup;
  purple: CategorySetup;

}

interface CategorySetup {
  title: string;
  word1: string;
  word2: string;
  word3: string;
  word4: string;
  hint: string;
}