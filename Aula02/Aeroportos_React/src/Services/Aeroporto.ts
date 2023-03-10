import axios from "axios";

export async function getTodosAeroportos() {
  const aeroportos = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/aeroporto');
  return aeroportos;
}