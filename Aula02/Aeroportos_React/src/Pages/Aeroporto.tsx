import axios from "axios"
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
    <div>
      <span>Aeroportos</span>
      <table>
        <thead>
          <td>Código</td>
          <td>Nome</td>
        </thead>
        <tbody>
          {
            aeroportos?.map(aeroporto => {
              return (
                <tr>
                  <td>{aeroporto.id}</td>
                  <td>{aeroporto.nome}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}