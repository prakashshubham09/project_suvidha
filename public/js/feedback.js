const Feedback = document.getElementsByClassName('feedback')[0];
// const FeedbackClass = document.getElementsByClassName('feedback');
const SimilarItems = document.getElementsByClassName('similarItems')[0];

let SimilarItems_width = SimilarItems.clientWidth;

let feedScrolled;

let index = 0;

setInterval(() => {
    feedScrolled = Feedback.scrollLeft += SimilarItems_width;
    index += 1;

    if(index == 6){
        Feedback.scrollLeft = 0;
        index= 0;
    }
    // console.log(feedScrolled, index);
}, 6000);


// console.log(Feedback.scrollLeft)