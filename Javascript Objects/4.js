var library = [  
   { 
       author: 'Bill Gates', 
       title: 'The Road Ahead', 
       readingStatus: true 
   }, 
   { 
       author: 'Steve Jobs', 
       title: 'Walter Isaacson', 
       readingStatus: true 
   }, 
   { 
       author: 'Suzanne Collins', 
       title:  'Mockingjay: The Final Book of The Hunger Games',  
       readingStatus: false 
   }];


   console.log(library.map((lib)=>{
    return `${lib.author} titled ${lib.title} whose readingStatus is ${lib.readingStatus}`
   }))