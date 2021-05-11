// 2 ways of selecting an element
// const unorderedList = document.querySelector('ul#players');
const unorderedList = document.getElementById('players');

// console.log(unorderedList);

const position = 'beforeend';
const element = '<li>Vincenzo</li>';
unorderedList.insertAdjacentHTML(position, element);

// We can select all with #querySelectorAll
const countries = document.querySelectorAll('ol#fifa-wins li');

// console.log(countries[0]); // this is Brazil

countries.forEach((country) => {
  // console.log(country.innerText);
});

// how to insert France?
const winnersList = document.querySelector('ol#fifa-wins');
winnersList.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>')

// Manipulate classes
const brazil = document.querySelector('ol#fifa-wins li');

brazil.classList.remove('red');
brazil.classList.add('red');
brazil.classList.toggle('red');

// DARK MODE
const darkModeBtn = document.querySelector('#dark');

// darkModeBtn.addEventListener(what is the event?, what to do?)
// darkModeBtn.addEventListener(event, behavior)
// darkModeBtn.addEventListener(click, toggle dark mode)

darkModeBtn.addEventListener('click', (event) => {
  const body = document.querySelector('body');
  body.classList.toggle('bg-dark');
});


// const romain = document.querySelector('#romain');
// // console.log(romain);
// // console log driven development

// // romain.addEventListener(event, behavior)
// romain.addEventListener('click', (event) => {
//   console.log(event);

//   // event.currentTarget === romain
//   console.log(event.currentTarget);
//   console.log(romain);

//   event.currentTarget.classList.toggle('img-circle');
// });

// select all images
const imgs = document.querySelectorAll('img');

console.log(imgs);
// for each image
// imgs.forEach((singular) => {});
imgs.forEach((img) => {
  // add the event listener
  // img.addEventListener('event', behavior)
  img.addEventListener('click', (event) => {
    console.log(event);
    // event.currentTarget.classList.toggle('img-circle');
    img.classList.toggle('img-circle');
  });
});
