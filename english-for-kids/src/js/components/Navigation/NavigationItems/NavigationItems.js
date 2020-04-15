import navigationItem from './NavigationItem/NavigationItem';
import dataset from '../../../data/dataset';

const navigationItems = () => {
  const listMenu = document.createElement('ul');

  listMenu.classList.add('menu__box');

  const links = dataset.map((category) => {
    const { title } = category;

    return navigationItem(title);
  });

  listMenu.innerHTML = links.join('');

  return listMenu;
};

export default navigationItems;
