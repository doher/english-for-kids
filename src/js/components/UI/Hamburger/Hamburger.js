import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const hamburger = () => {
  const hamburgerMenu = document.createElement('div');
  const menu = `
    <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
      <span class="menu__line"></span>
    </label>
  `;

  hamburgerMenu.classList.add('hamburger-menu');
  hamburgerMenu.innerHTML = menu;
  hamburgerMenu.append(NavigationItems());

  return hamburgerMenu;
};

export default hamburger;
