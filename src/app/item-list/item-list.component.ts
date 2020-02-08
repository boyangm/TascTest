import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {ItemJSON} from '../models/item'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  @Input() items: Array <ItemJSON>;
  @Output() itemSelected = new EventEmitter ()
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item){
    console.log(item);
    this.itemSelected.emit(item);
  }

}
