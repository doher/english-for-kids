import Layout from './js/components/Layout/Layout';
import ToggleSwitch from './js/components/UI/ToggleSwitch/ToggleSwitch';
import Hamburger from './js/components/UI/Hamburger/Hamburger';
import Categories from './js/components/Categories/Categories';
import Cards from './js/components/Cards/Cards';
import dataset from './js/data/dataset';
import './sass/style.scss';

const layout = new Layout();
const categories = new Categories(dataset);
const cards = new Cards(dataset[0].setOfWords);

document.addEventListener('DOMContentLoaded', () => {
  layout.addToBody('header', Hamburger());
  layout.addToBody('header', ToggleSwitch());
  layout.addToBody('main', categories.render());
  layout.addToBody('main', cards.render());
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

  if (element.classList.contains('menu__btn') || element.classList.contains('menu__line')) {
    const menu = document.getElementById('menu__toggle');

    menu.checked = !menu.checked;
  }
});
