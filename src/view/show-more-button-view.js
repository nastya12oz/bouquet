import AbstractView from '../framework/view/abstract-view.js';

const createShowMoreButtonTemplate = () => '<button class="btn btn--outlined catalogue__show-more-btn" type="button">больше букетов</button>';

export default class ShowMoreButtonView extends AbstractView {

  constructor() {
    super();
  }

  get template() {
    return createShowMoreButtonTemplate();
  }
}
