import { render, remove } from '../framework/render.js';
import CardView from '../view/card-view';
import CardPopupView from '../view/card-popup-view';

export default class CardPresenter {
  #cardListContainer = null;

  #cardComponent = null;
  #cardPopupComponent = null;

  constructor({cardListContainer}) {
    this.#cardListContainer = cardListContainer;
  }

  init() {
    const prevCardComponent = this.#cardComponent;
    const prevCardPopupComponent = this.#cardPopupComponent;

    this.#cardComponent = new CardView();
    this.#cardPopupComponent = new CardPopupView();

    if (prevCardComponent === null || prevCardPopupComponent === null) {
      render(this.#cardComponent, this.#cardListContainer);
      return;
    }

    remove(prevCardComponent);
    remove(prevCardPopupComponent);
  }
}
