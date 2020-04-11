import Layout from './js/Layout/Layout';
import CardsMenu from './js/CardsMenu/CardsMenu';
import toggleSwitch from './js/UI/ToggleSwitch/toggleSwitch';
import categories from './js/data/categories';
import './sass/style.scss';

const layout = new Layout();
const cardsMenu = new CardsMenu(categories);

document.addEventListener('DOMContentLoaded', () => {
  layout.addToBody('header', toggleSwitch());
  layout.addToBody('main', cardsMenu.render());
});
document.addEventListener('click', (event) => {
  event.preventDefault();

  const element = event.target;

  if (element.classList.contains('toggle')) {
    element.classList.toggle('toggle_on');
    element.classList.toggle('toggle_off');
    element.classList.add('toggle_moving');

    setTimeout(() => {
      element.classList.remove('toggle_moving');
    }, 200);
  }
});
