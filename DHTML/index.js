let elem = document.getElementsByClassName('square')[0];

//onclick event for square
elem.addEventListener('click', function(){
    let curHeight = this.clientHeight,
        curWidth = this.clientWidth,
        newHeight = curHeight * 2,
        newWidth = curWidth * 2;
    if(newHeight > curWidth){
        console.log(newHeight, newWidth);
    }


    // this.style.height = newHeight + "px";
    // this.style.width = newWidth + "px";


});

//grow the square to dobule the size
function grow(){
    setTimeout(function(){
        //grow by 5px
    }, 40);
}





//onhover event for square
//elem.addEventListener('mouseover', slideRight);

//slide square to the right
function slideRight(){

    let curPos =  parseInt(elem.style.left);
    let newPos = curPos + 500;    
    elem.style.left = newPos;
    console.log(curPos + " " + newPos);
    //setTimeout(slideRight, 40);
}



//reset the square object to its starting point.
document.getElementById('reset').addEventListener('click', function(){
    document.location.reload();
});