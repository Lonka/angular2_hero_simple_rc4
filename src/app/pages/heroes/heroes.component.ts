import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from '../../components/hero-detail';
import {Hero} from '../../models/hero';
import {HeroService} from '../../services/hero.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Lonka',
  };
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router:Router,
    private heroService: HeroService) {
  }

  getHeroes(): void {
    // this.heroService.getHeroes()
    //   .then(heroes => this.heroes = heroes)
    //   .catch(error => this.heroes = error);
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.heroes = error);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  gotoDetail():void{
    let link = ['/detail',this.selectedHero.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getHeroes();
    //_.each([1, 2, 3], alert);
  }
}
