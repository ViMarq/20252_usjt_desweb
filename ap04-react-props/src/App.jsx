import Pedido from "./Pedido"
import Animal from "./Animal"
import Cartao from "./Cartao"
const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Cartao 
          cabecalho="Animais">
            <Animal 
              icone="cat"
              tamanho="3"
              espelhamento="flip-horizontal" />
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
          </Cartao>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-xl-3">
          <Pedido
            data="14/09/25"
            icone="car"
            titulo="Carro"
            descricao="Porsche amarelo" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="14/09/25"
            icone="tractor"
            titulo="Trator"
            descricao="Trator agrícola" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="14/09/25"
            icone="rocket"
            titulo="Foguete"
            descricao="Foguete da nasa" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <Pedido
            data="14/09/25"
            icone="laptop"
            titulo="Notebook"
            descricao="Notebook prata" />
        </div>
      </div>

    </div>
  )
}

export default App