import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {APP_ROUTER_PROVIDERS} from './app/app.routing';
import {HeroService} from './app/services/hero.service';
import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryBackendService,SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './app/mocks/in-memory-data.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS
    ,HTTP_PROVIDERS
    ,HeroService
    ,{ provide: XHRBackend, useClass: InMemoryBackendService } // in-mem server
    ,{ provide: SEED_DATA, useClass: InMemoryDataService }      // in-mem server data
]);
