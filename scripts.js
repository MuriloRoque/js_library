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
// bookDetails.author = prompt("Choose a book author");
// bookDetails.title = prompt("Choose a book title");
// bookDetails.pages = prompt("Choose the number of pages");
// bookDetails.read = prompt("Was it read by you?");
addBookToLibrary(bookDetails);

const container = document.getElementById("books");

for(let i = 0; i < myLibrary.length; i++){
  let cell = document.createElement("div");
  container.appendChild(cell).className = "book-div";
  let book = document.createElement("p");
  cell.appendChild(book);
  book.textContent = myLibrary[i].author + myLibrary[i].title + myLibrary[i].pages + myLibrary[i].read;
}
