import {Component, OnInit}   from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Pin, Pins, PinService} from 'app/pins/pin.service';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {HTTP_BINDINGS} from 'angular2/http';


@Component({
  templateUrl: 'app/board/board-detail.html',
  providers:  [PinService]
})
export class BoardDetail implements OnInit {
  pins: Pin[];
  constructor(
    private _router:Router,
    private _routeParams:RouteParams,
    private _service:PinService){}

  ngOnInit() {
    let id = this._routeParams.get('id');
    let endPoint = 'http://api.pinterest.com/v3/pidgets/boards/chingo1991/'+id+'/pins/';
    this._service.getPins(endPoint).then(pins => this.pins = pins);
  }
}
