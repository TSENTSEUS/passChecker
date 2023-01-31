import React, {useEffect, useState} from 'react';
import './App.css';
interface IPassword {
    password: string,
    easy: string,
    medium: string,
    hard: string
}
function App() {

  const [fields, setFields] = useState<IPassword>({
      password:'',
      easy: 'false',
      medium: 'false',
      hard: 'false'
  })
  const password = fields.password

  const lettersSymbolsDigits= /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_)/.test(password)
  const lettersAndSymbols = /(?=.*[a-z])(?=.*\W|_)/.test(password)
  const lettersAndDigits = /(?=.*\d)(?=.*[a-z])/.test(password)
  const digitsAndSymbols = /(?=.*\d)(?=.*\W|_)/.test(password)

  useEffect(() => {

      if(password.length >= 8) {
          setFields({...fields, easy: 'red', medium:'gray', hard: 'gray' })

          if(lettersAndDigits || lettersAndSymbols || digitsAndSymbols) {
              setFields({...fields, easy: 'medium', medium: 'medium', hard: 'gray'})
          }
          if(lettersSymbolsDigits) {
              setFields({...fields, easy: 'green', medium: 'green', hard: 'green'})
          }
      }
      if(password.length < 8 && password.length > 0) {
          setFields({...fields, easy: 'red', medium: 'red', hard: 'red'})
      }
      if(password.length === 0) {
          setFields({...fields, easy: 'gray', medium: 'gray', hard: 'gray'})
      }
  },[password.length])
  return (
   <div className={'wrapper'}>
       <div className={'container'}>
     Only letters/digits/symbols - the password is easy;
     Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
     Has letters, symbols and numbers - the password is strong;

     The color of the sections will depend on the strength of the password:
     If the field is empty, all sections are gray;
     If the field has less than 8 characters, all sections are red;
     If the password is easy - the first section is red the rest are gray;
     If the password is medium - the first two sections are yellow the last one is gray;
     If the password is strong, all sections are green;

           <input
               value={fields.password}
               onChange={(e) => setFields({ ...fields, password: e.target.value})}
           />

           <div className={'verification-column'}>
               <div className={fields.easy}/>
               <div className={fields.medium}></div>
               <div className={fields.hard}></div>
           </div>

       </div>
   </div>
  );
}

export default App;
