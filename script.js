let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + " pages, " + read;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");
addBookToLibrary(theHobbit);
console.log(myLibrary[0].info());
