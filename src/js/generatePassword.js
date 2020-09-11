
const PasswordGenerator = {
    /* Values from user form */
    symbolsQuantity: 5,
    useSpecialSymbols: true,
    useNumbers: true,
    useLettersUppercase: true,
    /* Global symbol strings (all avaliable symbols) */
    lettersString: 'abcdefghijklmnopqrstuvwxyz',
    specialSymbolsString: '!@#$%^()-+=',
    numbersString: '0123456789',
    lettersUppercaseString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    /* Extra functions-getters */
    getLetter: () => {
        return this.lettersString[Math.floor(Math.random() * this.lettersString.length)];
    },
    getSpecialSymbol: () => {
        return this.specialSymbolsString[Math.floor(Math.random() * this.specialSymbolsString.length)];
    },
    getNumber: () => {
        return this.numbersString[Math.floor(Math.random() * this.numbersString.length)];
    },
    getLetterUppercase: () => {
        return this.lettersUppercaseString[Math.floor(Math.random() * this.lettersUppercaseString.length)];
    },
    // generateOneSymbol randomly activates one of the 4 getter functions above
    generateOneSymbol: () => {
        let getters = new Array(4);
        getters.push(getLetter()); // at least lowercase letters
        // we check if we need to use another getter functions, depends on type of symbol that we want to include into password
        if (this.useSpecialSymbols) getters.push(getSpecialSymbol());
        if (this.useNumbers) getters.push(getNumber());
        if (this.useLettersUppercase) getters.push(useLettersUppercase());
        
        return getters[Math.floor(Math.random() * getters.length)];
    },
    /*
        Main function generatePassword()
    */
    generatePassword: () => {
    
        let result = '';        
        let passwordLength = this.symbolsQuantity;
       
        for (let i = 0; i < passwordLength; i++){
            let symbol = this.generateOneSymbol();
            console.log(symbol);
            result += symbol;
        }
    
        return result;
    }
};


