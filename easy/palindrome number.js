var isPalindrome = function(x) {
    let xString = String(x)
    let xArr = xString.split('')


    let xArrRev = [...xArr].reverse()



    for (i = 0; i < xString.length; i++) {
        if (xArr[i] === xArrRev[i]) {
            continue
        }

        else {
            return false
        }
    }
    
    return true
    
};


console.log(isPalindrome(-196))