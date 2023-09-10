//app.js
const books = [
  {
    id: 1,
    title: "Lord of the Ring",
    author: "John R. R.",
    read: true,
  },
];
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(books) {
    this.nextId = books.length;
    this.books = books;
  }

  addBook() {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const read = document.getElementById("read");

    this.nextId++;
    const newBook = new Book(
      this.nextId,
      title.value,
      author.value,
      read.checked
    );
    this.books.push(newBook);
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
    newCheckbox.id = newBook.id;
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read.checked;
    newRead.appendChild(newCheckbox);
    newCheckbox.disabled = read.checked;

    newCheckbox.addEventListener("click", (event) => {
      this.markRead(event.target, parseInt(event.target.id));
    });
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
      // if (id === book.id && !book.read)
      if (id === book.id) {
        //book.read = checkbox.checked;
        // checkbox.disabled = checkbox.checked;
        book.read = true;
        //checkbox.checked = true;
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
