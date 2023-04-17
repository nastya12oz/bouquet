import AbstractView from '../framework/view/abstract-view.js';

const createCatalogueCardsListViewTemplate = () =>
  '<ul class="catalogue__list"></ul>';

export default class CatalogueCardsListView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createCatalogueCardsListViewTemplate();
  }
}
