import axios from 'axios';

const fetcher = async function*(repo) {
  const repository = repo || 'tre-se';
  while (true) {
    const url = process.env.API_URL || 'http://localhost:4000/pr';
    const result = await axios(`${url}/${repository}`);
    yield result.data;
  }
};

export default fetcher;
