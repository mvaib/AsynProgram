let slides = document.querySelectorAll("#slideshow > img")
let slideIndex = 0;
let slideInterval;

function showSlides(index){
    slides.forEach((slide,i)=>{
        if(i === index){
            slide.style.display = "block"
        }
        else{
            slide.style.display = "none"
        }
    })
}
function startSlideShow(){
    slideInterval = setInterval(()=>{
        slideIndex = (slideIndex + 1) % slides.length
        showSlides(slideIndex)
        console.log(slideIndex)
    },2000)
}

function stopSlideShow(){
    clearInterval(slideInterval)
}

function toggleSlide(){
    if(slideInterval){
        stopSlideShow()
        slideInterval = null;
    }
    else{
        startSlideShow()
    }
}

function next(){
    stopSlideShow();
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides(slideIndex);
    console.log(slideIndex)

}

function prev(){
    stopSlideShow();
    slideIndex = (slideIndex - 1) % slides.length;
    if(slideIndex < 0){
        slideIndex = slides.length-1;
    }
    showSlides(slideIndex);
    console.log(slideIndex)
}
showSlides(slideIndex)