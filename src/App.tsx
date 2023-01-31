import React, {useEffect, useState} from 'react';
import './App.css';
import { IPassword } from './interface';
import { passwordValidation } from "./utils/passwordValidation";
export const App = () => {

  const [fields, setFields] = useState<IPassword>({
      password:'',
      easy: '',
      medium: '',
      hard: ''
  })

  useEffect(() => {
      passwordValidation(fields,setFields)
  },[fields.password.length])

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

