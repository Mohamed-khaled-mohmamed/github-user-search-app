import { cardsElement, loaderElement } from './elements.js';
import { loading } from './loading.js';
import { showError } from './showError.js';

export const ConnectToApi = async function (api, input, typeQuery) {
  try {
    loading(loaderElement);
    const response = await fetch(`${api}${input}${typeQuery}`);
    const data = await response.json();
    return data;
  } catch (error) {
    // net working Error
    showError(cardsElement, 'you are offline');
  }
};
