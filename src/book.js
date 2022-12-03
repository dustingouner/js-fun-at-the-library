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
    // why does changing the variable name to characterDescription change the color of the syntax
  
// function saveReview(review1) {
//   var reviews = []
//   for(var i = 0; i < reviews.length; i++){
//     reviews.unshift(review1);
//   }
  
// };


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