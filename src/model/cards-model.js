import Observable from '../framework/observable.js';
import {UpdateType} from '../consts.js';

export default class CardsModel extends Observable {
  #cardsApiService = null;
  #cards = [];
  #product = null;

  constructor({cardsApiService}) {
    super();
    this.#cardsApiService = cardsApiService;
  }

  async getCards() {
    await this.init();
    const cards = this.#cards;
    return cards;
  }

  async getProduct(id) {
    this.#product = await this.#cardsApiService.getProduct(id);
    return this.#product;
  }

  async init() {
    try {
      this.#cards = await this.#cardsApiService.cards;
    } catch(err) {
      this.#cards = [];
    }
    this._notify(UpdateType.INIT);
  }
}
