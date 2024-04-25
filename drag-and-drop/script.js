const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

/**drag started from filled box*/
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

/** drag over,enter,leave,drop happens to the empty boxes */
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart(){
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(e){
    e.preventDefault();
    this.className = 'empty'
}

function dragDrop(){
    this.className = 'empty';
    this.appendChild(fill);
}