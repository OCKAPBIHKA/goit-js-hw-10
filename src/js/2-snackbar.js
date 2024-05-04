import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delayInput = event.target.elements.delay;
  const stateRadios = event.target.elements.state;
  const delay = parseInt(delayInput.value);

  let state;
  for (const radio of stateRadios) {
    if (radio.checked) {
      state = radio.value;
      break;
    }
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      iziToast.success({
        title: '✅ Fulfilled promise',
        message: `in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: '❌ Rejected promise',
        message: `in ${delay}ms`,
        position: 'topRight',
      });
    });
});
