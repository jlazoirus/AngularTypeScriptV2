import { Component } from '@angular/core';
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
import {HomeComponent} from './home';

export const routes: RouterConfig = [
  { path: 'home', component: HomeComponent }
];
export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives:[ROUTER_DIRECTIVES]
})

export class AppComponent {
  title = 'app works!';
}
