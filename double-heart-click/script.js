const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let likedTime = 0;

loveMe.addEventListener('click', (e) => {
    //first click get the timestamp
    if (clickTime === 0) {
        clickTime = new Date().getTime(); 
    } else { //for the further clicks
        //if the second click happened under 800 MilliSeconds, it should shows heart.
        if ((new Date().getTime() - clickTime) < 800) {  //cal. of second click duration with the 2x timestamps
            showHeart(e);
            clickTime = 0; //reset the clickTime (time stamp)
        } else { //if the second happen over 800 MilliSeconds, it should take another time stamp
            clickTime = new Date().getTime();
        }
    }
})

//show red hart-icon form the clicked position
function showHeart(e) {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    //get the values of x and y positions from the whole document
    let x = e.clientX;
    let y = e.clientY;

    //get the offsetTop and offsetLeft values of the target image
    topOffset = e.target.offsetTop;
    leftOffset = e.target.offsetLeft;

    //calculate the relational image positions for the clickable area
    x_ImageArea = x - leftOffset;
    y_ImageArea = y - topOffset;

    //add the css position for display the heart
    heart.style.top = `${y_ImageArea}px`;
    heart.style.left = `${x_ImageArea}px`;
    //append the heart-icon in DOM
    loveMe.appendChild(heart);
    setTimeout(() => { //clear the DOM after 2Sec. 
        heart.remove();
    }, 2000);
    //increment like clicks
    likedTime++;
    times.innerHTML = likedTime;
}