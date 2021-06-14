import { BACKEND_URL } from '../constants.js';

export const findLeagueById = (id) =>
    fetch(`${BACKEND_URL}/leagues/${id}`).then((response) => response.json());
