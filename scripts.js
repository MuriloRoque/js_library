let myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
}

let author = prompt("Choose a book author");
let title = prompt("Choose a book title");
let pages = prompt("Choose the number of pages");
let read = prompt("Was it read by you?");
addBookToLibrary(author, title, pages, read);
