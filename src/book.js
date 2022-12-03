const { assert } = require("chai");

function createTitle(bookIdea) {
  return `The ${bookIdea}`
};

function buildMainCharacter(name, age, pronouns) {
  var character =  {
    name,
    age,
    pronouns  
  };
  return character
};

function saveReview(newReview, array) {
  if (!array.includes(newReview))
    return array.push(newReview);
  }
  // **check for understanding
 
function calculatePageCount(pages) {
    return pages.length * 20
}

function writeBook(title, mainCharacter, genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book
}

function editBook(title) {
  return title.pageCount = title.pageCount * .75
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}