export const regexp = {
    fullValidation: /(?=.*\d)(?=.*[a-z])(?=.*\W|_)/,
    onlyLettersAndSymbols: /(?=.*[a-z])(?=.*\W|_)/,
    onlyLettersAndDigits: /(?=.*\d)(?=.*[a-z])/,
    onlyDigitsAndSymbols: /(?=.*\d)(?=.*\W|_)/
}