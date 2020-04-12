import navigationItem from './NavigationItem/NavigationItem';
import categories from '../../../data/categories';

const navigationItems = () => {
  const listMenu = document.createElement('ul');

  listMenu.classList.add('menu');

  const links = categories.map((category) => {
    const { title } = category;

    return navigationItem(title);
  });

  listMenu.innerHTML = links;

  return listMenu;
};

export default navigationItems;
