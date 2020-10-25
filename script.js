var library = []

function Book(title, author, pages, read) {
	this.title = title
	this.author = author
	this.pages = pages
	this.read = read
}

function changeReadStatus(book) {

}

function updateScreen() {
  library.forEach()
}

const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
	e.preventDefault()
  new FormData(form)
  form.reset()
})

form.addEventListener('formdata', function(e) {
  var formData = e.formData

	for (var value of formData.entries()) {
		console.log(value)
		if (value[0] === 'bookTitle') {
			var title = value[1]
		} else if (value[0] === 'bookAuthor') {
			var author = value[1]
		} else if (value[0] === 'bookPages') {
			var pages = value[1]
		}
	}
  var book = new Book(title, author, pages, document.getElementById('bookRead').checked)
  library.push(book)
})