import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
  const funcaoOK = () => {alert("Agradecemos o feedback!")}
  const funcaoNOK = () => {alert("Verificaremos!")}
  const textoOK = "Pedido já chegou"
  const textoNOK = "Pedido ainda não chegou"
  const pedidos = [
    {
      data: '14/09/25',
      icone: 'car',
      titulo: 'Carro',
      descricao: 'Porsche amarelo'
    },
    {
      data: '13/09/25',
      icone: 'tractor',
      titulo: 'Trator',
      descricao: 'Trator agrícola'
    },
    {
      data: '12/09/25',
      icone: 'rocket',
      titulo: 'Foguete',
      descricao: 'Foguete da nasa'}
    ]
  const expressaoFeedback = (
    <Feedback
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      textoOK={textoOK}
      textoNOK={textoNOK} />
  )
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Cartao 
          cabecalho="Animais">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-center align-items-end mb-5">
                <Animal 
                  icone="cat"
                  tamanho="3" />
                <Animal 
                  icone="cat"
                  tamanho="2"
                  espelhamento="flip-horizontal" />
                <Animal 
                  icone="cat"
                  tamanho="1"
                  espelhamento="flip-horizontal" />
                <Animal 
                  icone="hippo"
                  tamanho="1"
                  espelhamento="flip-horizontal" />

              </div>
              <Feedback 
                textoOK="Adotar um gato?"
                funcaoOK={() => alert("Obaaa!")}
                textoNOK=" Não adotar"
                funcaoNOK={() => alert("Aaaa que pena!")} />
            </div>
          </Cartao>
        </div>
      </div>
      <div className="row mt-2">
        {
        pedidos.map(({data, icone, titulo, descricao}) => {
          return(
            <div className="col-sm-12 col-md-6 col-xl-4">
              <Cartao
                cabecalho={data}>
                <Pedido
                  icone={icone}
                  titulo={titulo}
                  descricao={descricao} />
                <div className="mt-3"></div>
                {expressaoFeedback}
              </Cartao>
            </div>

          )
        })
        }
      </div>

    </div>
  )
}

export default App