import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES,ABC } from '../mocks/mock-heroes';

@Injectable()
export class HeroService {
  constructor() { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroesSlowly():Promise<Hero[]>{
    return new Promise<Hero[]>(
      (resolve,reject) => setTimeout(function() {
      resolve(HEROES);
      //Catch後的回應
      //reject(ABC);
    }, 1000)

      
    );
  }
}
