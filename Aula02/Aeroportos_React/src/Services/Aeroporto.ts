import axios from "axios";
import { AeroportoModel } from "../Model/AeroportosModel";

export async function getTodosAeroportos(): Promise<AeroportoModel[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/aeroporto');
  return data;
}

export async function getAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/aeroporto/${id}`);
}

export async function postAeroporto(dados: AeroportoModel) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/aeroporto', dados);
}

export function deleteAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/aeroporto/${id}`);
}

export async function alterarAeroporto(dados: AeroportoModel ) {
  return  axios.create({ headers: { 'Content-Type': 'application/json' }})
    .put(`http://localhost:8000/aeroporto/${dados.id}`, dados);
}
