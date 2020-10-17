let myLibrary = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read))
}

function drawBooksToScreen() {
	myLibrary.forEach(item => {
		let book = document.createElement('div')
		book.innerHTML = 
			`<p class="card-text">${item.title}</p>` +
			`<p class="card-text">${item.author}</p>` +
			`<p class="card-text">${item.pages} Pages</p>`
		bookList.append(book)
	})
}

const bookList = document.querySelector('.books')
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false)
addBookToLibrary('Gardens of the Moon', 'S. Erikson', 657, true)
drawBooksToScreen()