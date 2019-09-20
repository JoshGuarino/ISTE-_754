//global variables
let elem = document.getElementsByClassName('square')[0];
let mouseOnSquare = false;

//onclick event for square
elem.addEventListener('click', function(){
    let curHeight = this.clientHeight,
        curWidth = this.clientWidth,
        newHeight = curHeight * 2,
        newWidth = curWidth * 2;
    while(newHeight > curHeight && newWidth > curWidth){
        curHeight += 5;
        curWidth += 5;
        grow(curHeight, curWidth);
    }
});

//grow the square to dobule the size
function grow(height, width){
    setTimeout(function(){
        elem.style.height = height + "px";
        elem.style.width = width + "px";
    }, 40);
}


//mouse over and out events
elem.addEventListener('mouseover', function(){
    mouseOnSquare = true;
    let slideTimer = setInterval(slideRight, 40);
    let checkTimer = setInterval(function(){
        if(mouseOnSquare === false){
            clearInterval(slideTimer);
            learInterval(checkTimer);
        }
    });
});
elem.addEventListener('mouseout', function(){
    mouseOnSquare = false;
});

//slide square to the right
function slideRight(){
    let curPos = elem.getBoundingClientRect().left;
    newPos = curPos + 5;
    elem.style.left = newPos + 'px';

}


//reset the square object to its starting point.
document.getElementById('reset').addEventListener('click', function(){
    document.location.reload();
});