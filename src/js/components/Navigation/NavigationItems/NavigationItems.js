import navigationItem from './NavigationItem/NavigationItem';
import categories from '../../../data/categories';

const navigationItems = () => {
  const listMenu = document.createElement('ul');

  listMenu.classList.add('menu__box');

  const links = categories.map((category) => {
    const { title } = category;

    return navigationItem(title);
  });

  listMenu.innerHTML = links.join('');

  return listMenu;
};

export default navigationItems;
