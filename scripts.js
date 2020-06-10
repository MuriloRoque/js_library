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

function readBook(readButton) {
  readButton.addEventListener('click', () => {
    const parent = readButton.parentElement;
    const { children } = parent;
    if (myLibrary[readButton.value - 1].read === 'Read') {
      readButton.textContent = 'Mark as read';
      myLibrary[readButton.value - 1].read = 'Unread';
      children[3].textContent = 'Unread';
    } else {
      readButton.textContent = 'Mark as unread';
      myLibrary[readButton.value - 1].read = 'Read';
      children[3].textContent = 'Read';
    }
  });
}

function removeBook(deleteButton) {
  deleteButton.addEventListener('click', () => {
    delete myLibrary[deleteButton.value - 1];
    deleteButton.parentElement.remove();
  });
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
  removeBook(deleteButton);
  readBook(readButton);
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
