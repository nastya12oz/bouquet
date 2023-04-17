import AbstractView from '../framework/view/abstract-view.js';

const createToTopButtonTemplate = () =>
`<button class="btn-round btn-round--to-top btn-round--size-small catalogue__to-top-btn" type="button" aria-label="наверх">
<svg width="80" height="85" aria-hidden="true" focusable="false">
  <use xlink:href="#icon-round-button"></use>
</svg>
</button>`;

export default class toTopButtonView extends AbstractView {

  constructor() {
    super();
  }

  get template() {
    return createToTopButtonTemplate();
  }
}
