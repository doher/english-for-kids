class Layout {
  constructor() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('wrapper');
  }

  wrapContent(content) {
    const wrapper = this.wrapper.cloneNode();

    wrapper.append(content);

    return wrapper;
  }

  addToBody(element, content) {
    const selector = document.querySelector(`${element} .wrapper`);

    if (selector) {
      selector.append(content);
    } else {
      const block = document.createElement(element);

      block.classList.add(element);
      block.append(this.wrapContent(content));
      document.body.append(block);
    }
  }
}

export default Layout;
