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

const activate = (num) => {
  // Delete active satusses from the links
  deleteActive();
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

// At the start first item
activate(index);
