# JS-Library Steps

Create a class Library that has the following properties and methods:
Book count (number)
Books (array of books)
markRead method that will:
Take in a parameter checkbox and id
Loop through the library books
If the book id is the same as the param id, change the book read property to true, the checkbox checked attribute to true, and the checked disabled attribute to true
addBook method that will:
Select the title input value, author input value, and read checkbox value
Use the book constructor to create a new book, passing in the input value, author value, and read checkbox value as params
Create a new table row
Create new table cells title, author and read properties of the newly added book
Append the new table cells to the newly created row
Select the table body
Append the new row to the table body
Increment library bookCount by one
Select the Add Book button from your index.html
Add an event listener to the button element that listens for a click event, and calls the library addBook
BONUS
Add a method to the Library class that removes a book from the books array
Update your UI on the index.html page to have a Remove button per book item, with an event listener for 'click' events to call the removeBook Library method
Hint: Use the book id property to find, then remove the book