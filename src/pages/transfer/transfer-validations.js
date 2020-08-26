import { Validators, createFormValidation } from '@lemoncode/fonk'
import { laterDate } from '@lemoncode/fonk-later-date-validator';


const validationSchema = {
  field: {
    account: [Validators.required],
    iban: [
      {
       validator:  Validators.pattern,
       customArgs: {pattern:/([ES]{2}\d{2})(\d{4})(\d{4})(\d{2})(\d{10})/ },
      }
    ],
    name:[Validators.required],
    amount:[
      {
        validator : Validators.pattern,
        customArgs: {pattern: `^[0-9]*$`}
      }
    ],
    concept:[Validators.required],
    day:[Validators.required],
    month:[Validators.required],
    year: [
      {
       validator:  Validators.pattern,
       customArgs: {pattern:/^(202)/},
      }
    ],


    notes: [Validators.required],
    email:[Validators.email],
  },
};

export const formValidation = createFormValidation(validationSchema);
