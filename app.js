const myLibrary = [];
const newTitle = document.querySelector('#title');
const newAuthor = document.querySelector('#author');
const newPageCount = document.querySelector('#pageCount');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const newBook = document.querySelector('#submit');
const container = document.querySelector('.display');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

newBook.addEventListener('click', (event) => {
  document.createElement('p');
  container.appendChild();
  event.preventDefault();
});

const book1 = new Book('The Hobbit', 'JRR Tolkien', 129, true);
const book2 = new Book('The Fellowship of the Ring', 'JRR Tolkien', 500, true);
myLibrary.push(book1);
myLibrary.push(book2);
