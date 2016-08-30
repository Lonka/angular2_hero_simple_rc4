import { Component, OnInit } from '@angular/core';
import { HeroService  } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import {  Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  errorMessage:any;
  constructor(private router: Router,
    private heroService: HeroService) { }

  ngOnInit() {
    //Mock Data 的方法
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    
    //還在試
    // this.heroService.getHttpHeroesSlowly()
    //   .subscribe(
    //   value => {
    //     this.heroes = value;
    //   },
    //   error => {
    //     this.errorMessage=<any>error;
    //   }
    //   );
    
    
  }
  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
