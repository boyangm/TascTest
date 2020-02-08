// tslint:disable-next-line:eofline
import {ItemJSON, Item} from './item'
export interface ShoppingListJSON {
  title: string,
  id: string;
  items: Array <ItemJSON>;
  readonly salesTax ?: number;
  readonly importTax ?: number;
  readonly subTotal ? :number;


}

export class ShoppingList implements ShoppingListJSON {
  title: string;
  id: string;
  items: Array <ItemJSON>;
  get salesTax() : number {
    if (!this.items ||this.items.length === 0 ){
      console.log('0')
      return 0;

    }
    const results =  this.items
    .map(item => item.salesTax)
    .reduce((total , salesTax) => total + salesTax );
    return Item.round(results)

  }

  get importTax() : number {
    if(!this.items || this.items.length === 0){
      console.log('0')
      return 0;
    }

    const results = this.items
    .map(item => item.importTax)
    .reduce((total, importTax) => total + importTax);
    return Item.round(results)
  }

  get subTotal() : number{
    if (!this.items || this.items.length === 0){
      console.log('0')
      return 0
    }

    const results = this.items
    .map(item => item.price)
    .reduce((total , price) => total + price)
    return results;

  }


  constructor( list: ShoppingListJSON){

    this.id = list.id;
    this.items = list.items.map(item => new Item (item))


  }

  ngOnInit(): void {

  }



}
