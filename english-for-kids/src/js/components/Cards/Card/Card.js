class Card {
  constructor(setOfWords) {
    this.setOfWords = setOfWords;
  }

  render() {
    const { word, translation, image } = this.setOfWords;
    const card = `
      <div class="card-container" ontouchstart="this.classList.toggle('hover');">
        <div class="card">
          <div class="front">
            <div class="card__image">
              <img src="${image}" alt="${word}"/>
            </div>
            <div class="card__title">
              <p>${word}</p>
            </div>
          </div>
          <div class="back">
            <div class="card__image">
              <img src="${image}" alt="${translation}"/>
            </div>
            <div class="card__title">
              <p>${translation}</p>
            </div>
          </div>
        </div>
      </div>
    `;

    return card;
  }
}

export default Card;
