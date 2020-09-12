const view = new View();
class Model {
    /* Values from user form */
    symbolsQuantity = view.inputSymbolQuantity.value;
    useSpecialSymbols = view.inputSymbols.checked;
    useNumbers = view.inputNumbers.checked;
    useLettersUppercase = view.inputUppercase.checked;
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
        let getters = [];
        getters.push(this.getLetter()); // at least lowercase letters
        // we check if we need to use another getter functions, depends on type of symbol that we want to include into password
        if (this.useSpecialSymbols) getters.push(this.getSpecialSymbol());
        if (this.useNumbers) getters.push(this.getNumber());
        if (this.useLettersUppercase) getters.push(this.getLetterUppercase());
        // if no another getters used, we just run the first getter
        return getters.length > 1 ? getters[Math.floor(Math.random() * getters.length)] : getters[0];
    };
    /* Main function generatePassword() */
    generatePassword = () => {
        let result = '';        
        let passwordLength = this.symbolsQuantity;

        for (let i = 0; i < passwordLength; i++){
            let symbol = this.generateOneSymbol();
            result += symbol;
        }
    
        return result;
    }
};


