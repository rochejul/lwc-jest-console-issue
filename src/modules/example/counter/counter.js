import { LightningElement, api } from 'lwc';

const DEFAULT_CONFIG = { counter: 0 };

export default class extends LightningElement {
  counter = 0;
  _config = { ...DEFAULT_CONFIG };

  @api
  get config() {
    return this._config;
  }

  set config(config) {
    console.info('Provided config:', config);
    this._config = { ...(config ?? DEFAULT_CONFIG) };
    this.counter = this._config.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
