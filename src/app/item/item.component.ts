import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemJSON } from '../models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() data : ItemJSON

  @Output () itemSelected = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item){
    console.log(item);
    this.itemSelected.emit(item);
  }


}
