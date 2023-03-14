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
      <span>Comp. Aerea</span>
        <select name="CodVoo" id="CodVoo">
          <option value="">Selecione</option>
          <option value="22">GOL</option>
          <option value="2">LATAM</option>
          <option value="3">AZUL</option>
          <option value="23">TESTE</option>
        </select>
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}
