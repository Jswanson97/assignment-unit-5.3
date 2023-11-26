console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const obj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
  };
collection.push (obj);
return obj;
}
console.log(addToCollection(myCollection, "Circles", "Mac Miller", 2020));
console.log(addToCollection(myCollection, "Blue World", "Mac Miller", 2020));
console.log(addToCollection(myCollection, "Something Real", "Post Malone", 2023));
console.log(addToCollection(myCollection, "Forgot my name", "Barefoot Surrender", 2019));
console.log(addToCollection(myCollection, "Famous", "Kanye West", 2018));
console.log(addToCollection(myCollection, "Stick Season", "Noah Kahn", 2021));

console.log(myCollection);

function showCollection(collection) {
  collection.forEach(element => {
    console.log(element.title + ' by ' + element.artist + ', published in ' + element.yearPublished);
  });
}
showCollection(myCollection);

function findByArtist(collection, artist){
  var results = [];
  results = collection.filter((element) => element.artist == artist);
  return results;
}
console.log ('Finding music by Mac Miller ');
console.log (findByArtist(myCollection, 'Mac Miller'));
console.log ('Finding music by Drake ');
console.log (findByArtist(myCollection, 'Drake'));










// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
