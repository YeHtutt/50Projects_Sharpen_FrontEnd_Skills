const addBtn = document.getElementById('add');

//Declares a variable notes that contains the result of the parsed data, which retrieves from the localstorage with the key ("notes")
let notes = JSON.parse(localStorage.getItem("notes"));

/**
* Iterates through each element in the notes array.
* note => addNewNote(note): For each note in the array, the addNewNote function is called and the current note (note) is passed as an argument.
*/
if (notes) {
    notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener('click', () => addNewNote());

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');
    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text);

    /**delete the current node of the note element from the DOM*/
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLS();
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        textArea.focus();
    })

    /**addEventListener('input', ) - Adds an event listener that is triggered each time the content of the textarea is changed. 
     * The input event is triggered each time the content is changed. */
    textArea.addEventListener('input', (e) => {
        /**e.target: The target of the event, i.e. the textarea that receives the input.
         * { value }: A destructuring that extracts the current value (content) of the textarea into the variable value. */
        const { value } = e.target;
        /**The marked function converts the Markdown text (the value from the textarea) into HTML */
        main.innerHTML = marked(value);
        /**This function collects the content of all textarea elements and saves this content as a JSON string in the localStorage. */
        updateLS();
    })

    document.body.appendChild(note);
}

function updateLS() {
    //This method selects all textarea elements in the document and returns a NodeList
    const notesContent = document.querySelectorAll('textarea');
    const notes = [];
    /**
     * This method runs through every element in the NodeList.
     * note: The current textarea element in the loop.
     * Adds the text content "(note.value)" of the current textarea to the notes array.
     */
    notesContent.forEach(note => notes.push(note.value))
    /**
     * store to localstorage ( "key", "Array-value as string")
     * JSON.stringify(notes): Converts the notes array into a JSON string, as localStorage can only store strings.
     */
    localStorage.setItem('notes', JSON.stringify(notes));
}

