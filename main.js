swal('On Progress... \:\)','','success');

const scriptURL = 'https://script.google.com/macros/s/AKfycbznax9zNXPlvwHyGP6DldW_c8-FLH78ocXcUKePyaD0ermCz-nCs6xYYl-YkvC9If2yKA/exec'
const form = document.forms['submit-to-google-sheet']
const btn = [$('.btn-send'),$('.btn-loading')];
const myAlert = $('.my-alert');

form.addEventListener('submit', e => {
  e.preventDefault();
  btn[0].toggleClass('d-none');
  btn[1].toggleClass('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response)
      btn[0].toggleClass('d-none');
      btn[1].toggleClass('d-none');
      myAlert.toggleClass('d-none');
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
  });