import Card from './Card/Card';

class Cards {
  constructor(category) {
    this.category = category;
  }

  render() {
    const cardsList = document.createElement('div');

    cardsList.classList.add('cards-list');

    const cards = this.category.map((element) => {
      const card = new Card(element);

      return card.render();
    });

    cardsList.innerHTML = cards.join('');

    return cardsList;
  }
}

export default Cards;
