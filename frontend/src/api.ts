import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export const createMatch = async (matchData: {
  players: string[];
  totalPoints: number;
  courtNumber: string
}) => {
  const response = await API.post('/matches/create', matchData)
  return response.data
}

export default API