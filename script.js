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
    readButton.classList.add("bookCardText", "cardButton", "readButton");
    readButton.id = i;
    readButton.textContent = myLibrary[i].read;
    if (readButton.textContent == "read") {
      readButton.classList.add("read");
    } else {
      readButton.classList.add("notRead");
    }
    newDiv.appendChild(readButton);
    const removeButton = document.createElement("button");
    removeButton.classList.add("bookCardText", "cardButton", "remove");
    removeButton.id = i;
    removeButton.textContent = "Remove";
    newDiv.appendChild(removeButton);
  }
  let removeButtons = document.querySelectorAll(".remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let buttonId = button.id;
      myLibrary.splice(buttonId, 1);
      displayBooks();
    });
  });
  let readButtons = document.querySelectorAll(".readButton");
  readButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let buttonId = button.id;
      if (button.textContent == "read") {
        button.textContent = "not Read";
        myLibrary[buttonId].read = "not read";
        button.classList.remove("read");
        button.classList.add("notRead");
      } else {
        button.textContent = "read";
        myLibrary[buttonId].read = "read";
        button.classList.remove("notRead");
        button.classList.add("read");
      }
    });
  });
}

function handleSubmit(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let bookLength = document.getElementById("pages").value;
  let readStatus = document.getElementById("readStatus").checked;
  if (readStatus) {
    readStatus = "read";
  } else {
    readStatus = "not read";
  }
  let newBook = new Book(title, author, bookLength, readStatus);
  addBookToLibrary(newBook);
  console.log(myLibrary);
  displayBooks();
  addBookForm.classList.remove("active");
  overlay.classList.remove("active");
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

addBookForm.addEventListener("submit", handleSubmit);
