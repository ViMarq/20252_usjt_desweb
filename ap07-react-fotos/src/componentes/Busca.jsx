import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/InputIcon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends Component {
  state = {
// uma variável de estado tem a característica de que quando você altera o valor dela, a interface é atualizada automaticamente
    termoDeBusca: ''    
  }
  
  onTermoAlterado = (event) => {
    //atualizar o valor de busca na variável de estado
    // console.log(event.target.value)
    // this.state.termoDeBusca = event.target.value
    this.setState({
      termoDeBusca: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    //chamar a função passada via props
    this.props.onBuscaRealizada(this.state.termoDeBusca)
  }

  

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className='flex flex-column'>
          <IconField
              className='w-full'
              iconPosition='left'>
              <InputIcon className='pi pi-search' />
              <InputText
                value={this.state.termoDeBusca}
                onChange={this.onTermoAlterado}
                className='w-full'
                placeholder={this.props.dica} />
          </IconField>
          <Button
          className='mt-3'
          label='OK'
          />
        </div> 
      </form>
    )
  }
}

Busca.defaultProps = {
  dica: 'Buscar...'
}