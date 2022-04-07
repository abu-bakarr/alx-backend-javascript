import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    /* eslint-disable no-underscore-dangle */
    this._amount = amount;
    this._currency = currency;
    /* eslint-disable no-underscore-dangle */
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') this._amount = amount;
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
