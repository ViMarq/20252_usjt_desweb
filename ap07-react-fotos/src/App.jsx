import {Button} from 'primereact/button'
import Busca from './componentes/Busca'
import React from 'react'
import { createClient } from 'pexels'
import ListaImagens from './componentes/ListaImagens'

class App extends React.Component{
  //somente componentes de classe podem ter estado, por isso mudamos de arrow function para classe
  
state = {
  photos: []
}

  chavePexels = 'VMhQbYzyGQXJIscWTojLkeKEY0jMuEKWDoLlH0u19OpTOogw1XtVt7TE'

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient(this.chavePexels)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo
    })
    .then((result) => {
      //não faça assim
      //this.state.photos = result.photos
      //faça assim
      this.setState({
        photos: result.photos
      })
    })
  }

  render(){
    return(
      <div className= 'grid border-1 justify-content-center border-400 border-round'>
        <div className="col-12">
          <div className='flex mb-3'>
            <i className='pi pi-car mr-3'></i>
            <i className='pi pi-car'></i>
          </div>
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de ...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className="col-12">
          <div className='grid'>
            <ListaImagens
              imageStyle='col-12 md:col-6 lg:col-4 xl:col-3'
              photos={this.state.photos}/>
          </div>
        </div>
      </div>
    )

  }
}

export default App