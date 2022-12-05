function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: { 
      fantasy: [], 
      fiction: [],
      nonFiction: []
    }
  }
  return library
}

function addBook(library, book) {
  return library.shelves[book.genre].unshift(book)
}

function checkoutBook(library, book, genre) {
  var findShelf = library['shelves'][genre]
    findShelf.splice(0, 1);
      return `You have now checked out ${book} from the ${library.name}`
}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
