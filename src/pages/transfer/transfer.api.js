import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/transfer`;

export const insertTransfer = transfer =>
  Axios.post(url, transfer).then(response => {
    return response.data;
  });

const urlAccount = `${process.env.BASE_API_URL}/account-list`

export const getAccountList = () =>
  Axios.get(urlAccount).then(response => {
    return response.data;
  });
