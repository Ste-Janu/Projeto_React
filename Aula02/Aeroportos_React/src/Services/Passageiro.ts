import axios from "axios";
import { PassageiroModel } from "../Model/PassageiroModel";

export async function getTodosPassageiros(): Promise<PassageiroModel[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/passageiro');
  return data;
}

export async function getPassageiro(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/passageiro/${id}`);
}

export async function postPassageiro(dados: PassageiroModel) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/passageiro', dados);
}

export function deletePassageiro(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/passageiro/${id}`);
}

export async function alterarPassageiro(dados: PassageiroModel ) {
  return  axios.create({ headers: { 'Content-Type': 'application/json' }})
    .put(`http://localhost:8000/passageiro/${dados.id}`, dados);
}