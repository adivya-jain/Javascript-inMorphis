function insert(str, insertStr = '', position = 1) {
    if (position < 0) position = 0;
    if (position > str.length) position = str.length;

    return str.slice(0, position) + insertStr + str.slice(position);
}


console.log(insert('We are doing some exercises.'));

console.log(insert('We are doing some exercises.', 'JavaScript '));

console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
