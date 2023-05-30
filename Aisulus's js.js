document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded');
});

document.querySelector('.navbar-toggler').addEventListener('click', function () {
  console.log('Navbar toggler clicked');
});

document.querySelector('h1').addEventListener('mouseover', function () {
  console.log('Mouseover event on <h1>');
});

document.addEventListener('keypress', function (event) {
  console.log('Key pressed:', event.key);
});

const person = {
  name: 'John Doe',
  age: 25,
  occupation: 'Web Developer'
};

console.log('Person:', person);

function animateElement(element, property, from, to, duration) {
  let start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;

    element.style[property] = (from + (to - from) * elapsed / duration) + 'px';

    if (elapsed < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

const animatedElement = document.querySelector('.col');
animateElement(animatedElement, 'marginLeft', 0, 200, 1000); 

const audio = new Audio('sound.mp3');
audio.play();

document.getElementById("myButton").addEventListener("click", function() {
  alert("Button clicked!");
});