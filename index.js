function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books") //fetch books from api
    .then((resp) => resp.json()) //then take one callback func, gets built-in json method, converts resp into plain text
    .then((json) => renderBooks(json)) //second then method takes parsed JSON object into the next function parameter, which alt we could call 'data'
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

