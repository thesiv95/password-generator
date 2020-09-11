
class PasswordGenerator {
    /* Values from user form */
    symbolsQuantity = 5;
    useSpecialSymbols = false;
    useNumbers = false;
    useLettersUppercase = false;
    /* Global symbol strings (all avaliable symbols) */
    lettersString = 'abcdefghijklmnopqrstuvwxyz';
    specialSymbolsString = '!@#$%^()-+=';
    numbersString = '0123456789';
    lettersUppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    /* Extra functions-getters */
    getLetter = () => {
        return this.lettersString[Math.floor(Math.random() * this.lettersString.length)];
    };
    getSpecialSymbol = () => {
        return this.specialSymbolsString[Math.floor(Math.random() * this.specialSymbolsString.length)];
    };
    getNumber = () => {
        return this.numbersString[Math.floor(Math.random() * this.numbersString.length)];
    };
    getLetterUppercase = () => {
        return this.lettersUppercaseString[Math.floor(Math.random() * this.lettersUppercaseString.length)];
    };
    /* Function generateOneSymbol() randomly activates one of the 4 getter functions above */
    generateOneSymbol = () => {
        let getters = new Array(4);
        getters.push(this.getLetter()); // at least lowercase letters
        // we check if we need to use another getter functions, depends on type of symbol that we want to include into password
        if (this.useSpecialSymbols) getters.push(this.getSpecialSymbol());
        if (this.useNumbers) getters.push(this.getNumber());
        if (this.useLettersUppercase) getters.push(this.getLetterUppercase());
        
        return getters[Math.floor(Math.random() * getters.length)];
    };
    /* Main function generatePassword() */
    generatePassword = () => {
        let result = '';        
        let passwordLength = this.symbolsQuantity;
       
        console.log(passwordLength);

        for (let i = 0; i < passwordLength; i++){
            let symbol = this.generateOneSymbol();
            result += symbol;
        }
    
        return result;
    }
};


