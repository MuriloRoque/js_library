/* global appendElement */
/* global readBook */

const myLibrary = [];
let count = 0;
const container = document.querySelector('#books');

function removeBook(deleteButton) {
  deleteButton.addEventListener('click', () => {
    delete myLibrary[deleteButton.value - 1];
    deleteButton.parentElement.remove();
  });
}

function printLibrary(bookDetails) {
  const book = appendElement('div', container, 'book-div');
  const bookProperties = Object.keys(bookDetails);
  bookProperties.shift();
  let child = '';
  bookProperties.forEach((key) => {
    child = appendElement('p', book);
    child.textContent = myLibrary[myLibrary.length - 1][key];
  });
  const readButton = appendElement('button', book);
  const deleteButton = appendElement('button', book);
  readButton.textContent = 'Change read status';
  readButton.setAttribute('class', 'read-button');
  readButton.setAttribute('value', myLibrary[myLibrary.length - 1].id);
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'remove');
  deleteButton.setAttribute('value', myLibrary[myLibrary.length - 1].id);
  removeBook(deleteButton);
  readBook(readButton);
}

function Book(id, author, title, pages, read) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary({
  id, author, title, pages, read,
}) {
  const book = new Book(id, author, title, pages, read);
  myLibrary.push(book);
}

function readUnread() {
  if (document.querySelector('#read').checked === true) {
    return 'Read';
  }

  return 'Unread';
}

const form = document.querySelector('#action');

form.onsubmit = () => {
  count += 1;
  const bookDetails = {
    id: count,
    author: document.querySelector('#author').value,
    title: document.querySelector('#title').value,
    pages: document.querySelector('#pages').value,
    read: readUnread(),
  };
  addBookToLibrary(bookDetails);
  printLibrary(bookDetails);
  document.getElementById('action').reset();
  return false;
};

const addNew = document.querySelector('#add-new');
addNew.addEventListener('click', () => {
  const action = document.querySelector('#action');
  action.classList.remove('d-none');
  addNew.classList.add('d-none');
});
