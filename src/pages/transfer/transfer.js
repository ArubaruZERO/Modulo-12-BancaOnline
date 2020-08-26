import {
  onUpdateField,
  onSubmitForm,
  onSetError,
  onSetFormErrors,
} from '../../common/helpers';
import {formValidation} from "./transfer-validations";
import {setAccountOptions} from "./transfer.helpers";
import{history} from "../../core/router";
import {getAccountList, insertTransfer} from "./transfer.api";
import { mapTransferFromViewModelToApi } from './transfer.mapper';


let transfer={
  account: "",
  iban : "",
  name: "",
  amount:"",
  concept:"",
  notes: "",
  year: "",
  day:"",
  month: "",
  date: "",
  email:"",

}


const params = history.getParams();


getAccountList().then(apiAccount => {
    setAccountOptions(apiAccount, params.id)
  });


//SELECT ACCOUNT-----------------------------


//recoger datos
onUpdateField("select-account", event => {
  const value = event.target.value;
  transfer= {
    ...transfer,
    account: value
  };

formValidation.validateField("select-account", transfer.account).then(result => {
  onSetError("select-account", result);
})
})


//IBAN-----------------------------
onUpdateField("iban", event => {
  const value = event.target.value;
  transfer= {
    ...transfer,
    iban: value
  };

  formValidation.validateField("iban", transfer.iban).then(result => {
    onSetError("iban", result);
  })
})
//BENEFICIARY-----------------------------

onUpdateField("name", event=> {
  const value= event.target.value;
  transfer={
    ...transfer,
    name: value
  };

  formValidation.validateField("name", transfer.name).then(result => {
    onSetError("name" , result);
  })


})

//AMOUNT---------------------------------

onUpdateField("amount", event=> {
  const value = event.target.value;
  transfer= {
    ...transfer,
    amount: value
  };

  formValidation.validateField("amount", transfer.amount).then(result => {
    onSetError("amount", result)
  })
})

//CONCEPT---------------------------------

onUpdateField("concept", event =>{
  const value = event.target.value;
  transfer={
    ...transfer,
    concept: value
  }
  formValidation.validateField("concept", transfer.concept).then(result => {
    onSetError("concept",result)
  })
})


//NOTES----------------------------

onUpdateField("notes", event =>{
  const value = event.target.value;
  transfer={
    ...transfer,
    notes: value
  }

  formValidation.validateField("notes", transfer.notes).then(result => {
    onSetError("notes",result)
  })
})

//*------------------------------------
//*-----------------------------------


//DAY------------------------------

onUpdateField("day", event =>{
  const value = (event.target.value);
  transfer={
    ...transfer,
    day: value,
    date: `${transfer.year}-${transfer.month}-${transfer.day}`
  }
  formValidation.validateField("day", transfer.day).then(result => {
    onSetError("day",result)
  })
})

//Month----------------------------------
onUpdateField("month", event =>{
  const value =( event.target.value);
  transfer={
    ...transfer,
    month: value,
    date: `${transfer.year}-${transfer.month}-${transfer.day}`
  }
  formValidation.validateField("month", transfer.month).then(result => {
    onSetError("month",result)
  })
})

//YEAR--------------------------------
onUpdateField("year", event =>{
  const value = ( event.target.value);
  transfer={
    ...transfer,
    year: value,
    date: `${transfer.year}-${transfer.month}-${transfer.day}`

  }
  formValidation.validateField("year", transfer.year).then(result => {
    onSetError("year",result)
  })
})

//EMail--------------------------------

onUpdateField("email", event =>{
  const value = event.target.value;
  transfer={
    ...transfer,
    email: value
  }
  formValidation.validateField("email", transfer.email).then(result => {
    onSetError("email",result)
  })
})




const onTransfer= () => {
  const apiTransfer = mapTransferFromViewModelToApi(transfer);
  return insertTransfer(apiTransfer)
}

// onSubmitForm("transfer-button", () => {
//   formValidation.validateForm(transfer).then(result => {
//     onSetFormErrors(result);

//   })
// })

onSubmitForm("transfer-button", () => {
  formValidation.validateForm(transfer).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      onTransfer().then(apiTransfer=> {
        history.back
      })

    }
  })

})
