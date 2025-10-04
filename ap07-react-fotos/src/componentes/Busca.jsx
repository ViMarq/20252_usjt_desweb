import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/InputIcon'
import { InputText } from 'primereact/inputtext'
export default class Busca extends Component {
  state = {
// uma variável de estado tem a característica de quando você altera o valor dela, a interface é atualizada automaticamente
    termoDeBusca: ''    
  }  
  render() {
    return (
      <div className='flex flex-column'>
        <IconField
            className='w-full'
            iconPosition='left'>
            <InputIcon className='pi pi-search' />
            <InputText
                className='w-full'
                placeholder='Buscar' />
        </IconField>
        <Button
         className='mt-3'
         label='OK'
         />
      </div>
    )
  }
}
