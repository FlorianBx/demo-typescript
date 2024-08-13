import { describe, it, expect } from "vitest";
import { Product } from "./index";
import { TAX } from "./index";

describe("getUserInfo", () => {
  it("should return the price with tax", () => {
    const product = new Product(1, "MacBook", 4000); 
		const result = product.getPriceWithTax();

    expect(result).toEqual(4000 * TAX);
  });

  it("should return a negative price", () => {
		const product = new Product(1, "MacBook", -2000);
		const result = product.getPriceWithTax();

		expect(result).toEqual(-2000 * TAX);
  });
});
