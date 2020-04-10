import Layout from './js/Layout/Layout';
import CardsMenu from './js/CardsMenu/CardsMenu';
import categories from './js/data/categories';
import './sass/style.scss';

const layout = new Layout();
const cardsMenu = new CardsMenu(categories);

document.addEventListener('DOMContentLoaded', () => {
  layout.addToBody('main', cardsMenu.render());
});
