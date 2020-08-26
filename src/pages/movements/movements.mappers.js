export const mapMovementsFromApiToViewModel = movements => {
  return movements.map(movement => mapMovementFromApiToViewModel(movement));
};

const mapMovementFromApiToViewModel = movement => {
  return {
    id: movement.id,
    description: movement.description,
    amount: `${movement.amount}€`,
    balance:`${movement.balance}€`,
    transaction : movement.transaction,
    realTransaction: movement.realTransaction,



  };
};

// "id": "1",
// "description": "Nómina noviembre",
// "amount": 900,
// "balance": 1490,
// "transaction": "2019-12-09T21:30:00",
// "realTransaction": "2019-12-09T21:30:00",
// "accountId": "1"
