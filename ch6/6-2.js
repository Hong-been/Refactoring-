// 예제 1
export function rating(driver) {
	return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// function moreThanFiveLateDeliveries(dvr) {
//   return dvr.numberOfLateDeliveries > 5;
// }

// 예제 2
function reportLines(customer) {
	const result = [];
	result.push(["name", customer.name]);
	result.push(["location", customer.location]);
	return result;
}

// function gatherCustomerData(out, customer) {
// 	out.push(["name", customer.name]);
// 	out.push(["location", customer.location]);
// }
