import Layout from './js/components/Layout/Layout';
import CardsMenu from './js/components/CardsMenu/CardsMenu';
import ToggleSwitch from './js/components/UI/ToggleSwitch/ToggleSwitch';
import Hamburger from './js/components/UI/Hamburger/Hamburger';
import categories from './js/data/categories';
import './sass/style.scss';

const layout = new Layout();
const cardsMenu = new CardsMenu(categories);

document.addEventListener('DOMContentLoaded', () => {
  layout.addToBody('header', Hamburger());
  layout.addToBody('header', ToggleSwitch());
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
