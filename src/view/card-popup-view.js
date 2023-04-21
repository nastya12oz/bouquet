import AbstractView from '../framework/view/abstract-view.js';

const createSlides = (images, authorPhoto) => images.map((image) => `<div class="image-slides-list__item swiper-slide">
<div class="image-slide">
  <picture>
    <source type="image/webp" srcset="${image}, ${image} 2x"><img src="${image}" srcset="${image} 2x" width="1274" height="1789" alt="">
  </picture><span class="image-author image-slide__author">Автор  фотографии:  «${authorPhoto}»</span>
</div>
</div>`).join('');

const createCardPopupTemplate = (product) => {
  const {images, authorPhoto, price, description} = product;

  return `<div class="image-slider swiper modal-product__slider">
        <div class="image-slides-list swiper-wrapper">
        ${createSlides(images, authorPhoto)}
        </div>
        <button class="btn-round btn-round--to-left image-slider__button image-slider__button--prev" type="button">
          <svg width="80" height="85" aria-hidden="true" focusable="false">
            <use xlink:href="#icon-round-button"></use>
          </svg>
        </button>
        <button class="btn-round btn-round--to-right image-slider__button image-slider__button--next" type="button">
          <svg width="80" height="85" aria-hidden="true" focusable="false">
            <use xlink:href="#icon-round-button"></use>
          </svg>
        </button>

      <div class="product-description">
              <div class="product-description__header">
                <h3 class="title title--h2">Летнее настроение</h3><b class="price price--size-big">${price}<span>Р</span></b>
              </div>
              <p class="text text--size-40">${description}</p>
              <button class="btn btn--outlined btn--full-width product-description__button" type="button" data-focus>отложить
              </button>
            </div>
            </div> `;
};

export default class CardPopupView extends AbstractView {
  #product = null;
  #handlePopupClick = null;

  constructor({product, handlePopupClick}) {
    super();
    this.#product = product;
    this.#handlePopupClick = handlePopupClick;
  }

  get template() {
    return createCardPopupTemplate(this.#product);
  }
}
