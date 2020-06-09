let myLibrary = [];
let count = 0;

function Book(id, author, title, pages, read) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookDetails) {
  let book = new Book(bookDetails.id, bookDetails.author, bookDetails.title, bookDetails.pages, bookDetails.read);
  myLibrary.push(book);
}

const bookDetails = {}

document.querySelector("#action").onsubmit = function(){
  count++;
  bookDetails.id = count;
  bookDetails.author = document.querySelector("#author").value;
  bookDetails.title = document.querySelector("#title").value;
  bookDetails.pages = document.querySelector("#pages").value;
  if(document.querySelector("#read").checked == true){
    bookDetails.read = "Read";
  }
  else{
    bookDetails.read = "Unread";
  }
  addBookToLibrary(bookDetails);
  printLibrary();
  clear();
  return false;
}

const container = document.querySelector("#books");

function printLibrary(){
  let book = document.createElement("div");
  container.appendChild(book).className = "book-div";
  let author = document.createElement("p");
  let title = document.createElement("p");
  let pages = document.createElement("p");
  let read = document.createElement("p");
  book.appendChild(author);
  book.appendChild(title);
  book.appendChild(pages);
  book.appendChild(read);
  author.textContent = myLibrary[myLibrary.length-1].author;
  title.textContent = myLibrary[myLibrary.length-1].title;
  pages.textContent = myLibrary[myLibrary.length-1].pages;
  read.textContent = myLibrary[myLibrary.length-1].read;
  let button = document.createElement("button");
  button.textContent = 'X';
  button.setAttribute('class','remove');
  button.setAttribute('value', myLibrary[myLibrary.length-1].id);
  book.appendChild(button);
  removeBook();
}

function removeBook(){
  if (myLibrary.length > 0){
    let buttons = document.querySelectorAll('.remove');
    buttons.forEach(function(element){
        element.addEventListener('click',function(){
            delete myLibrary[element.value-1];
            element.parentElement.remove();
          }  
        )
      }
    )
  }
}  

const addNew = document.querySelector("#add-new");
addNew.addEventListener('click', function(){
  const action = document.querySelector("#action");
  action.classList.remove("d-none");
  addNew.classList.add("d-none");
});

function clear(){
  document.querySelector("#author").value = '';
  document.querySelector("#title").value = '';
  document.querySelector("#pages").value = '';
  document.querySelector("#read").checked = false;
}