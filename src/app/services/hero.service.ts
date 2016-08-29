import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES, ABC } from '../mocks/mock-heroes';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  constructor( private http:Http ) { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  getHeroe(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise<Hero[]>(
      (resolve, reject) => setTimeout(function () {
        resolve(HEROES);
        //Catch後的回應
        //reject(ABC);
      }, 1000)
    );
  }
  getHttpHeroes():Hero[]{
    let heroes:Hero[];
    this.http.get('../mocks/mock-heroes.json')
    .map(res => res.json())
    .subscribe(value => {
      heroes=value;
    });
    return heroes;
  }
}
