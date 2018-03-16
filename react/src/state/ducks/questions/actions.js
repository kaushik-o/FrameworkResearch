import * as types from "./types";
import axios from 'axios'

const url = 'http://localhost:8000/static/questions.json';

export const getQuestions = () => {
  const request = axios.get(url);
  return { type: types.GET_QUESTIONS, payload: request };
}
