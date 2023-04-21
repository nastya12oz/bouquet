import { render, remove } from '../framework/render.js';
import CardView from '../view/card-view';
import CardPopupView from '../view/card-popup-view';

export default class CardPresenter {
  #cardListContainer = null;
  #bodyElement = null;
  #modalElement = null;

  #card = null;
  #product = null;

  #cardsModel = null;

  #cardComponent = null;
  #cardPopupComponent = null;

  constructor({cardListContainer, bodyElement, modalElement}) {
    this.#cardListContainer = cardListContainer;
    this.#bodyElement = bodyElement;
    this.#modalElement = modalElement;
  }

  async init(card, cardsModel) {
    this.#card = card;
    this.#cardsModel = cardsModel;

    const product = await this.#cardsModel.getProduct(this.#card.id);

    const prevCardComponent = this.#cardComponent;
    const prevCardPopupComponent = this.#cardPopupComponent;

    this.#cardComponent = new CardView({
      card: this.#card,
      onOpenPopupClick: this.#handlePopupClick,
      onPopupCloseButtonClick: this.#handlePopupCloseButtonClick,
    });

    this.#cardPopupComponent = new CardPopupView({
      product
    });

    if (prevCardComponent === null || prevCardPopupComponent === null) {
      render(this.#cardComponent, this.#cardListContainer);
      return;
    }

    remove(prevCardComponent);
    remove(prevCardPopupComponent);
  }

  #replaceCardToPopup() {
    render(this.#cardPopupComponent, this.#modalElement);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  #replacePopupToCard() {
    remove(this.#cardPopupComponent);
    document.querySelector('.modal').classList.remove('product-card-active', 'is-active');
    document.querySelector('body').classList.remove('scroll-lock');
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  #handlePopupClick = () => {
    this.#replaceCardToPopup();
  };

  #handlePopupCloseButtonClick = () => {
    this.#replacePopupToCard();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replacePopupToCard();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };
}
