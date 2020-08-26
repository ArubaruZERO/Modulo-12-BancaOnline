export const mapTransferFromViewModelToApi = transfer =>{
  return{
    account: transfer.account ,
    iban: transfer.iban,
    name:transfer.name,
    amount:`${transfer.amount}-€`,
    concept:transfer.concept,
    notes:transfer.notes,
    year:transfer.year,
    day:transfer.day,
    month:transfer.month,
    year:transfer.year,
    date:transfer.date ,
    email:transfer.email,
  }
}
