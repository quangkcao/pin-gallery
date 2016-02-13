import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

export class Pin {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class PinService {
  constructor(http: Http) {
    this.http = http;
  }

  load(endPoint='https://api.pinterest.com/v3/pidgets/users/chingo1991/pins/') {
    if (this.data) {
      // already loaded data
      // return Promise.resolve(this.data);
    }
    // don't have the data yet
    return new Promise(resolve => {
      this.http.get(endPoint)
      .subscribe(res => {
        this.data = this.processData(res.json().data);
        resolve(this.data);
      });
    });
  }

  processData(data){
    items = [];
    boards = [];
    data.pins.forEach(pin =>{
      //insert one item for one board if multi boards exist
      if (pin.board){
        item = {
          'id': this.slug(pin.board.name),
          'image': pin.images['237x'].url.replace('237x','originals'),
          'description': pin.description
        }
        if (boards.indexOf(pin.board.name) < 0)
          items.push(item);
        boards.push(pin.board.name);
      }else{
        item = {
          'image': pin.images['237x'].url.replace('237x','originals'),
          'description': pin.description,
          'board': {
            'name': data.board.name,
            'description': data.board.description
          }
        }
        items.push(item);
      }
    })
    return items
  }

  slug(str){
    return str.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase();
  }

  getPins(){
    return this.load().then(data => {
      return data;
    });
  }

  getPins(endPoint){
    return this.load(endPoint).then(data => {
      return data;
    });
  }
}
