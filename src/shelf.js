function shelfBook(book, shelfName){
  if (shelfName.length < 3){
    return shelfName.unshift(book)
  }
}

function unshelfBook(book, shelfName){
  for (var i = 0; i < shelfName.length; i++) {
    if (book === shelfName[i].title) {
    return shelfName.splice(i, 1)
    }
  }
}

function listTitles(bookTitles){
  var title1 = []
  for (var i = 0; i < bookTitles.length; i++) {
    title1.push(bookTitles[i].title)
  }
    return title1.join(", ")
}

function searchShelf(shelf, title){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true
    }
  }
  return false
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};