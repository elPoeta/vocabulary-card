import Http from './http.js';

const run = async () => {
  const http = new Http();

  const data = await http.get('hello');

  console.log('DATA ', data)

}

run();
