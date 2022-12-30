export function price(order) {
	const defaultPrice = order.quantity * order.itemPrice;
	const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
	const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
	return defaultPrice - discount + shipping;
}
