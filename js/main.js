/* ----------FIND BAR------------- */
var findbar = document.getElementsByClassName("findbar");

hideBorder = document.addEventListener('click',hideBorder)

function hideBorder(event) {
  if(event.target != findbar[0]) {
    findbar[0].classList.remove("outline");
  }
}

function showBorder() {
  findbar[0].classList.add("outline");
  event.stopPropagation();
}

/* ---------BACKGROUND SLIDER ----------- */
var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}
  
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}
/* ---------ITEM SLIDER ----------- */
var itemIndex = 1;

function plusItems(n) {
  showItems(itemIndex += n);
}

function showItems(n) {
  var i;
  var items = document.getElementsByClassName("myItems");
  if (n > items.length) {itemIndex = 1}    
  if (n < 1) {itemIndex = items.length}
  for (i = 0; i < items.length; i++) {
    items[i].style.display = "none";  
  }
  items[itemIndex-1].style.display = "flex";  
}
/* -------------SIGN-IN----------- */
const signInBtns = document.getElementsByClassName('sign-in-btn');
const signInTicket = document.querySelector('.sign-in-ticket');
const signInModal = document.querySelector('.sign-in-modal');

for ( let btn of signInBtns ) {
  btn.addEventListener("click",opensignIn)
}
function opensignIn() {
  signInTicket.classList.add('open');
  registerTicket.classList.remove('open');
}

signInTicket.addEventListener("click",hidesignIn)

function hidesignIn() {
  signInTicket.classList.remove('open');
}

signInModal.addEventListener("click",function(event){
  event.stopPropagation()
})

/* -----------------REGISTER---------------- */
const registerBtns = document.getElementsByClassName('register')
const registerTicket = document.querySelector('.register-ticket');
const registerModal = document.querySelector('.register-modal');

for ( let btn of registerBtns ) {
  btn.addEventListener("click",openRegister)
}
function openRegister() {
  registerTicket.classList.add('open');
  signInTicket.classList.remove('open');
}

registerTicket.addEventListener("click",hideRegister)

function hideRegister() {
  registerTicket.classList.remove('open');
}

registerModal.addEventListener("click",function(event){
  event.stopPropagation()
})