import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Hero} from './../../models/hero';
import { Params, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  title = 'HERO DETAIL';
  @Input()
  hero: Hero;

  @Output()
  close = new EventEmitter();

  error: any;
  navigated = false;

  constructor(private route: ActivatedRoute
    , private heroService: HeroService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.navigated = true;
        let id = +params['id'];
        this.heroService.getHeroe(id).then(hero => this.hero = hero);
      }
      else {
        this.navigated = false;
        this.hero = new Hero();
      }
    })
  }
  
  save(): void{
    this.heroService.save(this.hero)
    .then(hero => {
      this.hero = hero;
      this.goBack(hero);
    })
    .catch(error => this.error = error);
  }

  goBack(savedHero:Hero=null):void{
    this.close.emit(savedHero);
    if(this.navigated)
    {
      window.history.back();
    }
  }
  
  // goBack(): void {
  //   window.history.back();
  // }

}
