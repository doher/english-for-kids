import Card from './Card/Card';

class CardsMenu {
  constructor(categories) {
    this.categories = categories;
  }

  render() {
    const cardsList = document.createElement('div');

    cardsList.classList.add('cards-list');

    const cards = this.categories.map((category) => {
      const { image, title } = category;
      const card = new Card(image, title);

      return card.render();
    });

    cardsList.innerHTML = cards.join('');

    return cardsList;
  }
}

export default CardsMenu;
