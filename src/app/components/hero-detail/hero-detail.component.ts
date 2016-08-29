import { Component, OnInit, Input } from '@angular/core';
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
  title='abc';
  @Input()
  hero: Hero;
  constructor(private route: ActivatedRoute
  ,private heroService:HeroService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id=+params['id'];
      this.heroService.getHeroe(id).then(hero=> this.hero = hero);
    })
  }
  
  goBack():void{
    window.history.back();
  }

}
