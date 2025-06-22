// . Write a JavaScript program to find the most frequent item of an array.  
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
// Sample Output : a ( 5 times ) 

function find_most_frequent_item_of_an_array(arr) {
    let count = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        count[item] = (count[item] || 0) + 1;

        if (count[item] > maxCount) {
            maxCount = count[item];
            mostFrequent = item;
        }
    }

    return `${mostFrequent} ( ${maxCount} times )`;
}


console.log(find_most_frequent_item_of_an_array([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));

