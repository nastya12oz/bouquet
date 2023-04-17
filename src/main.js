// Импорт вендоров и утилит, не удаляйте его
import './vendor';
import { ImageSlider } from './utils/image-slider';
import { iosVhFix } from './utils/ios-vh-fix';
import { modals, initModals } from './modals/init-modals';

// Ваши импорты...
import { render } from './framework/render.js';
import HeroView from './view/hero-view';
import MissionView from './view/mission-view';
import AdvantagesView from './view/advantages-view.js';
import FilterReasonView from './view/filter-reason-view.js';
import FilterColorView from './view/filter-color-view.js';
import CatalogueView from './view/catalogue-view.js';
import CatalogueSortView from './view/catalogue-sort-view.js';
import CatalogueCardsListView from './view/catalogue-cards-list-view';
import CardView from './view/card-view';
import CatalogueButtonWrapView from './view/catalogue-button-wrap-view.js';
import ShowMoreButtonView from './view/show-more-button-view.js';
import toTopButtonView from './view/to-top-button-view.js';

// Код для работы попапов, не удаляйте его
window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    // Инициализация слайдера
    const imageSlider = new ImageSlider('.image-slider');
    imageSlider.init();

    // Инициализация попапов
    initModals();
  });

  // Пример кода для открытия попапа
  document
    .querySelector('.element-which-is-open-popup')
    .addEventListener('click', () => modals.open('popup-data-attr'));

  // Код отработает, если разметка попапа уже отрисована в index.html

  // Если вы хотите рисовать разметку попапа под каждое "открытие",
  // то не забудьте перенесети в код addEventListener инициализацию слайдера

  // ------------

  // Ваш код...

  const mainElement = document.querySelector('main');

  render(new HeroView(), mainElement);
  render(new MissionView, mainElement);
  render(new AdvantagesView, mainElement);
  render(new FilterReasonView, mainElement);
  render(new FilterColorView, mainElement);
  render(new CatalogueView(), mainElement);

  const catalogueElement = document.querySelector('.catalogue');
  const containerCatalogueElement = catalogueElement.querySelector('.container');

  render(new CatalogueSortView, containerCatalogueElement);
  render(new CatalogueCardsListView, containerCatalogueElement);

  const catalogueCardsListElement = catalogueElement.querySelector('.catalogue__list');

  for (let i = 0; i < 6; i++) {
    render( new CardView, catalogueCardsListElement);
  }

  render(new CatalogueButtonWrapView, containerCatalogueElement);

  const buttonWrapElement = document.querySelector('.catalogue__btn-wrap');
  render(new ShowMoreButtonView(), buttonWrapElement);
  render(new toTopButtonView(), buttonWrapElement);


});
