function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () => {
  let status;
  if (this.read === true) {
    status = 'have';
  } else {
    status = 'have not';
  }
  return `${this.title}, written by ${this.author}. It is ${this.pages} pages long and I ${status} read this book`;
};

const book1 = new Book('The Hobbit', 'JRR Tolkien', 129, true);

console.log(book1.info());
