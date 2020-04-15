class Category {
  constructor(image, title) {
    this.image = image;
    this.title = title;
  }

  render() {
    const category = `
      <div class="category">
        <div class="category__image">
          <img src="${this.image}" alt="${this.title}"/>
        </div>
        <div class="category__title">
          <p>${this.title}</p>
        </div>
      </div>
    `;

    return category;
  }
}

export default Category;
