export default class Currency {
	constructor(code, name) {
		if (Object.getPrototypeOf(code) !== String) throw TypeError('code must be a string');
		if (Object.getPrototypeOf(name) !== String) throw TypeError('name must be a string');
		this._code = code;
		this._name = name;

	}
	set code(value) {
		if (Object.getPrototypeOf(value) !== String.prototype) throw TypeError('length must be a number');
		this._code = this.code;
	}
	set name(value) {
		if (Object.getPrototypeOf(value) !== String.prototype) throw TypeError('name must be a string');
		this._name = value;
	}
	get code() {
		return this._code;
	}
	get name() {
		return this._name;
	}
	displayFullCurrency() {
		return (`$(this.{code}) $(this.{name})`);
	}
}
