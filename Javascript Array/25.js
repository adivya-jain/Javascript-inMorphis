function sortByTitle(arr) {
  return arr.sort(function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
}
var library = [  
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}, 
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264}, 
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245} 
]; 

const sortedLibrary = sortByTitle(library);
console.log(sortedLibrary);