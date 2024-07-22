const form = document.querySelector('form'); //whenever form is submitted it is submitted by "GET" or "POST" method, nd the values are send to URL or server. We have to stop its default action because we are not sending it to server the methods used is 'submit' event method

/* writing height and weight outside form this usecase will give you empty, so it is preferred to wrtie inside form*/
//const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', function (e) {
  e.preventDefault(); //this is used to prevent submitting form

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give valid Height${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give valid Weight${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show results
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
