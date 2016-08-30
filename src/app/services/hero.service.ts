import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES, ABC } from '../mocks/mock-heroes';
import { Http, Request, Response, Headers } from '@angular/http';
import './rxjs-operators';
import { Observable } from 'rxjs/observable';

@Injectable()
export class HeroService {

  //private herosUrl = './assets/datas/mock-heroes.json';
  private herosUrl = '../mocks/heroes';

  constructor(private http: Http) { }

  private handlePromiseError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  //get
  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.herosUrl)
      .toPromise()
      .then(res => res.json().data as Hero[])
      .catch(this.handlePromiseError);
    //Mock Data的寫法
    //return Promise.resolve(HEROES);
  }

  getHeroe(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  //add
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.herosUrl, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handlePromiseError);
  }

  //edit
  private put(hero: Hero): Promise<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.herosUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handlePromiseError);
  }

  //delete
  delete(hero: Hero): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.herosUrl}/${hero.id}`;
    return this.http.delete(url, { headers: headers })
      .toPromise()
      .catch(this.handlePromiseError);
  }

  //save
  save(hero:Hero):Promise<Hero>{
    if(hero.id){
      return this.put(hero);
    }
    return this.post(hero);
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







  getHttpHeroes(): Observable<Hero[]> {
    return this.http.get(this.herosUrl)
      .map(res => res.json().data)
  }

  getHttpHeroesSlowly(): Observable<Hero[]> {
    let data: Observable<Hero[]>;
    data = this.http.get(this.herosUrl)
      .map(this.extratData)
      .delay(500)
      .catch(this.handleError);
    return data;
  }

  private extratData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
