const clock = document.querySelector('#clock');

setInterval(function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //setInterval method is used for repetition nd we can pass duration within which is shoud be repeated time in miliseconds
