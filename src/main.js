// Импорт вендоров и утилит, не удаляйте его
import './vendor';
import { ImageSlider } from './utils/image-slider';
import { iosVhFix } from './utils/ios-vh-fix';
import { modals, initModals } from './modals/init-modals';
import CardsModel from './model/cards-model';
import CardsApiService from './cards-api-service';

// Ваши импорты...
import BoardPresenter from './presenter/board-presenter';

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

  const AUTHORIZATION = 'Basic 456yfgtj356hg';
  const END_POINT = 'https://grading.objects.pages.academy/flowers-shop';

  const cardsModel = new CardsModel({
    cardsApiService: new CardsApiService(END_POINT, AUTHORIZATION)
  });

  const mainElement = document.querySelector('main');
  const bodyElement = document.querySelector('body');
  const modalElement = document.querySelector('.modal-product');
  const catalogueElement = document.querySelector('.catalogue');

  const boardPresenter = new BoardPresenter({
    boardContainer: mainElement,
    catalogueContainer: catalogueElement,
    modalElement: modalElement,
    bodyElement: bodyElement,
    cardsModel
  });

  cardsModel.init();
  boardPresenter.init();
});

