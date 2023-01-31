import {IPassword} from "../interface";
import {type} from "os";

export const passwordValidation = (fields: IPassword,setState: Function) => {
    const { password } = fields
    const lettersSymbolsDigits= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_)/.test(password)
    const lettersAndSymbols = /(?=.*[a-z])(?=.*\W|_)/.test(password)
    const lettersAndDigits = /(?=.*\d)(?=.*[a-z])/.test(password)
    const digitsAndSymbols = /(?=.*\d)(?=.*\W|_)/.test(password)

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