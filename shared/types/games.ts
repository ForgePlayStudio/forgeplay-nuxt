export interface IGame {
    path: string;
    game_id: string;
    name: string;
    icon: string;
    hero_bg: string;
    hero_image: string;
}
export interface IGameStatus {
    status: 'Work in progress' | 'Released' | 'Concept';
    comingSoon?: boolean;
    now?: Date;
    releaseDate?: Date;
    timeDiff?: number;
  }