import { postAeroporto } from "../Services/Aeroporto";

export function AeroportoNovo() {
  const onSubmit = (evt: any) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = Object.fromEntries(formData);
    
    postAeroporto({
      nome: data.nome.toString()
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <span>Nome</span>
        <input type="text" name="nome" />
      </div>
      <input type="submit" value="Salvar" />
    </form>
  )
}
