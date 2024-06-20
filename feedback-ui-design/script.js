const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';


ratingsContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    //check the parenNode and small tag exist  
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) 
    {
        removeActive(); //remove first all hovered boxes
        e.target.parentNode.classList.add('active'); //add active-class to the parenNode as hover select option
        selectedRating = e.target.nextElementSibling.innerHTML; //read the selectedRating from sibling Element
    } 
    //check the parenNode and the img tag exist
    else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerHTML;
    }
})

// change the innerHTML for sending Feedback status
sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you! </strong>
         <br>
        <strong>Feedback: ${selectedRating} </strong> 
        <p>We'll use your feedback to improve our customer support </p>
    `;
})

//remove all the active classes to reset hover of feedback selection
function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}