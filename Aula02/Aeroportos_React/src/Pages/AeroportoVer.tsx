import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAeroporto } from '../Services/Aeroporto';

export function AeroportoVer() {
  const [ aeroporto, setAeroporto ] = useState<any>();
  const params = useParams();
  console.log(params);

  if (!aeroporto) {
    getAeroporto(parseInt(params.id||'', 10))
      .then(res => setAeroporto(res.data));
  }

  return (
    <div>
      <div>
        <span>Código</span>
        <input type="text" value={aeroporto?.id} />
      </div>
      <div>
        <span>Nome</span>
        <input type="text" value={aeroporto?.nome} />
      </div>
    </div>
  )
}