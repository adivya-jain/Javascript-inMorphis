function countWords(str) {
    const cleaned = str
      .replace(/^\s+|\s+$/g, '')       // trim
      .replace(/\s{2,}/g, ' ')         // multiple spaces -> one
      .replace(/\n\s*/g, ' ');         // newline + optional spaces -> space
  
    return cleaned ? cleaned.split(' ').length : 0;
  }
  
  // Test
  console.log(countWords("   Hello   world!\n This  is  JS.  ")); // 5
  