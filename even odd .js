/*

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:
*/
function capitalize(s)
{
  let newE = ''
  let newO = ''
  
let arrayinuse =  s.split('');

arrayinuse.forEach((aitem, aIndex)=>{

if(aIndex%2===0)
{
newE += aitem.toUpperCase();
newO +=  aitem
}
else
{  
 newE += aitem 
 newO +=  aitem.toUpperCase();
}
})
return [newE,newO];
};