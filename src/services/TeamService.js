import { BACKEND_URL } from '../constants.js';

export const findTeamById = (id) =>
    fetch(`${BACKEND_URL}/teams/${id}`)
        .then((response) => response.json())
        .catch((err) => console.log(`Error fetching team: ${err.message}`));
