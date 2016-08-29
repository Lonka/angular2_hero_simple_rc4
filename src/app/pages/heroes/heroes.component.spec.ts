/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';

describe('Component: Heroes', () => {
  beforeEach(() => {
    addProviders([HeroesComponent]);
  });

  it('should create the app',
    inject([HeroesComponent], (app: HeroesComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title \'app works!\'',
    inject([HeroesComponent], (app: HeroesComponent) => {
      expect(app.title).toEqual('app works!');
    }));
});
