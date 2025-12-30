import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
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