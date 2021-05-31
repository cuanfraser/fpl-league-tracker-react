import { FPL_API_ENTRY_URL } from "../constants.js";

export const findTeamById = (id) =>
  fetch(`${FPL_API_ENTRY_URL}/${id}`).then((response) => response.json());
