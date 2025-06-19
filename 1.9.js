const date = new Date();
const christmas = new Date(date.getFullYear(), 11, 25);


if(date.getMonth() === 11 && date.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
}
one_day = 24 * 60 * 60 * 1000;
var daysleft = Math.ceil((christmas.getTime() - date.getTime()) / one_day);

console.log(`There are ${daysleft} days left until Christmas.`);