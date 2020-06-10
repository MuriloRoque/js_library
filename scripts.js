const myLibrary = [];
let count = 0;

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

function appendElement(element, parent, classElement = '') {
  const child = document.createElement(element);
  parent.appendChild(child).className = classElement;
  return child;
}

function readEvent(element) {
  element.addEventListener('click', () => {
    const parent = element.parentElement;
    const { children } = parent;
    if (myLibrary[element.value - 1].read === 'Read') {
      element.textContent = 'Mark as read';
      myLibrary[element.value - 1].read = 'Unread';
      children[3].textContent = 'Unread';
    } else {
      element.textContent = 'Mark as unread';
      myLibrary[element.value - 1].read = 'Read';
      children[3].textContent = 'Read';
    }
  });
}

function readBook() {
  const readSingle = document.querySelectorAll('.read-button');
  readSingle.forEach((element) => {
    readEvent(element);
  });
}

function removeEvent(element) {
  element.addEventListener('click', () => {
    delete myLibrary[element.value - 1];
    element.parentElement.remove();
  });
}

function removeBook() {
  if (myLibrary.length > 0) {
    const buttons = document.querySelectorAll('.remove');
    buttons.forEach((element) => {
      removeEvent(element);
    });
  }
}

const container = document.querySelector('#books');

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
  readButton.textContent = 'Mark as read';
  readButton.setAttribute('class', 'read-button');
  readButton.setAttribute('value', myLibrary[myLibrary.length - 1].id);
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class', 'remove');
  deleteButton.setAttribute('value', myLibrary[myLibrary.length - 1].id);
  removeBook();
  readBook();
}

function clear() {
  document.querySelector('#author').value = '';
  document.querySelector('#title').value = '';
  document.querySelector('#pages').value = '';
}

const form = document.querySelector('#action');

form.onsubmit = () => {
  count += 1;
  const bookDetails = {
    id: count,
    author: document.querySelector('#author').value,
    title: document.querySelector('#title').value,
    pages: document.querySelector('#pages').value,
    read: 'Unread',
  };
  addBookToLibrary(bookDetails);
  printLibrary(bookDetails);
  clear();
  return false;
};

const addNew = document.querySelector('#add-new');
addNew.addEventListener('click', () => {
  const action = document.querySelector('#action');
  action.classList.remove('d-none');
  addNew.classList.add('d-none');
});
