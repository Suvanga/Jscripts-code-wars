function arrayDiff(a, b) {
    let anew = [];
    const aL = a;
    const bl = b;

    if (aL.length === 0) {
        return a;
    }
    if (bl.length === 0) {
        return a;
    }

    for (let i = 0; i < aL.length; i++) {
        let found = false;

        for (let j = 0; j < bl.length; j++) {
            if (aL[i] === bl[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            anew.push(aL[i]);
        }
    }
    
return anew;
}

/*
*alternative method is 
function array_diff(a, b) 
{
  return a.filter(e => !b.includes(e));
}
*/