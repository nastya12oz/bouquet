import { render } from '../framework/render.js';
import HeroView from '../view/hero-view';
import MissionView from '../view/mission-view';
import AdvantagesView from '../view/advantages-view.js';
import FilterReasonView from '../view/filter-reason-view.js';
import FilterColorView from '../view/filter-color-view.js';
import CatalogueView from '../view/catalogue-view.js';
import CatalogueSortView from '../view/catalogue-sort-view.js';
import CatalogueCardsListView from '../view/catalogue-cards-list-view';
import CardView from '../view/card-view';
// import CatalogueButtonWrapView from './view/catalogue-button-wrap-view.js';
// import ShowMoreButtonView from './view/show-more-button-view.js';
// import toTopButtonView from './view/to-top-button-view.js';

// const CARDS_COUNT = 5;

export default class BoardPresenter {
  #boardContainer = null;

  #catalogueSortComponent = null;

  #heroComponent = new HeroView();
  #missionComponent = new MissionView();
  #advantagesComponent = new AdvantagesView();

  #filterReasonComponent = new FilterReasonView();
  #filterColorComponent = new FilterColorView();

  #cardComponent = new CardView();

  #catalogueComponent = new CatalogueView();
  #catalogueCardsListComponent = new CatalogueCardsListView();

  constructor({boardContainer}) {
    this.#boardContainer = boardContainer;
  }

  init() {
    this.#renderBoard();
  }

  #renderCatalogueSort() {
    const catalogueElement = document.querySelector('.catalogue');
    const containerCatalogueElement = catalogueElement.querySelector('.container');

    this.#catalogueSortComponent = new CatalogueSortView();
    render(this.#catalogueSortComponent, containerCatalogueElement);
  }

  // #renderCards() {
  //   const catalogueElement = document.querySelector('.catalogue');
  //   const containerCatalogueElement = catalogueElement.querySelector('.container');

  //   const catalogueElement = document.querySelector('.catalogue');
  //   const catalogueCardsListElement = catalogueElement.querySelector('.catalogue__list');

  //   for (let i = 0; i < CARDS_COUNT; i++) {
  //     render(this.#cardComponent, catalogueCardsListElement);
  //   }
  // }

  #renderBoard() {
    render(this.#heroComponent, this.#boardContainer);
    render(this.#missionComponent, this.#boardContainer);
    render(this.#advantagesComponent, this.#boardContainer);
    render(this.#filterReasonComponent, this.#boardContainer);
    render(this.#filterColorComponent, this.#boardContainer);
    render(this.#catalogueComponent, this.#boardContainer);

    this.#renderCatalogueSort();
    // this.#renderCards();
  }
}
