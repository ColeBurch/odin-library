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
    newTitle.textContent = '"' + myLibrary[i].title + '"';
    newDiv.appendChild(newTitle);
    const newAuthor = document.createElement("div");
    newAuthor.classList.add("bookCardText");
    newAuthor.textContent = myLibrary[i].author;
    newDiv.appendChild(newAuthor);
    const newPages = document.createElement("div");
    newPages.classList.add("bookCardText");
    newPages.textContent = myLibrary[i].pages + " pages";
    newDiv.appendChild(newPages);
    const readButton = document.createElement("button");
    readButton.classList.add("bookCardText", "cardButton");
    readButton.textContent = myLibrary[i].read;
    newDiv.appendChild(readButton);
    const removeButton = document.createElement("button");
    removeButton.classList.add("bookCardText", "cardButton");
    removeButton.textContent = "Remove";
    newDiv.appendChild(removeButton);
  }
}

const cardBox = document.querySelector(".cardBox");
const addBookForm = document.querySelector(".addBookForm");
const overlay = document.querySelector(".overlay");
const addBookButton = document.querySelector(".addBook");

addBookButton.addEventListener("click", () => {
  addBookForm.classList.add("active");
  overlay.classList.add("active");
  overlay.addEventListener("click", () => {
    addBookForm.classList.remove("active");
    overlay.classList.remove("active");
  });
});

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
displayBooks();
