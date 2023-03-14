import { useState } from "react";
import { useParams } from "react-router-dom";
import { alterarVoo, getVoo } from "../Services/Voo";

export function VooEditar () {
    const [ voo, setVoo ] = useState<any>();
    const params = useParams();
  
    if (!voo) {
      getVoo(parseInt(params.id||'', 10))
        .then(res => setVoo(res.data));
    }

    const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);

    alterarVoo({
        id: voo.id,
        nome: data.nome.toString(),
    });
   
  }

  return (
    <form onSubmit={onSubmit}>
        <div>
            <span>Companhia Aerea</span>
            <input type="text" name="nome" defaultValue={voo?.nome}/>
        </div>
            <input type="submit" value="Salvar" />
    </form>
  )
}