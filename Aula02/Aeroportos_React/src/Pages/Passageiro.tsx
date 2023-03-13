import { useEffect, useState } from "react";
import { PassageiroModel } from "../Model/PassageiroModel";
import { deletePassageiro, getTodosPassageiros } from "../Services/Passageiro";



export function Passageiro() {
  const [ passageiros, setPassageiros ] = useState<PassageiroModel[]>();

  const loadData = async () => {
    const passageiro: PassageiroModel[] = await getTodosPassageiros();
    setPassageiros(passageiro);
  }

  useEffect(() => {
    loadData();
  }, []);

  const onClickDeletePassageiro = (id: number) => {
    deletePassageiro(id).then(() => loadData());
  }

  return (
    <div >
      <div className="aero">
      <span >Passageiros</span>
      <a href="/passageiro-criar">Add Passageiro</a>
      </div>
      <div className="tabela">
      <table>
        <thead>
          <tr>
          <td>Código</td>
          <td>Nome</td>
          <td>Cod. Voo</td>
          <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          {
            passageiros?.map(passageiro => {
              return (
                <tr>
                  <td>{passageiro.id}</td>
                  <td>{passageiro.nome}</td>
                  <td>{passageiro.CodVoo}</td>
                  <td className="acoes">
                    <a href={`/passageiro/${passageiro.id}`}>Ver</a>
                    <button onClick={() => onClickDeletePassageiro(passageiro.id||0)}>X</button>
                    <a href={`/passageiro-alterar/${passageiro.id}`}>Editar</a>
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