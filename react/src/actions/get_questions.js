import { GET_QUESTIONS } from './const';
import axios from 'axios'

const url = 'http://localhost:8000/static/questions.json';

function action() {
  const request = axios.get(url);
  return { type: GET_QUESTIONS, payload: request };
}

module.exports = action;
