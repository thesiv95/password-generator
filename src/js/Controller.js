class Controller {
    setQuantityDisplay = () => {
        view.inputSymbolQuantityDisplay.innerText = view.inputSymbolQuantity.value; 
    };
    copyToClipboard = () => {
        // code from W3C
        let outputField = view.outputField;
        outputField.select();
        outputField.setSelectionRange(0, 99999);
        doc.execCommand('copy');
    };
    generateNewPassword = () => {
        view.outputField.value = model.generatePassword();
    };
}

const model = new Model();
const controller = new Controller();



// We call main generation function when document is loaded or range input & checkboxes' state's changed
doc.addEventListener('DOMContentLoaded', () => controller.generateNewPassword());
view.inputSymbolQuantity.addEventListener('change', () => controller.setQuantityDisplay());
view.inputSymbolQuantity.addEventListener('change', () => controller.generateNewPassword());
view.inputSymbols.addEventListener('change', () => controller.generateNewPassword());
view.inputNumbers.addEventListener('change', () => controller.generateNewPassword());
view.inputUppercase.addEventListener('change', () => controller.generateNewPassword());

// Copy button
view.btnOutputCopy.addEventListener('click', () => controller.copyToClipboard());