export function priceOrder(product, quantity, shippingMethod) {
	const basePrice = product.basePrice * quantity;
	const discount = product.discount(quantity);
	const shippingCost = shippingMethod.shippingCost(basePrice, quantity);

	return basePrice - discount + shippingCost;
}

class Product {
	#basePrice;
	#discountRate;
	#discountThreshold;
	constructor(data) {
		this.#basePrice = data.basePrice;
		this.#discountRate = data.discountRate;
		this.#discountThreshold = data.discountThreshold;
	}

	get basePrice() {
		return this.#basePrice;
	}
	get discountRate() {
		return this.#discountRate;
	}
	get discountThreshold() {
		return this.#discountThreshold;
	}

	discount(quantity) {
		return (
			Math.max(quantity - this.discountThreshold, 0) *
			this.basePrice *
			this.discountRate
		);
	}
}

const product = new Product({
	basePrice: 10,
	discountRate: 0.1,
	discountThreshold: 10,
});

class Shipping {
	#discountThreshold;
	#feePerCase;
	#discountedFee;
	constructor(data) {
		this.#discountThreshold = data.discountThreshold;
		this.#feePerCase = data.feePerCase;
		this.#discountedFee = data.discountedFee;
	}

	get discountThreshold() {
		return this.#discountThreshold;
	}
	get feePerCase() {
		return this.#feePerCase;
	}
	get discountedFee() {
		return this.#discountedFee;
	}

	shippingCost(basePrice, quantity) {
		const shippingPerCase =
			basePrice > this.discountThreshold ? this.discountedFee : this.feePerCase;
		return shippingPerCase * quantity;
	}
}

const shippingMethod = new Shipping({
	discountThreshold: 20,
	feePerCase: 5,
	discountedFee: 3,
});

const totalPrice = priceOrder(product, 5, shippingMethod);
console.log(totalPrice);
