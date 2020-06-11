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
