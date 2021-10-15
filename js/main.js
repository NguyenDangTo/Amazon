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