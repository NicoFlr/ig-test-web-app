import httpService from './httpService';

const BASE_SUGGESTIONS_URL = '/suggestions';

export async function getSuggestions(input) {
  return httpService.post(`${BASE_SUGGESTIONS_URL}?suggestion=${input}`);
}