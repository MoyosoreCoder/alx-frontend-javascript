export default class Currency {
  constructor(code, name) {
    // Verify attribute types during object creation
    if (typeof name !== 'string') throw new TypeError('name must be a string');
    if (typeof code !== 'string') throw new TypeError('code must be a string');

    // Initialize attributes
    this._name = name;
    this._code = code;
  }

  // Setters
  set name(value) {
    // Verify attribute type
    if (typeof value !== 'string') throw new TypeError('name must be a string');
    this._name = value;
  }

  set code(value) {
    // Verify attribute type
    if (typeof value !== 'string') throw new TypeError('code must be a string');
    this._code = value;
  }

  // Getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // Method to display full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
