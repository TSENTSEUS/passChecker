import {IPassword} from "../interface";
import {regexp} from '../constants/regexp'
export const passwordValidation = (fields: IPassword,setState: Function) => {
    const { password } = fields
    const { fullValidation, onlyLettersAndSymbols,onlyLettersAndDigits,onlyDigitsAndSymbols } = regexp

    const lettersSymbolsDigits = fullValidation.test(password)
    const lettersAndSymbols = onlyLettersAndSymbols.test(password)
    const lettersAndDigits = onlyLettersAndDigits.test(password)
    const digitsAndSymbols = onlyDigitsAndSymbols.test(password)

    const getValue = (level: "easy" | "medium" | "hard") => {
        if(!password.length) {
            return "gray"
        } else if (password.length < 8) {
            return "red"
        } else if (lettersSymbolsDigits) {
            return "green"
        } else if (lettersAndDigits || lettersAndSymbols || digitsAndSymbols) {
            return level === "hard" ? "gray" : "medium";
        } else {
            return level === "easy" ? "red" : "gray";
        }
    }
    setState(() => ({
        password,
        easy: getValue("easy"),
        medium: getValue("medium"),
        hard: getValue("hard")
    }));
}