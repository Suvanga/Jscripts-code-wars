/*
return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''

*/

function list(names)
{
if(names.length===1){
return names[0].name
}
let finalString ='';
  names.forEach((arrItem,arrIndex)=>
{
if(arrIndex===names.length-1){
finalString = finalString + arrItem.name
}
else if(arrIndex === names.length-2){
finalString  = finalString + arrItem.name+' & ';
}
else if(arrIndex < names.length-2){
finalString = finalString +arrItem.name+ ", "
}

})
return finalString;
}