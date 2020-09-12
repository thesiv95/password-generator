class Controller {
    setQuantityValue = () => {
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
        console.log('gener func')
    }
}

const controller = new Controller();

doc.addEventListener('DOMContentLoaded', () => controller.generateNewPassword());

view.inputSymbolQuantity.addEventListener('change', () => controller.setQuantityValue());
view.btnOutputCopy.addEventListener('click', () => controller.copyToClipboard());