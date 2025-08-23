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
    status_id: 'in_progress' | 'released' | 'concept';
    comingSoon?: boolean;
    now?: Date;
    releaseDate?: Date;
    timeDiff?: number;
  }