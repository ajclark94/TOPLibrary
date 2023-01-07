const myLibrary = [];
const newBook = document.querySelector('');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook() {

}

const book1 = new Book('The Hobbit', 'JRR Tolkien', 129, true);
const book2 = new Book('The Fellowship of the Ring', 'JRR Tolkien', 500, true);
myLibrary.push(book1);
myLibrary.push(book2);
