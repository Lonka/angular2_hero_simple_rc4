/// <reference path="../../../../../typings/globals/underscore/index.d.ts" />
import * as _ from 'underscore';
import { Component } from '@angular/core';
import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[AlertComponent]
})
export class AppComponent {
  title = 'app works!';
  ngOnInit(){
     _.each([1, 2, 3], alert);
  }
}
