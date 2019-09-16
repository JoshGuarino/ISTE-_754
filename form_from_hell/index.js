let isInstructionsRead = false;

//flag for if the user has read instructions
function readInstructions(){
    isInstructionsRead = true;
    console.log(isInstructionsRead);
}

//main loop to run for validation
function submitForm(){
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    
    //email validtion check
    if (email.slice(-4) != '.com' && email.slice(-4) != '.edu' && email.slice(-4) != '.org'){
        alert('Not a valid email address extension.');
        return;
    }
    if (email.slice(8, 9) != '@' || email.slice(0, 4) != 'Josh'){
        alert('The local-part in front of the @ must be exactly 8 characters long and start with "Josh".');
        return;
    }
    if (email.slice(9) != 'gmail.com' && email.slice(9, -4) != 'yahoo.com' && email.slice(9, -4) != 'rit.edu') {
        alert('Domain not valid, must be "rit.edu" or "yahoo.com" or "gmail.com".')
        return;
    }

    //password validation check
    if (password.length < 8 || password.length > 16){
        alert('Password must be 8-16 characters in length.');
        return;
    }

    //background color check, can't submit if they have messed with color selector.
    if (document.body.style.backgroundColor != ''){
        alert("Sorry form not submittable.  You weren't suppssed to mess with the color selector.  Hmm...I should probably remove it...");
        return;
    }

    //They have to have clicked confirm in instructions read to be able to submit.
    if (isInstructionsRead === false) {
        alert("Sorry form is not submitable because you didn't read the instructions. The page will now be relaoded and you have to start from scratch.");
        document.location.reload();
        return;
    }



    setInterval(function(){ 
        if (document.body.style.backgroundColor === 'white'){
            document.body.style.backgroundColor = 'black';
        }
        else if (document.body.style.backgroundColor === 'black'){
            document.body.style.backgroundColor = 'white';
        }
        else{
            document.body.style.backgroundColor = 'white';
        } 
    }, 500);
}

//rloads the entire page
function resetForm(){
    let confirmReset = confirm('Are you sure you want to reset?');
    if (confirmReset) {
        document.location.reload();
    }
}

//changes background color of page
function changeColor(color){
    document.body.style.backgroundColor = color;
}