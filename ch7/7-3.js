export class Order {
	constructor(data) {
		this.priority = new Priority(data.priority);
	}

	isHighPriority() {
		return this.priority.higherThan(new Priority("normal"));
	}
}

class Priority {
	#value;
	constructor(value) {
		if (Priority.legalValues().includes(value)) {
			this.#value = value;
		} else {
			throw new Error(`${value} is invalid for Priority`); // 생성자 내부에서 에러를 던지는 것은 보안에 취약한 것으로 알려져있다...
		}
	}

	get index() {
		return Priority.legalValues().indexOf(this.#value);
	}

	equals(other) {
		return this.index === other.index;
	}

	higherThan(other) {
		return this.index > other.index;
	}

	static legalValues() {
		return ["row", "normal", "high", "rush"]; // index에 따라 우선순위가 높아짐
	}
}

const orders = [
	new Order({priority: "normal"}),
	new Order({priority: "high"}),
	new Order({priority: "rush"}),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;
console.log(highPriorityCount);
