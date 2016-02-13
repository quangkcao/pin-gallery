import {Component} from 'angular2/core';
import {PinService} from 'app/pins/pin.service';
import {Pins}   from 'app/pins/pin.component';


@Component({
  templateUrl: 'app/home/home.html',
  providers:  [PinService],
  directives: [Pins]
})
export class Home{}
