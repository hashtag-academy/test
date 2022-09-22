const slider = document.querySelector(".slider"),
      slideItems = document.querySelectorAll(".slide-item")

let nextSlide, previousSlide, activeSlide, 
    timer = true

slider.style.width = slideItems[0].firstElementChild.getBoundingClientRect().width + "px"
slider.style.height = slideItems[0].firstElementChild.getBoundingClientRect().height + "px"

activeSlide = slideItems[0]
activeSlide.classList.add("active-slide")
nextSlide = slideItems[1]
nextSlide.classList.add("next-slide")
previousSlide = slideItems[slideItems.length - 1]
previousSlide.classList.add("previous-slide")

function moveNext (){
  if (timer){
    activeSlide.classList.remove("active-slide")
    activeSlide.classList.add("previous-slide")
    nextSlide.classList.remove("next-slide")
    nextSlide.classList.add("active-slide")
    previousSlide.classList.remove("previous-slide")
    previousSlide = activeSlide
    activeSlide = nextSlide
    if (nextSlide.nextElementSibling){
      nextSlide = nextSlide.nextElementSibling
    }else{
      nextSlide = slideItems[0]
    }
    nextSlide.classList.add("next-slide")
    timer = false
    setTimeout(() => {
      timer = true
    }, 1000)
  }
}