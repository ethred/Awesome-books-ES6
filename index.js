import Books from './modules/input.js';
import displayDateTime from './modules/display_date.js';
import Navigater from './modules/navigater.js';

const bookcreate = new Books();
const lists = document.getElementById('Lists');
lists.addEventListener('click', (e) => {
  e.preventDefault();
  const display = new Navigater();
  display.lists();
});

const addBooks = document.getElementById('AddBooks');
addBooks.addEventListener('click', (e) => {
  e.preventDefault();
  const display = new Navigater();
  display.addNewBook();
});

const contactus = document.getElementById('contactuss');
contactus.addEventListener('click', (e) => {
  e.preventDefault();
  const display = new Navigater();
  display.contactus();
});

const addnewBooks = document.getElementById('addbtn');
addnewBooks.addEventListener('click', () => {
  const display = new Books();
  display.createObject();
  display.addBooks();
});

bookcreate.createObject();
bookcreate.displayBooks();
displayDateTime();

const removeButtons = document.getElementsByClassName('remove-btn');
for (let i = 0; i < removeButtons.length; i += 1) {
  const removeButton = removeButtons[i];
  removeButton.addEventListener('click', (event) => {
    const { index } = event.target.dataset;
    const indexval = parseInt(index, 10);
    const data = new Books();
    data.createObject();
    data.removeBooks(indexval + 1);
  });
}
