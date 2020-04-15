import Category from './Category/Category';

class Categories {
  constructor(categories) {
    this.categories = categories;
  }

  render() {
    const categoriesList = document.createElement('div');

    categoriesList.classList.add('categories-list');

    const categories = this.categories.map((category) => {
      const { image, title } = category;
      const card = new Category(image, title);

      return card.render();
    });

    categoriesList.innerHTML = categories.join('');

    return categoriesList;
  }
}

export default Categories;
