import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Pins}   from './pins/pin.component';
import {Menu}   from './menu/menu.component';
import {About}   from './about/about';
import {Home}   from './home/home';
import {Board}   from './board/board';
import {BoardDetail}   from './board/board-detail';

// import {DialogService}         from './dialog.service';
import {PinService}           from './pins/pin.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [ROUTER_DIRECTIVES, Menu]
})
@RouteConfig([
  {path: '/',   name: 'Home',     component: Home,} //useAsDefault: true},
  {path: '/about',   name: 'About',     component: About},
  {path: '/board',   name: 'Board',     component: Board},
  {path: '/board/:id', name: 'BoardDetail', component: BoardDetail},
  // {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class App{ }
