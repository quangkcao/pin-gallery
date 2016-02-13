
import {Component, OnInit}   from 'angular2/core';
import {Router} from 'angular2/router';
import {MenuService} from 'app/menu/menu.service';

@Component({
  selector:'menu',
  template: `
    <div id="menu">
        <span class="trigger" (click)="selectMenu()"><i class="icon-menu"></i></span>
        <div [hidden]="!active">
          <div class="box">
            <a href="/#" (click)="selectMenuItem()" class="absolute"><span style="top:10px; left:10px; position:relative"><img src="images/chingo-logo.png" width="14" height="18"></span></a>
            <div class="trigger text-right" style="padding:10px" (click)="selectMenu()">x</div>
            <ul *ngFor="#item of menuItems">
              <li>
                <a href="/#/{{item.name}}" (click)="selectMenuItem()">{{item.label}}</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
    `,
    providers:  [MenuService]
})

export class Menu implements OnInit {
  menuItems: MenuItem[];

  private _selectedId: number;
  constructor(
    private _service: MenuService
    private _router: Router
  ) {
    this.menuItems = this._service.getItems();
  }
  selectMenu() {
    this.active = !this.active;
  }
  selectMenuItem() {
    this.active = !this.active;
  }
  ngOnInit() {

  }
}
