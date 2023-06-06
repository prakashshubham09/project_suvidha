// Sliding Functionality

const DetailsSlider = document.getElementsByClassName("details-slider")[0];
const NextSlider = document.getElementById("next-slider");
const SubmitBtn = document.getElementById("submit");

const Slider_Width = DetailsSlider.clientWidth;
var slideInfo;

function forward_slide(){
    slideInfo = DetailsSlider.scrollLeft += Slider_Width;
    console.log(slideInfo);
    if(slideInfo > 100){
        NextSlider.style.display = 'none';
        SubmitBtn.style.display = 'flex';
    }
}

function backward_slide(){
    slideInfo = DetailsSlider.scrollLeft -= Slider_Width;
    // console.log(slideInfo);
    if(slideInfo < 200){
        NextSlider.style.display = 'flex';
        SubmitBtn.style.display = 'none';
    }
}

NextSlider.addEventListener('click', ()=> {
    forward_slide();
    document.getElementById("a1").checked = true;
})

const A1 = document.getElementById("a1");

A1.addEventListener('click', ()=> {
    forward_slide();
})

const P1 = document.getElementById("p1");

P1.addEventListener('click', ()=> {
    backward_slide();
})

// Submit Visibility


if(slideInfo > 200){
    NextSlider.style.display = 'none';
    console.log('hellow')
}