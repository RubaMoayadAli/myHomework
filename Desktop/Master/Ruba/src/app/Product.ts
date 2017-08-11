
export class Product {
  constructor (public name: string, public price: number, public quantity: number) {

      }
      toString() {
        return `Product, name: ${this.name}, quantity: ${this.quantity}`;
      }
      setQuantity()
      {
        this.quantity=1;
      }
      setIncreaseQuantity() {
        this.quantity+=1;
      }
      setDecreaseQuantity() {
        this.quantity -= 1 ;
      }
       getQuantity(){
         return this.quantity;

      }
         getPrice(){
         return this.price;

      }
        getBill(bill: number)
        {
          return this.price * bill;
        }

}
