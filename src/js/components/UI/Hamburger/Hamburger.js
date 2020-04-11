const hamburger = () => {
  const span = document.createElement('span');
  const line = '<span class="hamburger__line"></span>';

  span.classList.add('hamburger');
  span.innerHTML = line;

  return span;
};

export default hamburger;
