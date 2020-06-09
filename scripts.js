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
  let cell = document.createElement("div");
  container.appendChild(cell).className = "book-div";
  let book = document.createElement("p");
  cell.appendChild(book);
  book.textContent = myLibrary[myLibrary.length-1].author + myLibrary[myLibrary.length-1].title 
  + myLibrary[myLibrary.length-1].pages + myLibrary[myLibrary.length-1].read;
  let button = document.createElement("button");
  button.textContent = 'X';
  button.setAttribute('class','remove');
  book.appendChild(button);
  removeBook();
}

function removeBook(){
  if (myLibrary.length > 0){
    let buttons = document.querySelectorAll('.remove');
    buttons.forEach(function(element){
        element.addEventListener('click',function(){
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