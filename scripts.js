let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookDetails) {
  let book = new Book(bookDetails.author, bookDetails.title, bookDetails.pages, bookDetails.read);
  myLibrary.push(book);
}

const bookDetails = {}

document.querySelector("#action").onsubmit = function(){
  bookDetails.author = document.querySelector("#author").value;
  bookDetails.title = document.querySelector("#title").value;
  bookDetails.pages = document.querySelector("#pages").value;
  bookDetails.read = document.querySelector("#read").value;
  addBookToLibrary(bookDetails);
  printLibrary();
}

const container = document.querySelector("#books");

function printLibrary(){
  for(let i = 0; i < myLibrary.length; i++){
    let cell = document.createElement("div");
    container.appendChild(cell).className = "book-div";
    let book = document.createElement("p");
    cell.appendChild(book);
    book.textContent = myLibrary[i].author + myLibrary[i].title + myLibrary[i].pages + myLibrary[i].read;
  }
}

const addNew = document.querySelector("#add-new");
addNew.addEventListener('click', function(){
  const action = document.querySelector("#action");
  action.classList.remove("d-none");
})