class Books {
  createObject() {
    this.books = [];
    if (localStorage.getItem('books') != null) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

    displayBooks=() => {
      const cretedbooks = this.books;
      let book = '';
      let displayType = 1;
      for (let i = 0; i < cretedbooks.length; i += 1) {
        document.getElementById('display').innerHTML = `
        <div class="display" id="display"></div>`;
        book += `<div id='books-container${displayType}'>`;
        book += `<div id='book-author'><p id="booktext">"${cretedbooks[i].title}" by ${cretedbooks[i].author}</p></div>`;
        book += `<button class='remove-btn' id='remove-btn' data-index="${i}">Remove</button></div>`;
        if (displayType === 1) {
          displayType = 2;
        } else {
          displayType = 1;
        }
      }
      document.getElementById('display').innerHTML = book;
    }

    addBooks=() => {
      const cretedbooks = this.books;
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title !== '' && author !== '') {
        const bookId = cretedbooks.length + 1;
        cretedbooks.push({ Id: bookId, title, author });
        this.displayBooks();
        document.querySelector('form').reset();
        this.saveToLocalStorage();
      }
    }

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