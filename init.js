let cardCont = document.querySelector('.card-container');

let cards = cardCont.children;
let posSlide = 1;

let width = cardCont.offsetWidth,
    height = cardCont.offsetHeight,
    cardWidth = cards[0].offsetWidth,
    cardHeight = cards[0].offsetHeight;


// return a string with rgba color - its just to view cards better
function rgba(){
    let r = Math.floor(Math.random() * (255 - 0 + 1) + 0),
        g = Math.floor(Math.random() * (255 - 0 + 1) + 0),
        b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        a = (Math.random() * 1 - 0 + 1) + 0;
    return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

//colorize cards with rgba - its just to view cards better
for(let i=0;i<cards.length;i++){
    cards[i].style.background = rgba();
}

function positionElements(){

    for(let i=0; i<cards.length; i++){

        if(i == 0) {
            centerElement(cards[i]);
        }else if(i == 1) {
            setRightElement(cards[i])
        }else if (i > 1){
            let e = cards[i];
            let eleAfter = cards[i-1]
            setRightAfterElement(cards[i],eleAfter);
        }
    }
}

function forwardSlide(){
    
    let a = posSlide-1;
    let b = posSlide;
    let c = posSlide+1;
    
    setLeftElement(cards[a]);
    centerElement(cards[b]);

    // posSlide++;
}

function setLeftElement(e){
    e.style.left = `-${e.offsetWidth - ( e.offsetWidth * 0.25 )}px`;
}
function centerElement(e){
    e.style.left = `${ (width / 2) - (e.offsetWidth / 2) }px`;
    console.log(e.offsetWidth);
}

function setRightElement(e){
    e.style.left = `${(width-(e.offsetWidth*0.20))}px`;
}
function setRightAfterElement(element,elementAfter){
    element.style.left = `${elementAfter.offsetLeft + element.offsetWidth}px`
}

positionElements();