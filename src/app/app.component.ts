import { Component } from '@angular/core';
import {ItemJSON, Item } from './models/item' ;
import { ShoppingListJSON, ShoppingList } from './models/shopping-list';
import {storeItems} from '../data/items.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tasc-quiz';
  selection = {
    value: 'component'
  };
  items: Array <ItemJSON>;

  isVisible = false;
  index = 3;
  shoppingList : ShoppingListJSON
  constructor() {
    this.items = storeItems.map(item => new Item (item))

  }
  ngOnInit(): void {
   this.shoppingList = new ShoppingList ({id: '0', title: ' my receipt', items:[]});
   console.log( this.shoppingList)
  }

  handleClick(item: ItemJSON){
    console.log(item)
    this.shoppingList.items.push(new Item (item))
  }

}

