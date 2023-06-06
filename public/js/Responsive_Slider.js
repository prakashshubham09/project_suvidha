/* ---------------- All Services Scrolling ---------------- */

const CategoryContainer = document.getElementById('categoryContainer');
const CatSimiler = document.getElementsByClassName('catSimiler');
const nextBtn = document.getElementById('rightBtn');
const backBtn = document.getElementById('leftBtn');

let catWidth = CategoryContainer.clientWidth;
let catScrollPosition = CategoryContainer.scrollLeft;

let no_of_all_cat = 0;
let all_cat_box_width = 0;


if(screen.width > 992){
    no_of_all_cat = document.getElementById('categoryContainer').getAttribute('item-display-d');
    all_cat_box_width = Math.floor(catWidth / no_of_all_cat)-12;
}

if(screen.width > 768 && screen.width < 992){
    no_of_all_cat = document.getElementById('categoryContainer').getAttribute('item-display-t');
    all_cat_box_width = Math.floor(catWidth / no_of_all_cat)-12;
}

if(screen.width < 768){
    no_of_all_cat = document.getElementById('categoryContainer').getAttribute('item-display-m');
    all_cat_box_width = Math.floor(catWidth / no_of_all_cat)-30;
}

for(let i=0; i<CatSimiler.length; i++){
    CatSimiler[i].style.width = all_cat_box_width + 'px';
    CatSimiler[i].style.height = all_cat_box_width + 'px';
}

const scrollLeftRightVisibility = (position) => {
    console.log(position);

    if(position >= 2156){
        nextBtn.classList.add('lowBrightness');
    } else{
        nextBtn.classList.remove('lowBrightness');
    }

    if(position <= 650) {
        backBtn.classList.add('lowBrightness');
    } else {
        backBtn.classList.remove('lowBrightness');
    }
}

nextBtn.addEventListener('click', () => {
    let scrolled = CategoryContainer.scrollLeft += catWidth;
    scrollLeftRightVisibility(scrolled);
})

backBtn.addEventListener('click', () => {
    let scrolled = CategoryContainer.scrollLeft -= catWidth;
    scrollLeftRightVisibility(scrolled + 1133);
})


/* ---------------- Home Service Scrolling Part 1---------------- */

const firstHomeContainer = document.getElementsByClassName('homeContainer')[0];
const homeContainer2 = document.getElementsByClassName('homeContainer2')[0];
const homeContainer4 = document.getElementsByClassName('homeContainer4')[0];
const homeCatSimiler = document.getElementsByClassName('homeCatSimiler');
const homeNextBtn = document.getElementsByClassName('homeRightBtn');
const homeBackBtn = document.getElementsByClassName('homeLeftBtn');

let homeCatWidth = firstHomeContainer.clientWidth;
let One_Item_Width = homeCatWidth / 4;
// let homeCatScrollPosition = homeContainer.scrollLeft;

let no_of_all_home = 0;
let all_home_box_width = 0;


if(screen.width > 992){
    no_of_all_home = firstHomeContainer.getAttribute('item-display-d');
    all_home_box_width = Math.floor(homeCatWidth / no_of_all_home) - 11;
    // console.log(all_cat_box_width)
}

if(screen.width > 768 && screen.width < 992){
    no_of_all_home = firstHomeContainer.getAttribute('item-display-t');
    all_home_box_width = Math.floor(homeCatWidth / no_of_all_home)-11 ;
}

if(screen.width < 768){
    no_of_all_home = firstHomeContainer.getAttribute('item-display-m');
    all_home_box_width = Math.floor(homeCatWidth / no_of_all_home)- 40;
}

for(let i=0; i<homeCatSimiler.length; i++){
    homeCatSimiler[i].style.width = all_home_box_width + 'px';
    homeCatSimiler[i].style.height = (all_home_box_width / 1.75 ) + 'px';
}

const homeScrollLeftRightVisibility = (position) => {
    console.log(position);

    if(position >= 2056){
        homeNextBtn[0].style.visibility = 'hidden';
    } else{
        homeNextBtn[0].style.visibility = 'visible';
    }

    if(position >= 200) {
        homeBackBtn[0].style.visibility = 'visible';
    } else{
        homeBackBtn[0].style.visibility = 'hidden';
    }
}

homeNextBtn[0].addEventListener('click', () => {
    let scrolled = homeContainer2.scrollLeft += One_Item_Width;
    homeScrollLeftRightVisibility(scrolled);
    // console.log('next button for 1st has been clicked');
    // console.log(homeContainer2.scrollLeft);
})

homeBackBtn[0].addEventListener('click', () => {
    let scrolled = homeContainer2.scrollLeft -= One_Item_Width;
    homeScrollLeftRightVisibility(scrolled);
    // console.log(homeContainer[2].scrollLeft);
    // homeScrollLeftRightVisibility(scrolled + 1133);
})


const homeScrollLeftRightVisibility2 = (position) => {
    console.log(position);

    if(position >= 405){
        homeNextBtn[1].style.visibility = 'hidden';
    } else{
        homeNextBtn[1].style.visibility = 'visible';
    }

    if(position >= 200) {
        homeBackBtn[1].style.visibility = 'visible';
    } else{
        homeBackBtn[1].style.visibility = 'hidden';
    }
}

homeNextBtn[1].addEventListener('click', () => {
    let scrolled = homeContainer4.scrollLeft += One_Item_Width;
    homeScrollLeftRightVisibility2(scrolled);
    // console.log('next button for 1st has been clicked');
    // console.log(homeContainer2.scrollLeft);
})

homeBackBtn[1].addEventListener('click', () => {
    let scrolled = homeContainer4.scrollLeft -= One_Item_Width;
    homeScrollLeftRightVisibility2(scrolled);
    // console.log(homeContainer[2].scrollLeft);
    // homeScrollLeftRightVisibility(scrolled + 1133);
})




