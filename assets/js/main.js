const searchTrigger = document.querySelector(".searchTri");
const searchModel = document.querySelector("#search-modal");
const searchOverlay = document.querySelector('.search-overlay')


searchTrigger.addEventListener('click',function(){
    searchModel.classList.add('show');
    searchOverlay.classList.add('show');
   
})

searchOverlay.addEventListener('click',function(){
    this.classList.remove('show');
    searchModel.classList.remove('show');
})

// Carousel
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)