import { cardsElement, loaderElement } from './elements.js';
import { loading } from './loading.js';

export const displayRepoInfo = function (data) {
  loading(loaderElement);
  let html = '';
  if (data?.length === 0) {
    html = '<p>No results found.</p>';
  } else if (data === null) {
    html = '';
  } else if (data?.length) {
    data.map((item) => {
      html += `
    <article class="card" data-aos="zoom-out-left">
      <img class="img" loading="lazy" src="${item.avatar_url}" url="${item.html_url}"/>
      <h2 class="name">${item.login}</h2>
    </article>
    `;
    });
  }
  cardsElement.innerHTML = html;
};
