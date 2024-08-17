import { checkInput } from './scripts/checkInput.js';
import { getTypeQuery } from './scripts/getTypeQuery.js';
import { ConnectToApi } from './scripts/ConnectToApi.js';
import { displayRepoInfo } from './scripts/displayRepoInfo.js';
import { buttonElement, searchInput, messageElement, usersInputElement, cardsElement, loaderElement } from './scripts/elements.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import 'aos/dist/aos.css';
const USERS_API = 'https://api.github.com/search/users?q=';

AOS.init({
  duration: 1000, // مدة الرسوم المتحركة
  easing: 'ease', // نوع تأثير الرسوم المتحركة
  once: false, // تشغيل الرسوم المتحركة في كل مرة يدخل فيها العنصر مجال الرؤية
  mirror: true // تشغيل الرسوم المتحركة عند التمرير للأعلى أيضًا
});

buttonElement.addEventListener('click', async (e) => {
  e.preventDefault();
  cardsElement.textContent = 'Start your search...';
  let result = checkInput(searchInput, messageElement);
  if (result) {
    let typeQuery = getTypeQuery(usersInputElement);
    let data = await ConnectToApi(USERS_API, searchInput.value, typeQuery);
    
    displayRepoInfo(data.items);
  }
});

cardsElement.addEventListener('click', (e) => {
  if (e.target.classList.value === 'img') {
    const url = e.target.getAttribute('url');
    if (url) {
      window.open(url, '_blank');
    }
  }
});
