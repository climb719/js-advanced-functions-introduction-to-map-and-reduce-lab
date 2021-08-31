function mapToNegativize(sourceArray) {
   return sourceArray.map(e => e * -1);
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(e => e);
}

function mapToDouble(sourceArray) {
    return sourceArray.map(e => e * 2);
}

function mapToSquare(sourceArray) {
   return sourceArray.map(e => e * e );
}

function reduceToTotal(sourceArray, startingPoint) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (! startingPoint) {
        return sourceArray.reduce(reducer)
    }
    else return startingPoint + sourceArray.reduce(reducer)
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) {
            return false
        }
    }
    return true 
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!!sourceArray[i]) {
            return true
        }
    }
    return false
}


