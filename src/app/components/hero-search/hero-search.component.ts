import { Component, OnInit } from '@angular/core';
import { HeroSearchService }  from '../../services/hero-search.service';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import {Hero} from '../../models/Hero';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers:[HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes:Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private heroSearchService:HeroSearchService,
  private router:Router ) {}
  
  search(term:string):void{
    this.searchTerms.next(term);
  }
  
  ngOnInit() {
    this.heroes = this.searchTerms.debounceTime(300)
    .distinctUntilChanged()
    .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
    .catch(error => 
    {
      console.log(error);
      return  Observable.of<Hero[]>([])
    });
  }
  
  gotoDetail(hero:Hero) :void{
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
