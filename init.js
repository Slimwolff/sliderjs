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
        a = (Math.random() * 1 - 0 + 0) + 0.01;
    return `rgba(${r},${g},${b},${a.toFixed(2)})`;
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
            setRightElementAfter(cards[i],eleAfter);
        }
    }
}

function backwardSlide(){
    let currentCard = posSlide-1;
    let backSlide = currentCard-1;
    let forSlide = currentCard+1;
    
    if(posSlide !== 1){
        
        setRightElement(cards[currentCard]);
        centerElement(cards[backSlide]);
        if(posSlide !== cards.length){
            setRightElementAfter(cards[forSlide],cards[forSlide]);
        }
        
        
        posSlide--;
    }
    

}

function forwardSlide(){
    
    let a = posSlide-1;
    let b = posSlide;
    let c = posSlide+1;
    
    console.log(`slide position: ${posSlide}, cards length: ${cards.length}`);
    console.log(`a: ${a}, b: ${b}, c: ${c} - posSlide: ${posSlide}`);
    if(posSlide <= cards.length){

        if(posSlide !== cards.length){

            if(posSlide !== 1){
                setLeftElementAfter(cards[a],cards[a]);
            }
            
            setLeftElement(cards[a]);
            centerElement(cards[b]);

            if(c == cards.length){

            }else{
                setRightElement(cards[c]);
            }
            posSlide++;
            console.log(`position Slide on increment: ${posSlide}`);
        }
            
        
    }
}

function setLeftElement(e){
    e.style.left = `-${e.offsetWidth - ( e.offsetWidth * 0.2 )}px`;
}
function centerElement(e){
    e.style.left = `${ (width / 2) - (e.offsetWidth / 2) }px`;
    console.log(e.offsetWidth);
}

function setRightElement(e){
    e.style.left = `${(width-(e.offsetWidth*0.2))}px`;
}
function setLeftElementAfter(element,elementAfter){
    element.style.left = `-${elementAfter.offsetLeft - element.offsetWidth}px`;
}
function setRightElementAfter(element,elementAfter){
    element.style.left = `${elementAfter.offsetLeft + element.offsetWidth}px`
}


positionElements();