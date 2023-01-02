const organization = new Organization("Acme Gooseberries", "GB");

organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);

class Organization {
	#name;
	#country;
	constructor(data) {
		this.#name = data.name;
		this.#country = data.country;
	}

	get name() {
		return this.#name;
	}
	get country() {
		return this.#country;
	}

	set name(name) {
		return (this.#name = name);
	}
}
