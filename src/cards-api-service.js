import ApiService from './framework/api-service.js';

// const Method = {
//   GET: 'GET',
//   PUT: 'PUT',
// };

export default class CardsApiService extends ApiService {
  get cards() {
    return this._load({url: 'products'})
      .then(ApiService.parseResponse);
  }
}
