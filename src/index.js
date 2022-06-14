import './sass/main.scss';
const BASE_URL = 'http://localhost:3000/books/';
const newBook = {
  title: 'Man on The Moon',
  author: 'Me',
  ganres: ['wtf'],
  rating: 8.5,
};
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBook),
};

function postBook() {
  return fetch(BASE_URL, options).then(response => response.json());
}

// postBook()
//   .then(console.log)
//     .catch(error => console.log(error));

const bookId = 'MLdtq4s';
const newBook2 = {
  author: 'Nobody',
};

const options2 = {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newBook2),
};

function patchBook(bookId) {
  return fetch(`${BASE_URL}/${bookId}`, options2).then(response => response.json());
}

// patchBook(bookId)
//   .then(console.log)
//   .catch(error => console.log(error));

const bookId2 = 'MLdtq4s';

function deleteBook(bookId2) {
  return fetch(`${BASE_URL}/${bookId2}`, { method: 'DELETE' }).then(response => response.json());
}

deleteBook(bookId2).then(console.log('book deleted'));
