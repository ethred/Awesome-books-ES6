// Create Books class to manage the book list

class Books {
  createObject() {
    this.books = [];
    if (localStorage.getItem('books') != null) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  //   // Display the book list
    displayBooks=() => {
      const x = this.books;
      let book = '';
      let displayType = 1;
      for (let i = 0; i < x.length; i += 1) {
        document.getElementById('display').innerHTML = `
        <div class="display" id="display"></div>`;
        book += `<div id='books-container${displayType}'>`;
        book += `<div id='book-author'><p id="booktext">"${x[i].title}" by ${x[i].author}</p></div>`;
        book += `<button class='remove-btn' data-index="${i}">Remove</button></div>`;
        if (displayType === 1) {
          displayType = 2;
        } else {
          displayType = 1;
        }
      }
      document.getElementById('display').innerHTML = book;
    }

    //   // Add books
    addBooks=() => {
      const x = this.books;
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title !== '' && author !== '') {
        const bookId = x.length + 1;
        x.push({ Id: bookId, title, author });
        this.displayBooks();
        document.querySelector('form').reset();
        this.saveToLocalStorage();
      //   alert(bookId);
      }
    }

    //   // Remove books from the list
    removeBooks(removeId) {
      removeId = parseInt(removeId, 10);
      const book = this.books;
      const filter = book.filter((remBook, i) => {
        if (removeId === remBook.Id) {
          book.splice(i, 1);
          this.displayBooks();
          this.saveToLocalStorage();
        }
        return true;
      });
      return filter;
    }

    //   // Save to local storage
    saveToLocalStorage=() => {
      localStorage.setItem('books', JSON.stringify(this.books));
    }
}

export default Books;