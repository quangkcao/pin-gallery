import {Injectable} from 'angular2/core';

export class MenuItem {
  constructor(public name: string) { }
}


@Injectable()
export class MenuService {
  items: [];

  constructor() {
    this.items = [
      {
        name: "about",
        label: 'About'
      },
      {
        name: "board",
        label: 'Porfolio'
      }
    ];
  }

  getItems() {
    return this.items;
  }
}
