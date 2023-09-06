const books = [
  {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },
];
class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(books) {
    this.bookCount = books.length;
    this.books = books;
  }

  addBook() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const read = document.getElementById("read");

    const newBook = new Book(title.value, author.value, read.checked);
    this.books.push(newBook);

    this.bookCount++;
    //select table body
    const tbody = document.getElementById("tableBody");
    //create a new table row
    const newTr = document.createElement("tr");
    //create new data cells
    const newTitle = document.createElement("td");
    const newAuthor = document.createElement("td");
    const newRead = document.createElement("td");
    // add text content to td's w/book values
    newTitle.textContent = title.value;
    newAuthor.textContent = author.value;
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read.checked;
    newCheckbox.disabled = read.check;
    
    newRead.appendChild(newCheckbox);
    //append td's to the tr
    newTr.appendChild(newTitle);
    newTr.appendChild(newAuthor);
    newTr.appendChild(newRead);
    //append tr to the body
    tbody.appendChild(newTr);
  }

  markRead(checkbox, id) {
    this.books.forEach((book) => {
      if (id === book.id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});
