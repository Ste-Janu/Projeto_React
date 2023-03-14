import axios from "axios";
import { VooModel } from "../Model/VooModel";

export async function getTodosVoos(): Promise<VooModel[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/voo');
  return data;
}

export async function getVoo(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/voo/${id}`);
}

export async function postVoo(dados: VooModel) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/voo', dados);
}

export function deleteVoo(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/voo/${id}`);
}

export async function alterarVoo(dados: VooModel ) {
  return  axios.create({ headers: { 'Content-Type': 'application/json' }})
    .put(`http://localhost:8000/voo/${dados.id}`, dados);
}