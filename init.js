let cardCont = document.querySelector('.card-container');

let cards = cardCont.children;
let posSlide = 1;
let subtract = 0;
let width = cardCont.offsetWidth;
let dots = document.querySelector('.dots-cont');
let a = 1;
a.toFixed(0);
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

async function positionElements(){
    
    for(let i=0; i<cards.length; i++){
        if(i == 0){
            centerElement(cards[i]);
            let widEle = cards[i].offsetWidth;
            subtract = subtractValue(widEle);
            console.log(subtract)
        }else if(i > 0){
            let leftInit = cards[i-1].offsetLeft;
            let widthElement = cards[i-1].offsetWidth;
            setPosElement(cards[i],leftInit,widthElement);
        }
    }
    
}

function backwardSlide(){

    let c = cards;

    if(posSlide > 1){
        for(let i=0; i<c.length; i++){
            let offLeft = cards[i].offsetLeft;
            c[i].style.left = `${offLeft+subtract}px`;
        }
        posSlide--;    
    } 
}

function forwardSlide(){
    let c = cards;

    if(posSlide < c.length){
        for(let i=0; i<c.length; i++){
            let offLeft = cards[i].offsetLeft;
            c[i].style.left = `${offLeft-subtract}px`;
        }
        posSlide++;
    } 
    
}

function setLeftElement(e,value){
    e.style.left = `${value}px`;
}
function subtractValue(width){
    return width+(width*0.365);
}
function getValuePos(init,width){
    return (init+width)+(width*0.365);
}

function setPosElement(e,init,width){
    e.style.left = `${getValuePos(init,width)}px`
    console.log(`init: ${init} + width: ${width} + percentageWidth: ${width*0.365}`);
}

function centerElement(e){
    e.style.left = `${ (width / 2) - (e.offsetWidth / 2) }px`;
    console.log(e.offsetWidth);
}


//create dots based on cards.length
function createDots(){
    let e = document.createElement('div');
    e.classList.add('dots');
    dots.appendChild(e);
}

function increaseDotsWidth(wid){
    dots.style.width = `${wid}em`;
}

let dotsWidth = 1.5;

for(let i=0; i<cards.length; i++){
    dotsWidth += 1.5;
    createDots();
}

increaseDotsWidth(dotsWidth);
positionElements();