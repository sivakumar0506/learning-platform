// script.js

document.addEventListener('DOMContentLoaded', function() {
    const basicsHtmlNode = document.getElementById('basics-html');
    const modal = document.getElementById('htmlModal');
    const closeBtn = document.querySelector('.close-btn');
    const cancelBtn = document.querySelector('.cancel-btn');
    const flashcardsBtn = document.querySelector('.flashcards-btn');

    basicsHtmlNode.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    cancelBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

});
//area
document.addEventListener('DOMContentLoaded', (event) => {
    const notesTextarea = document.getElementById('notes');
    const saveBtn = document.getElementById('saveBtn');
    const deleteBtn = document.getElementById('deleteBtn');

    // Load notes from local storage
    notesTextarea.value = localStorage.getItem('notes') || '';

    // Save notes to local storage
    saveBtn.addEventListener('click', () => {
        localStorage.setItem('notes', notesTextarea.value);
        alert('Notes saved!');
    });

    // Delete notes from local storage
    deleteBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete all notes?')) {
            localStorage.removeItem('notes');
            notesTextarea.value = '';
            alert('Notes deleted!');
        }
    });
});

//



