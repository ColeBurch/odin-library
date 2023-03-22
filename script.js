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

function displayBooks() {
  cardBox.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("bookCard");
    newDiv.id = i;
    cardBox.appendChild(newDiv);
    const newTitle = document.createElement("div");
    newTitle.classList.add("bookCardText");
    newTitle.textContent = myLibrary[i].title;
    newDiv.appendChild(newTitle);
    const newAuthor = document.createElement("div");
    newAuthor.classList.add("bookCardText");
    newAuthor.textContent = myLibrary[i].author;
    newDiv.appendChild(newAuthor);
    const newPages = document.createElement("div");
    newPages.classList.add("bookCardText");
    newPages.textContent = myLibrary[i].pages + " pages";
    newDiv.appendChild(newPages);
  }
}

const cardBox = document.querySelector(".cardBox");

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");
const harryPotterAndTheSorcerersStone = new Book(
  "Harry Potter and the Sorcerer's Stone",
  "J.K. Rowling",
  309,
  "not read"
);
const warAndPeace = new Book("War and Peace", "Leo Tolstoy", 1215, "not read");
const crimeAndPunishment = new Book(
  "Crime and Punishment",
  "Fyodor Dostoevsky",
  430,
  "read"
);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotterAndTheSorcerersStone);
addBookToLibrary(warAndPeace);
addBookToLibrary(crimeAndPunishment);
console.log(myLibrary[0].info());
console.log(myLibrary[1].info());
console.log(myLibrary[2].info());
displayBooks();
