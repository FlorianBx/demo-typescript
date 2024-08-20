const TAX = 1.2;

class Product {
  constructor(
    public id: number, public name: string, public price: number
	) {}

  getPriceWithTax(): number {
    return this.price * TAX;
  }
}

const product = new Product(1, "MacBook", 4000);

console.log(product.getPriceWithTax());
