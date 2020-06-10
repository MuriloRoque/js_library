let myLibrary = [];
let count = 0;

function Book(id, author, title, pages, read) {
  this.id = id;
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary({id, author, title, pages, read}) {
  let book = new Book(id, author, title, pages, read);
  myLibrary.push(book);
}

document.querySelector("#action").onsubmit = function(){
  count++;
  const bookDetails = {
    id: count,
    author: document.querySelector("#author").value,
    title: document.querySelector("#title").value,
    pages: document.querySelector("#pages").value,
    read: "Unread"
  }
  
  addBookToLibrary(bookDetails);
  printLibrary(bookDetails);
  clear();
  return false;
}

const container = document.querySelector("#books");

function appendElement(element, parent, classElement=''){
  let child = document.createElement(element);
  parent.appendChild(child).className = classElement;
  return child;
}


function printLibrary(bookDetails){
  let book = appendElement("div", container, "book-div");
  const bookProperties = Object.keys(bookDetails);
  bookProperties.shift();
  let child = '';
  for(const key of bookProperties){
    child = appendElement("p", book);
    child.textContent = myLibrary[myLibrary.length-1][key];
  }

  let readButton = appendElement("button", book);
  let deleteButton = appendElement("button", book);

  readButton.textContent = "Mark as read";
  readButton.setAttribute('class','read-button');
  readButton.setAttribute('value', myLibrary[myLibrary.length-1].id);
  deleteButton.textContent = 'X';
  deleteButton.setAttribute('class','remove');
  deleteButton.setAttribute('value', myLibrary[myLibrary.length-1].id);
  
  removeBook();
  readBook();
}

function readBook(){
  let readSingle = document.querySelectorAll('.read-button');
  readSingle.forEach(function(element){
    readEvent(element);
  })
}

function readEvent(element){
  element.addEventListener('click',function(){
    let parent = element.parentElement;
    let children = parent.children;
    if(myLibrary[element.value-1].read === "Read"){
      element.textContent = "Mark as read";
      myLibrary[element.value-1].read = "Unread";
      children[3].textContent = "Unread";
    }
    else{
      element.textContent = "Mark as unread";
      myLibrary[element.value-1].read = "Read";
      children[3].textContent = "Read";
    }
  })
}

function removeBook(){
  if (myLibrary.length > 0){
    let buttons = document.querySelectorAll('.remove');
    buttons.forEach(function(element){
      removeEvent(element);
    })
  }
}  

function removeEvent(element){
  element.addEventListener('click',function(){
    delete myLibrary[element.value-1];
    element.parentElement.remove();
  })
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
}