/* Extra functions-getters */

const getLetter = (lettersString) => {
    return lettersString[Math.floor(Math.random() * lettersString.length)];
}

const getSpecialSymbol = (specialSymbolsString) => {
    return specialSymbolsString[Math.floor(Math.random() * specialSymbolsString.length)];
}

const getLetterUppercase = (lettersUppercaseString) => {
    return lettersUppercaseString[Math.floor(Math.random() * lettersUppercaseString.length)];
}

const getNumber = (numbersString) => {
    return numbersString[Math.floor(Math.random() * numbersString.length)];
}

// generateOneSymbol randomly activates getter functions above
const generateOneSymbol = (getters) => {
    
}

/*
    Main function generatePassword(params), where "params" is an array:
    1. symbol quantity (number);
    2. has special symbols (boolean);
    3. has numbers (boolean);
    4. has uppercase letters (boolean).
*/

const generatePassword = (params) => {

    let result = '';

    let lettersString = 'abcdefghijklmnopqrstuvwxyz'; // main symbols
    let specialSymbolsString = '!@#$%^()-+=';
    let numbersString = '0123456789';
    let lettersUppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   
    let passwordLength = params[0];

    // we check if we need to use getter functions, depends on type of symbol that we want to include into password
    let useGetterFunctions = [];

    // if (params[1]) stringsArray.push(specialSymbolsString);
    // if (params[2]) stringsArray.push(numbersString);
    // if (params[3]) stringsArray.push(lettersUppercaseString);


    for (let i = 0; i < passwordLength; i++){
        //result += symbolsString[randomFromRange(rangeStartCoefficient, rangeEndCoefficient)];
    }


    return result;
};