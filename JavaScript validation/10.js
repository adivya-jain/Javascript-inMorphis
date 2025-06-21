function areSameType(value1, value2) {
    if (typeof value1 === 'object' && typeof value2 === 'object') {
        return Object.prototype.toString.call(value1) === Object.prototype.toString.call(value2);
    }

    return typeof value1 === typeof value2;
}

console.log(areSameType([],{}))