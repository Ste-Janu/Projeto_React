interface HomeProps{
  setOpcao: (opcao: number) => void;

}

export function Home (props: HomeProps){
    return(
        <div>
            <main className="corpo">
        <div className="ladoEsquerdo">
          <h1>MULHERES<br />NA TECNOLOGIA</h1>
          <h2>
            Preparar e orientar mulheres <br />
            para carreiras na área <br />de tecnologia.
          </h2> 
          <div className="botaodiv">
           <a >
              <button onClick={() => props.setOpcao(2)}>Saiba Mais</button>
            </a>
            </div>  
        </div>

        <div className="ladoDireito">
          <img className="imgGrande" src="../src/assets/mulherdesign.png" alt="" />
        </div>
      </main>
        </div>
    )  
}

