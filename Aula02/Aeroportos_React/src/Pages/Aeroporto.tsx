import axios from "axios"
import { useEffect, useState } from "react";
import { AeroportoModel } from "../Model/AeroportosModel";
import { deleteAeroporto, getTodosAeroportos } from "../Services/Aeroporto"



export function Aeroporto() {
  const [ aeroportos, setAeroportos ] = useState<AeroportoModel[]>();

  const loadData = async () => {
    const aroporto: AeroportoModel[] = await getTodosAeroportos();
    setAeroportos(aroporto);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteAeroporto = (id: number) => {
    deleteAeroporto(id).then(() => loadData());
  }

  return (
    <div >
      <div className="aero">
      <span >Aeroportos</span>
      <a href="/aeroporto-criar">Criar aeroporto</a>
      </div>
      <div className="tabela">
      <table>
        <thead>
          <tr>
          <td>Código</td>
          <td>Nome</td>
          <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {
            aeroportos?.map(aeroporto => {
              return (
                <tr>
                  <td>{aeroporto.id}</td>
                  <td>{aeroporto.nome}</td>
                  <td className="acoes">
                    <a href={`/aeroporto/${aeroporto.id}`}>Ver</a>
                    <button onClick={() => onClickDeleteAeroporto(aeroporto.id||0)}>X</button>
                    <a href={`/aeroporto-alterar/${aeroporto.id}`}>Editar</a>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}