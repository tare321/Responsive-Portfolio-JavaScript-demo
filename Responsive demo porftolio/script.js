/**
 * Menu dugme u headeru
 **/
const mobileMenu = () =>{
  let menu = document.querySelector('.header ul');
  let btn = document.querySelector('.header button');

    if(btn.innerText === 'MENU'){
      menu.style.display = 'block' ;
      btn.innerText = 'CLOSE' ;
    }else{
      menu.style.display = 'none' ;
      btn.innerText = 'MENU' ;
    }

};

/**
 * Slajdovanje slika - dugmad i listanje slika
 **/

let rightBtn = document.querySelector('#right-btn');
let leftBtn = document.querySelector('#left-btn');

let pictures = document.querySelectorAll('.slider-images img');
let imgNum = 0;

//desno dugme
rightBtn.addEventListener('click', () => {
  displayNone();
  imgNum++;
if(imgNum === pictures.length){
  imgNum = 0;
}
  pictures[imgNum].style.display = 'block';
});

//lijevo dugme
leftBtn.addEventListener('click', () => {
 displayNone();
 imgNum--;

 if(imgNum === -1) {
  imgNum = pictures.length - 1;
 }
 pictures[imgNum].style.display = 'block';
});

//Funkcija koja ce da sakrije sve slike
const displayNone = () =>{
pictures.forEach((img) =>{
  img.style.display = 'none';
});
}
//funkcije za lijevo i desno dugme, koje nismo pozvali
/*
const moveRight = () => {
  displayNone();
  imgNum++;
if(imgNum === pictures.length){
  imgNum = 0;
}
  pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
  displayNone();
 imgNum--;

 if(imgNum === -1) {
  imgNum = pictures.length - 1;
 }
 pictures[imgNum].style.display = 'block';
}
*/


/**
 * Portfolio dio
 **/

const portfolioSort = (button) =>{
  let category = button.getAttribute('data-category');
  
  let portfolioItems = document.querySelectorAll('.portfolio-single-item');

  portfolioItems.forEach((item) =>{
    item.style.display = 'none';
  });

// za sve
 if(category === 'sve'){
  portfolioItems.forEach((item) =>{
    item.style.display = 'block';
  });
}


portfolioItems.forEach((item) => {
   if(item.getAttribute('data-category').includes(category)) {
    item.style.display = 'block';
   }
});

};

/**
 * za MODAL dugme
 **/
const openModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'block';
  overlay.style.display = 'block';
}

// zatvaramo modal

const closeModal = () => {
  let modalWindow = document.querySelector('.popup-modal');
  let overlay = document.querySelector('.overlay');
  modalWindow.style.display = 'none';
  overlay.style.display = 'none';
}
