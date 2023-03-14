import { useEffect, useState } from "react";
import { VooModel } from "../Model/VooModel";
import { deleteVoo, getTodosVoos } from "../Services/Voo";



export function Voo() {
  const [ voos, setVoos ] = useState<VooModel[]>();

  const loadData = async () => {
    const voo: VooModel[] = await getTodosVoos();
    setVoos(voo);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeleteVoo = (id: number) => {
    deleteVoo(id).then(() => loadData());
  }

  return (
    <div >
      <div className="aero">
      <span >Voos</span>
      <a href="/voo-criar">Criar Voo</a>
      </div>
      <div className="tabela">
      <table>
        <thead>
          <tr>
          <td>Código</td>
          <td>Companhia Aerea</td>
          <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {
            voos?.map(voo => {
              return (
                <tr>
                  <td>{voo.id}</td>
                  <td>{voo.nome}</td>
                  <td className="acoes">
                    <a href={`/voo/${voo.id}`}>Ver</a>
                    <button onClick={() => onClickDeleteVoo(voo.id||0)}>X</button>
                    <a href={`/voo-alterar/${voo.id}`}>Editar</a>
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