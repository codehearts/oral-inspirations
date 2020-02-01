const get_random_array_element = (a) => a[Math.floor(Math.random() * a.length)];

const make_choice = () => {
  const choice = get_random_array_element(locations);
  document.querySelector('.suggestion').innerHTML = choice.name;
}

const svg = document.querySelector('svg.mouth');
const svg_lips = svg.querySelector('.lips');
const svg_teeth = svg.querySelector('.teeth');

make_choice();

document.querySelector('.reset-button').addEventListener('click', e => {
  e.preventDefault();
  svg_lips.style.animation = 'none';
  svg_teeth.style.animation = 'none';
  svg.classList.add('full-animation');
  svg.getClientRects(); // trigger a reflow to restart the animation
  svg_lips.style.animation = null;
  svg_teeth.style.animation = null;

  window.setTimeout(make_choice, 500);
});
