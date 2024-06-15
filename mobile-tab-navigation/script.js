const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((item, idx) => {
    item.addEventListener('click', ()=> {
        //first hide all other styles
        hideAllContent();
        hideAllItem();
        //second add styles
        item.classList.add('active');
        contents[idx].classList.add('show');
    });
}) 

function hideAllContent() {
    contents.forEach(item => item.classList.remove('show'));
}

function hideAllItem() {
    listItems.forEach(item => item.classList.remove('active'));
}