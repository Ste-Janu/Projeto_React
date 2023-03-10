import { useState } from "react";
import { getTodosAeroportos } from "../Services/Aeroporto"



export function Aeroporto() {
  const [ aeroportos, setAeroportos ] = useState<any[]>();

  if (!aeroportos || aeroportos.length == 0) {
    const aeroportosReq: any = getTodosAeroportos();
    aeroportosReq.then((res: any) => {
        setAeroportos(res.data);
    });
  }

  return (
    <div >
      <div className="aero">
      <span >Aeroportos</span>
      </div>
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
                  <td><a href={`/aeroporto/${aeroporto.id}`}>Ver</a></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}