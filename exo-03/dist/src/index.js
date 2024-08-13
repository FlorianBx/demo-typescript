export const TAX = 1.2;
export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPriceWithTax() {
        return this.price * TAX;
    }
}
const product = new Product(1, "MacBook", 4000);
console.log(product.getPriceWithTax());
