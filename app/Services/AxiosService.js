export const api = axios.create({

  baseURL: 'https://opentdb.com/api.php?amount=1&category=18&type=multiple',
  timeout: 5555

})