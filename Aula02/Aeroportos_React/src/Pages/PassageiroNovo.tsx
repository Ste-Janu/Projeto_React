import { postPassageiro } from "../Services/Passageiro";

export function PassageiroNovo () {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    
    postPassageiro({
      nome: data.nome.toString(),
      CodVoo: parseInt(data.CodVoo.toString()),
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome </span>
        <input type="text" name="nome" />
      </div>
      <div>
        <span>Cod. Voo </span>
        <input type="text" name="CodVoo" />
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}
