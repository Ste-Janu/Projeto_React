import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PassageiroModel } from '../Model/PassageiroModel';
import { getTodosPassageiros } from '../Services/Passageiro';
import { getVoo } from '../Services/Voo';



export function VooVer() {
  const [voo, setVoo] = useState<any>();
  const params = useParams();

  if (!voo) {
    getVoo(parseInt(params.id || '', 10))
      .then(res => setVoo(res.data));
  }

  const [passageiros, setPassageiros] = useState<PassageiroModel[]>();

  const loadData = async () => {
    const passageiro: PassageiroModel[] = await getTodosPassageiros();
    setPassageiros(passageiro);
  }

  useEffect(() => {
    loadData();
  }, []);


  return (
    <div>
      <div>
        <span>Código</span>
        <input type="text" value={voo?.id} />
      </div>
      <div>
        <span>Companhia Aerea</span>
        <input type="text" value={voo?.nome} />
      </div>
      <div>
        <div className='ppp'>
          <b >Passageiros do Voo</b>
        </div>
        <div className="tabela">
          <table>
            <thead>
              <tr>
                <td>Código</td>
                <td>Nome</td>
              </tr>
            </thead>
            <tbody>
              {
                passageiros?.map(passageiro => {
                  if (passageiro.CodVoo == voo.id) {
                  return (
                    <tr>
                      <td>{passageiro.id}</td>
                      <td>{passageiro.nome}</td>
                    </tr>
                  )
                }})
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}