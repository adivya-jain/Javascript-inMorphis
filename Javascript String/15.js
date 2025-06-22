
console.log(humanize_format(1));  
console.log(humanize_format(8));  
console.log(humanize_format(301));  
console.log(humanize_format(402));  
function humanize_format(num)
{
   let unit = num%10;
   let str = num.toString()
   if(unit == 1){
    return str + "st"
   }else if(unit == 2)
   {
    return str + "nd"
   }
   else if(unit == 3){
    return str + "rd"
   }
   else{
    return str + "th"
   }
}