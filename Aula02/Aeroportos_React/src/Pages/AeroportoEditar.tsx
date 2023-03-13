import { useState } from "react";
import { useParams } from "react-router-dom";
import { alterarAeroporto, getAeroporto } from "../Services/Aeroporto";

export function AeroportoEditar () {
    const [ aeroporto, setAeroporto ] = useState<any>();
    const params = useParams();
    console.log(params);
  
    if (!aeroporto) {
      getAeroporto(parseInt(params.id||'', 10))
        .then(res => setAeroporto(res.data));
    }

    const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);

    alterarAeroporto({
        id: aeroporto.id,
        nome: data.nome.toString(),
    });
   
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome</span>
        <input type="text" name="nome" defaultValue={aeroporto?.nome}/>
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}
