let cardCont = document.querySelector('.card-container');

let cards = cardCont.children;
let posSlide = 1;

let width = cardCont.offsetWidth,
    height = cardCont.offsetHeight,
    cardWidth = cards[0].offsetWidth,
    cardHeight = cards[0].offsetHeight;

function positionElements(){

    
    const first_elemet = 0;
    const second_element = 1;


    for(let i=0; i<cards.length; i++){

        let cardWidth = cards[i].offsetWidth;
        let cardHeight = cards[i].offsetHeight;

        if(i == first_elemet) {
            centerElement(cards[i]);
        }else if(i == second_element) {
            cards[i].style.left = `${(width-(cardWidth*0.20))}px`;
        }
    }
}

function forwardSlide(){
    
    let a = posSlide-1;
    let b = posSlide;
    let c = posSlide+1;
    
    cards[a].style.left = `-${cards[a].offsetWidth - (cards[a].offsetWidth*0.25)}px`;
    cards[b].addEventListener("transitionstart",()=>{
        centerElement(cards[b]);
        cards[b].removeEventListener("transitionstart",()=>{});
        console.log("transition end");
    },false);
    cards[b].classList.add('selected');

    
    // $(b);

}

function centerElement(e){
    e.style.left = `${ (width / 2) - (e.offsetWidth / 2)}px`;
    console.log(e.offsetWidth);
}

positionElements();