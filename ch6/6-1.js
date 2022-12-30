export function printOwing(invoice) {
	printBanners();
	recordDueDate(invoice);

	let outstanding = calculateOutstanding(invoice);
	printDetails(invoice, outstanding);
}

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

const invoice = {
	orders: [{amount: 2}, {amount: 5}],
	customer: "엘리",
};

printOwing(invoice);
