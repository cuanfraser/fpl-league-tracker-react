import { BACKEND_URL } from '../constants.js';

export const findLeagueById = (id) =>
    fetch(`${BACKEND_URL}/leagues/${id}`)
        .then((response) => response.json())
        .catch((err) => console.log(`Error fetching league: ${err.message}`));
