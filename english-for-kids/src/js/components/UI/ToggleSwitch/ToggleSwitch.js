const toggleSwitch = () => {
  const toggleContainer = document.createElement('div');
  const toggle = '<a href="#" class="toggle toggle_on"></a>';

  toggleContainer.classList.add('toggle-container');
  toggleContainer.innerHTML = toggle;

  return toggleContainer;
};

export default toggleSwitch;
