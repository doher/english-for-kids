class Card {
  constructor(image, title) {
    this.image = image;
    this.title = title;
  }

  render() {
    const card = `
      <div class="card">
        <div class="card__image">
          <img src="${this.image}" alt="${this.title}"/>
        </div>
        <div class="card__title">
          <p>${this.title}</p>
        </div>
      </div>
    `;

    return card;
  }
}

export default Card;
