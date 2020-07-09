import { Hero } from '@/Hero';
import { HEROES } from '@/mock-heroes';
import { MessageService } from '@/services/MessageService';

export const HeroService = {
  getHeroes(): Promise<Hero[]> {
    MessageService.add('HeroService: fetched heroes');
    return Promise.resolve(HEROES);
  },

  getHero(id: number): Promise<null | Hero> {
    MessageService.add(`HeroService: fetched hero id=${id}`);
    const hero = HEROES.find(hero => hero.id === id) || null;
    return Promise.resolve(hero);
  }
};
