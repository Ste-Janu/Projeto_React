import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPassageiro } from '../Services/Passageiro';

export function PassageiroVer () {
  const [ passageiro, setPassageiro ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!passageiro) {
    getPassageiro(parseInt(params.id||'', 10))
      .then(res => setPassageiro(res.data));
  }

  return (
    <div>
      <div>
        <span>Código</span>
        <input type="text" value={passageiro?.id} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" value={passageiro?.nome} />
      </div>
      <div>
        <span>Cod. Voo</span>
        <input type="text" value={passageiro?.CodVoo} />
      </div>
    </div>
  )
}