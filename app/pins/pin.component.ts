
// TODO SOMEDAY: Feature Componetized like CrisisCenter
import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Pin, PinService}   from './pin.service';
import {Board}   from 'app/board/board';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {HTTP_BINDINGS} from 'angular2/http';


@Component({
  selector:'pins',
  template: `
    <div id="pins">
        <div class="card" *ngFor="#pin of pins" [class.selected]="isSelected(pin)"
        (click)="onSelect(pin)">
            <div class="img" style.backgroundImage="url({{pin.image}})"></div>
        </div>
    </div>
    `,
    providers:  [PinService]
})

export class Pins implements OnInit {
  pins: Pin[];
  private _selectedId: number;
  constructor(
    private _service: PinService
    private _router: Router,
    routeParams: RouteParams
  ) {
      this._selectedId = +routeParams.get('id');
  }

  isSelected(pin: Pin) { return pin.id === this._selectedId; }

  onSelect(pin: Pin) {
    this._router.navigate( ['BoardDetail', { id: pin.id }] );
  }

  ngOnInit() {
    this._service.getPins().then(pins => this.pins = pins)
  }
}
