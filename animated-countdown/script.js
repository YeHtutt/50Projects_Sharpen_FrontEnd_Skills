const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.querySelector('#replay');

runAnimation();

function runAnimation() {
    nums.forEach((num, idx) => {
        const lastElement = nums.length - 1 ;

        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== lastElement) {
                num.classList.remove('in');
                num.classList.add('out');
            } else if(e.animationName === 'goOut' && num.nextElementSibling ) {
                num.nextElementSibling.classList.add('in');
            }else {
                counter.classList.add('hide');
                finalMessage.classList.add('show');
            }
        })
    });
}

function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');

    nums.forEach((num) => {
        num.classList.remove('in'); //delete all class names 'in' of the nums
        num.classList.remove('out'); //delete all class names 'out' of the nums
    })

    nums[0].classList.add('in'); //to the first span added class 'in' for restart from beginning
}

replay.addEventListener('click' , () => {
    resetDOM();
    runAnimation();
});