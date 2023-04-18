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

// const CARDS_COUNT = 5;

export default class BoardPresenter {
  #boardContainer = null;
  #catalogueContainer = null;

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

  constructor({boardContainer, catalogueContainer, cardsModel}) {
    this.#boardContainer = boardContainer;
    this.#catalogueContainer = catalogueContainer;
    this.#cardsModel = cardsModel;
  }

  get cards() {
    const cards = [...this.#cardsModel.cards];

    return cards;
  }

  init() {
    this.#renderBoard();
  }

  #renderCatalogue() {
    const catalogueElement = document.querySelector('.catalogue');
    const containerCatalogueElement = catalogueElement.querySelector('.container');

    this.#catalogueSortComponent = new CatalogueSortView();
    render(this.#catalogueSortComponent, containerCatalogueElement);


    // for (let i = 0; i < CARDS_COUNT; i++) {
    //   render(new CardView(), catalogueCardsListElement);
    // }

    render(this.#buttonsContainer, containerCatalogueElement);
  }

  #renderCard() {
    const cardPresenter = new CardPresenter({
      cardListContainer: this.#catalogueCardsListComponent.element
    });

    cardPresenter.init();
  }

  #renderButtons() {
    this.#showMoreButtonComponent = new ShowMoreButtonView();
    render(this.#showMoreButtonComponent, this.#buttonsContainer.element);

    this.#toTopButtonComponent = new toTopButtonView();
    render(this.#toTopButtonComponent, this.#buttonsContainer.element);
  }

  #renderBoard() {
    const catalogueElement = this.#catalogueComponent.element.querySelector('.container');

    render(this.#heroComponent, this.#boardContainer);
    render(this.#missionComponent, this.#boardContainer);
    render(this.#advantagesComponent, this.#boardContainer);
    render(this.#filterReasonComponent, this.#boardContainer);
    render(this.#filterColorComponent, this.#boardContainer);
    render(this.#catalogueComponent, this.#boardContainer);
    render(this.#catalogueCardsListComponent, catalogueElement);

    this.#renderCatalogue();
    this.#renderButtons();
    this.#renderCard();
  }
}
