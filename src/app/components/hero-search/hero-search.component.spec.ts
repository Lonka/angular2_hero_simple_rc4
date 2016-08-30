/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HeroSearchComponent } from './hero-search.component';

describe('Component: HeroSearch', () => {
  it('should create an instance', () => {
    let component = new HeroSearchComponent();
    expect(component).toBeTruthy();
  });
});
