import { Component, OnInit } from '@angular/core';
//two-way bind import
//http://stackoverflow.com/questions/30468290/angular2-two-way-data-binding
import { FORM_DIRECTIVES }   from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

export class AppComponent {
  title='Tour of Heroes';
}


