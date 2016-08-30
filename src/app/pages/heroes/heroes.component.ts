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
  error: any;
  addingHero: any;

  hero: Hero = {
    id: 1,
    name: 'Lonka',
  };
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService.delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) {
          this.selectedHero = null;
        }
      })
      .catch(error => this.error = error);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.heroes = error);

  }

  onSelect(hero: Hero): void {
    this.addingHero=false;
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    let link = ['/detail', this.selectedHero.id];
    this.router.navigate(link);
  }

  ngOnInit() {
    this.getHeroes();
    //_.each([1, 2, 3], alert);
  }
}
