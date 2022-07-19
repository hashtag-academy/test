window.onload = () => {
    changeSlide(document.querySelector('.feed'), 0);
    changeSlide(document.querySelector('.fish'), 500);
    changeSlide(document.querySelector('.water'), 1000);
    changeSlide(document.querySelector('.service'), 1500);
}

function changeSlide (section, time)
{
    let current_slide = section.querySelector('.current-slide'),
        current_slide_btn = section.querySelector('.current-slide-btn'),
        slides = section.querySelectorAll('.slide'),
        controll_btns = section.querySelectorAll('.slider-control span');

    for (i = 0; i < controll_btns.length; i++) {
        slides[i].dataset.number = i
        controll_btns[i].dataset.number = i
    }

    controll_btns.forEach(elem => {
        elem.onclick = (e) => {
            if (current_slide_btn.getAttribute("data-number") == e.target.getAttribute("data-number")) {
                return false;
            }
            current_slide_btn.classList.remove('current-slide-btn');
            current_slide.classList.add('prev-slide');

            let next_slide = section.querySelector(`.slide[data-number='${e.target.getAttribute("data-number")}']`);
            current_slide_btn = e.target;
            current_slide_btn.classList.add('current-slide-btn');
            next_slide.classList.add('current-slide');

            window.setTimeout(()=>{
                current_slide.classList.remove('current-slide');
                current_slide.classList.remove('prev-slide');
                current_slide = next_slide;
            }, 500);
        }
    });

    setTimeout(() => {
        let interval = setInterval(()=>{
            current_slide_btn.classList.remove('current-slide-btn');
            current_slide.classList.add('prev-slide');

            if (parseInt(current_slide.getAttribute('data-number'))+1 < slides.length) {
                slides[parseInt(current_slide.getAttribute('data-number'))+1].classList.add('current-slide');
                controll_btns[parseInt(current_slide.getAttribute('data-number'))+1].classList.add('current-slide-btn');
                current_slide_btn = section.querySelector('.current-slide-btn');
            } else {
                slides[0].classList.add('current-slide');
                controll_btns[0].classList.add('current-slide-btn');
                current_slide_btn = section.querySelector('.current-slide-btn');
            }
            window.setTimeout(()=>{
                current_slide.classList.remove('current-slide');
                current_slide.classList.remove('prev-slide');
                current_slide = section.querySelector('.current-slide');
            }, 500);
        }, 4000);
    }, time);
}

let slider = document.querySelector('.goods-list'),
    slides = slider.querySelectorAll('a'),
    slide_right_btn = document.querySelector('.page-link-next'),
    slide_left_btn = document.querySelector('.page-link-previous'),
    slider_nav = document.querySelector('.slider-nav'),
    slider_nav_links,
    showed_slides_number,
    clickable = true,
    active_slide = 0;

window.addEventListener('resize', addPages);

function getSlidesNumber ()
{
    if (window.screen.width <= 650) {
        return 1;
    } else if (window.screen.width <= 900){
        return 2;
    } else if (window.screen.width <= 1300) {
        return 3;
    }
    return 4;
}

addPages();

function addPages ()
{
    let text = "";
    if (Math.ceil(slides.length/getSlidesNumber()) > 5){
        if (Number.isInteger(slides.length/5)) {
            for (let i = 0; i < Math.ceil(slides.length/getSlidesNumber()); i++) {
                text += `<p class="page-count" data-number="${i}"><span class="page-link"></span></p>`;
            }
        } else {
            for (let i = 0; i < Math.ceil(slides.length/getSlidesNumber()); i++) {
                text += `<p class="page-count" data-number="${i}"><span class="page-link"></span></p>`;
            }
            for (let i = Math.ceil(slides.length/getSlidesNumber()); i < round(Math.ceil(slides.length/getSlidesNumber()), 5); i++) {
                text += `<p class="hidden-page-count" data-number="${i}"><span class="page-link"></span></p>`;
            }
        }
    } else {
        for (let i = 0; i < Math.ceil(slides.length/getSlidesNumber()); i++) {
            text += `<p class="page-count" data-number="${i}"><span class="page-link"></span></p>`;
        }
    }
    slider_nav.innerHTML = text;
    slider_nav_links = slider_nav.querySelectorAll('.page-count');
    slider_nav_links[active_slide].classList.add('active');
}

function blockClick ()
{
    if (clickable) {
        clickable = false;
        setTimeout(() => {
            clickable = true;
        }, 600);
        return true;
    }
    return false;
}

function changeActivBtn ()
{
    console.log(slider_nav_links.length-1);
    document.querySelector('.page-count.active').classList.remove('active');
    slider_nav_links[active_slide].classList.add('active');
}

slider_nav_links.forEach(element => {
    element.onclick = (e) => {
        if (!blockClick()) {
            return false;
        }
        active_slide = e.target.getAttribute('data-number');
        slider.scroll(slider.getBoundingClientRect().width*active_slide, 0)

        changeActivBtn();
    }
});

slide_right_btn.onclick = slideRight;

function slideRight ()
{
    if (!blockClick()) {            //timeout for animation
        return false;
    }

    navSlideRight();

    if (active_slide < slider_nav_links.length-1) {
        active_slide++;
    }
    changeActivBtn();

    slider.scroll(slider.scrollLeft+slider.getBoundingClientRect().width, 0);


}
slide_left_btn.onclick = slideLeft;

function slideLeft ()
{
    if (!blockClick()) {            //timeout for animation
        return false;
    }

    navSlideLeft();

    if (active_slide > 0) {
        active_slide--;
    }
    changeActivBtn();

    slider.scroll(slider.scrollLeft-slider.getBoundingClientRect().width, 0);
}

function navSlideRight ()
{
    if (slider_nav_links.length > round(active_slide, 5) && active_slide == round(active_slide, 5)-1){
        slider_nav.scroll(slider_nav.scrollLeft + slider_nav.getBoundingClientRect().width, 0);
    }
}

function navSlideLeft ()
{
    if (active_slide != 0 && active_slide == round(active_slide, 5)){
        slider_nav.scroll(slider_nav.scrollLeft - slider_nav.getBoundingClientRect().width, 0);
    }
}

function round(x, roundTo)
{
    return Math.ceil(x/roundTo)*roundTo;
}
