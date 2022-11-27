export function printOwing(invoice) {
	printBanners();
	let outstanding = calculateOutstanding(invoice);
	recordDueDate(invoice);
	printDetails(invoice, outstanding);
}

const invoice = {
	orders: [{amount: 2}, {amount: 5}],
	customer: "엘리",
};

function printBanners() {
	console.log("***********************");
	console.log("**** Customer Owes ****");
	console.log("***********************");
}

function calculateOutstanding(invoice) {
	return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function recordDueDate(invoice) {
	const today = new Date();

	// TODO: 객체 불변성은 나중 챕터에서 심오하게 다뤄볼 예정이에요
	invoice.dueDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate() + 30
	);
}

function printDetails(invoice, outstanding) {
	console.log(`name: ${invoice.customer}`);
	console.log(`amount: ${outstanding}`);
	console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

printOwing(invoice);
