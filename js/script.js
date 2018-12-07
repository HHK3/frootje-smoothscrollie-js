let index = 0; // Shows which link should be active and it's content
let main = document.querySelector('.content');
let links = document.querySelectorAll('.nav__menuitem');
let linksArray = [];

links.forEach( (item) => {
  item.addEventListener('click', (e) => {
    index = linksArray.indexOf(item);
    activate(index);
  });
  linksArray.push(item);
});

const arrowLeft  = document.querySelector('.nav__arrow--left');
const arrowRight = document.querySelector('.nav__arrow--right');

const activate = (num) => {
  // Delete active satusses from the links
  deleteActive();
  // Show or hide arrows
  showHideArrows();
  // Activates the Link num
  linksArray[num].classList.add('nav--active');
  // Brings content of num foward
  main.style.marginLeft = (-100 * num) + 'vw';
}

const deleteActive = () => {
  linksArray.forEach( (item) => {
    item.classList.remove('nav--active');
  });
}



// Script for Arrows
// Function to activate the next section
const next = () => {
  if (index < linksArray.length-1) {
    index++;
  } else {
    index = 0;
  }
  activate(index);
}

// Function to activate the previous section
const prev = () => {
  if (index > 0) {
    index--;
  } else {
    // Index should never be under the 0
    index = linksArray.length -1;
  }
  activate(index);
}

const showHideArrows = () => {

  // Left Arrow
  if (index == 0) {
    arrowLeft.style.display = 'none';
  } else {
    arrowLeft.style.display = 'block';
  }

  // Right Arrow
  if (index == linksArray.length -1) {
    arrowRight.style.display = 'none';
  } else {
    arrowRight.style.display = 'block';
  }
}


arrowRight.addEventListener('click', next);
arrowLeft.addEventListener('click', prev);

// Keyboard Events
document.addEventListener('keyup', (e) => {
  if(e.keyCode == 39 || e.keyCode == 32) {
    next();
  }
  if (e.keyCode == 37) {
    prev();
  }
})

// Swipe Events
document.addEventListener('swiped-left', next);
document.addEventListener('swiped-right', prev);


// At the start first item
activate(index);
