let radios = document.getElementsByName('direction');
let html = document.getElementsByTagName('html');

const createSnowFlake = () => {
  const snowflake = document.createElement('span');
  snowflake.classList.add('material-symbols-outlined');
  snowflake.textContent = 'ac_unit';
  snowflake.classList.add(`snowflake`);
  document.body.appendChild(snowflake);

  const winWidth = window.innerWidth;

  let randomLeft = getRandomNumber(0, winWidth);
  let randomOpacity = getRandomNumber(0, 1);
  let randomSize = getRandomNumber(0.6, 2);

  snowflake.style.left = randomLeft + 'px';
  snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
  snowflake.style.opacity = randomOpacity;
  snowflake.style.fontSize = randomSize + 'rem';

  setTimeout(() => {
    snowflake.remove();
  }, 5000);
};

const getRandomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

setInterval(createSnowFlake, 40);

radios.forEach((radio) => {
  radio.addEventListener('click', () => {
    html[0].classList = '';
    html[0].classList.add(radio.id);
  });
});

const selectMenu = document.querySelector('.select');
const options = document.querySelectorAll('.option');

const setOption = (option) => {
  document.querySelector('.select input').value = option;
  document.body.classList = option;
};

selectMenu.addEventListener('click', () => {
  selectMenu.classList.toggle('open');
});

options.forEach((option) => {
  option.addEventListener('click', () => {
    setOption(option.textContent);
  });
});
