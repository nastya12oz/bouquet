import { render } from '../framework/render.js';
import HeroView from '../view/hero-view';
import MissionView from '../view/mission-view';
import AdvantagesView from '../view/advantages-view.js';
import FilterReasonView from '../view/filter-reason-view.js';
import FilterColorView from '../view/filter-color-view.js';
import CatalogueView from '../view/catalogue-view.js';
import CatalogueSortView from '../view/catalogue-sort-view.js';
import CatalogueCardsListView from '../view/catalogue-cards-list-view';
import CatalogueButtonWrapView from '../view/catalogue-button-wrap-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import toTopButtonView from '../view/to-top-button-view.js';
import CardPresenter from './card-presenter.js';

export default class BoardPresenter {
  #boardContainer = null;
  #catalogueContainer = null;
  #bodyElement = null;
  #modalElement = null;

  #catalogueSortComponent = null;
  #showMoreButtonComponent = null;
  #toTopButtonComponent = null;

  #heroComponent = new HeroView();
  #missionComponent = new MissionView();
  #advantagesComponent = new AdvantagesView();

  #filterReasonComponent = new FilterReasonView();
  #filterColorComponent = new FilterColorView();

  #catalogueComponent = new CatalogueView();
  #catalogueCardsListComponent = new CatalogueCardsListView();

  #buttonsContainer = new CatalogueButtonWrapView();

  #cardsModel = null;

  constructor({boardContainer, catalogueContainer, modalElement, cardsModel, bodyElement}) {
    this.#boardContainer = boardContainer;
    this.#catalogueContainer = catalogueContainer;
    this.#cardsModel = cardsModel;
    this.#bodyElement = bodyElement;
    this.#modalElement = modalElement;
  }

  async #getCards() {
    const cards = await this.#cardsModel.getCards();
    cards.forEach((card) => this.#renderCard(card));
  }

  init() {
    this.#renderBoard();
  }

  #renderCatalogue() {
    const catalogueElement = document.querySelector('.catalogue');
    const containerCatalogueElement = catalogueElement.querySelector('.container');

    this.#catalogueSortComponent = new CatalogueSortView();
    render(this.#catalogueSortComponent, containerCatalogueElement);

    render(this.#buttonsContainer, containerCatalogueElement);
  }

  #renderCard(card) {

    const cardPresenter = new CardPresenter({
      cardListContainer: this.#catalogueCardsListComponent.element,
      bodyElement: this.#bodyElement,
      modalElement: this.#modalElement,
    });

    cardPresenter.init(card, this.#cardsModel);
  }

  #renderButtons() {
    this.#showMoreButtonComponent = new ShowMoreButtonView();
    render(this.#showMoreButtonComponent, this.#buttonsContainer.element);

    this.#toTopButtonComponent = new toTopButtonView();
    render(this.#toTopButtonComponent, this.#buttonsContainer.element);
  }

  #renderBoard() {
    const catalogueElement = this.#catalogueComponent.element.querySelector('.container');
    this.#getCards();

    render(this.#heroComponent, this.#boardContainer);
    render(this.#missionComponent, this.#boardContainer);
    render(this.#advantagesComponent, this.#boardContainer);
    render(this.#filterReasonComponent, this.#boardContainer);
    render(this.#filterColorComponent, this.#boardContainer);
    render(this.#catalogueComponent, this.#boardContainer);
    render(this.#catalogueCardsListComponent, catalogueElement);

    this.#renderCatalogue();
    this.#renderButtons();
  }
}
