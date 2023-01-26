import { PRICING, PLANS } from './constants.js';

const containerCard = document.getElementById('container-card');

const changeInfo = e => {
  for (let index = 0; index < 3; index++) {
    // console.dir(containerCard.children[index].children[1]);
    for (let j = 0; j < 4; j++) {
      if (e.target.checked) {
        containerCard.children[index].children[1].children[j].textContent = Object.values(PRICING.monthly[PLANS[index]])[j];
      } else {
        containerCard.children[index].children[1].children[j].textContent = Object.values(PRICING.annually[PLANS[index]])[j];
      }
    }
  }
};

export { changeInfo };
