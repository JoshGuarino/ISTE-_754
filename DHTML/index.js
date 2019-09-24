//global variables
let elem = document.getElementsByClassName('square')[0];
let mouseOnSquare = false;
let newHeight = elem.clientHeight * 2,
    newWidth = elem.clientWidth * 2;

//onclick event for square
elem.addEventListener('click', function(){
    newHeight = this.clientHeight * 2;
    newWidth = this.clientWidth * 2;
    grow();
});

//grow the square to dobule the size
function grow(){
    let curHeight = elem.clientHeight,
        curWidth = elem.clientWidth;
    if(curHeight >= newHeight && curWidth >= newWidth){
        return;
    }
    curHeight += 5;
    curWidth += 5;
    elem.style.height = curHeight + "px";
    elem.style.width = curWidth + "px";
    setTimeout(grow, 40);
}


//mouse over and out events
elem.addEventListener('mouseover', function(){
    mouseOnSquare = true;
    slideRight();
});
elem.addEventListener('mouseout', function(){
    mouseOnSquare = false;
});

//slide square to the right
function slideRight(){
    if(mouseOnSquare === false){
        return;
    }
    let curPos = elem.getBoundingClientRect().left;
    newPos = curPos + 5;
    elem.style.left = newPos + 'px';
    setTimeout(slideRight, 40);
}


//reset the square object to its starting point.
document.getElementById('reset').addEventListener('click', function(){
    document.location.reload();
});