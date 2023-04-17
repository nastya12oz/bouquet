import AbstractView from '../framework/view/abstract-view.js';

const createCatalogueButtonWrapTemplate = () => '<div class="catalogue__btn-wrap"></div> ';

export default class CatalogueButtonWrapView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return createCatalogueButtonWrapTemplate();
  }
}
