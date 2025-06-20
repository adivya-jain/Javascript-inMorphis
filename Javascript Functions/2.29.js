function getFunctionName(fn) {
    return fn.name || '(anonymous)';
}

const adi = function yoyo(){}
const anon = function () {};
console.log(getFunctionName(anon));
console.log(getFunctionName(()=>{}));
console.log(getFunctionName(adi));
