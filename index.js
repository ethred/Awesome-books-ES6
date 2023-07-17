import Books from './modules/input.js';
import displayDateTime from './modules/display_date.js';
import Navigater from './modules/navigater.js';

const a = new Books();
const lists = document.getElementById('Lists');
lists.addEventListener('click', (e) => {
  e.preventDefault();
  const display = new Navigater();
  display.lists();
});

const aBooks = document.getElementById('AddBooks');
aBooks.addEventListener('click', (e) => {
  e.preventDefault();
  const display = new Navigater();
  display.addNewBook();
  display.saveToLocalStorage();
  window.location.reload();
});

const contactus = document.getElementById('contactuss');
contactus.addEventListener('click', (e) => {
  e.preventDefault();
  const display = new Navigater();
  display.contactus();
});

const formbut = document.getElementById('addbtn');
formbut.addEventListener('click', () => {
  const display = new Books();
  display.createObject();
  display.addBooks();
});

// let a = new Books();
a.createObject();
a.displayBooks();
displayDateTime();

const removeButtons = document.getElementsByClassName('remove-btn');
for (let i = 0; i <= removeButtons.length; i += 1) {
  const removeButton = removeButtons[i];
  removeButton.addEventListener('click', (event) => {
    const { index } = event.target.dataset;
    const indexval = parseInt(index, 10);
    const data = new Books();
    data.createObject();
    data.removeBooks(indexval + 1);
    window.location.reload();
  });
}
