let radios = document.getElementsByName('direction');
let html = document.getElementsByTagName('html');

const createSnowFlake = () => {
  const snowflake = document.createElement('span');
  snowflake.classList.add('marerial-symbols-outlined');
  snowflake.textContent = 'ac_unit';
  snowflake.classList.add(`snowflake`);

  document.body.appendChild(snowflake);

  const winWidth = window.innerWidth;

  let randomLeft = getRandomNumber(0, winWidth);
  let randomOpacity = getRandomNumber(0, 1);
  let randomSize = getRandomNumber(0.6, 2);
};
