import {Component} from 'angular2/core';
import {PinService} from 'app/pins/pin.service';
import {Pins}   from 'app/pins/pin.component';


@Component({
  templateUrl: 'app/board/board.html',
  providers:  [PinService],
  directives: [Pins]
})
export class Board{}
