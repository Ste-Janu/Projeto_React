import { postVoo } from "../Services/Voo";


export function VooNovo () {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    
    postVoo({
      nome: data.nome.toString(),
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Companhia Aerea</span>
        <input type="text" name="nome" />
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}
