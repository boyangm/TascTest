import { Component, OnInit, Input , Output , EventEmitter} from '@angular/core';
import { ItemJSON } from '../models/item';
import { ShoppingListJSON } from '../models/shopping-list';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input() data: ShoppingListJSON;

  @Output () itemRemove = new EventEmitter ();

  constructor() {

   }

  ngOnInit(): void {
  }

  handleRemove( item: ItemJSON){
    console.log('clicked')
    this.itemRemove.emit(item)
    this.removeItem(item)

  }

  private removeItem(item: ItemJSON) {
    const index =this.data.items.findIndex(selectedItem => selectedItem.name === item.name)
    console.log(index);
    if (index === -1){
      return
    }

    this.data.items.splice(index,1)
  }
}
