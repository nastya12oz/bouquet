import { render, remove } from '../framework/render.js';
import CardView from '../view/card-view';
import CardPopupView from '../view/card-popup-view';

export default class CardPresenter {
  #cardListContainer = null;

  #product = null;

  #cardComponent = null;
  #cardPopupComponent = null;

  constructor({cardListContainer}) {
    this.#cardListContainer = cardListContainer;
  }

  init(product) {
    this.#product = product;

    const prevCardComponent = this.#cardComponent;
    const prevCardPopupComponent = this.#cardPopupComponent;

    this.#cardComponent = new CardView({
      product: this.#product
    });
    this.#cardPopupComponent = new CardPopupView();

    if (prevCardComponent === null || prevCardPopupComponent === null) {
      render(this.#cardComponent, this.#cardListContainer);
      return;
    }

    remove(prevCardComponent);
    remove(prevCardPopupComponent);
  }
}
