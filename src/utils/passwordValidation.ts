import {IPassword} from "../interface";
import {regexp} from '../constants/regexp'
export const passwordValidation = (fields: IPassword,setState: Function) => {
    const { password } = fields
    const { fullValidation, onlyLettersAndSymbols,onlyLettersAndDigits,onlyDigitsAndSymbols } = regexp

    const lettersSymbolsDigits = fullValidation.test(password)
    const lettersAndSymbols = onlyLettersAndSymbols.test(password)
    const lettersAndDigits = onlyLettersAndDigits.test(password)
    const digitsAndSymbols = onlyDigitsAndSymbols.test(password)

    if(password.length >= 8) {
        setState({...fields, easy: 'red', medium:'gray', hard: 'gray' })

    if(lettersAndDigits || lettersAndSymbols || digitsAndSymbols) {
            setState({...fields, easy: 'medium', medium: 'medium', hard: 'gray'})
        }

    if(lettersSymbolsDigits) {
            setState({...fields, easy: 'green', medium: 'green', hard: 'green'})
        }
    }

    if(password.length < 8 && password.length > 0) {
        setState({...fields, easy: 'red', medium: 'red', hard: 'red'})
    }
    if(password.length === 0) {
        setState({...fields, easy: 'gray', medium: 'gray', hard: 'gray'})
    }
}