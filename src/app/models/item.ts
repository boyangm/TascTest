export interface ItemJSON   {
  name: string
  price: number
  isExempt: boolean
  isImported: boolean
  readonly salesTax : number
  readonly importTax : number
}

export class Item implements ItemJSON {
static round (num: number) : number {
  return Math.round(num * 20) /20

}
  name: string;
  price: number;
  isExempt: boolean;
  isImported: boolean
  get salesTax(): number{
    console.log('getting sales tax')
    if (this.isExempt) {
      return 0;
    }
    return Item.round( this.price * 0.10)
  };

  get importTax() : number {
    if(!this.isImported){
      return 0
    }
    return Item.round( this.price * 0.05)
  }

  constructor(item: ItemJSON){
    if (typeof item.name !== 'string'){
      throw new Error ('key should be a string')
    }
    this.name = item.name;
    this.price = item.price;
    this.isExempt = item.isExempt;
    this.isImported = item.isImported;
  }

}

