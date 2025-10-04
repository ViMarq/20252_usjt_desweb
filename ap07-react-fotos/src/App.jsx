import {Button} from 'primereact/button'
import Busca from './componentes/Busca'

const App = () => {
  return(
    <div>
      <div className='flex mb-3'>
        <i className='pi pi-car mr-3'></i>
        <i className='pi pi-car'></i>
      </div>
        <Busca />
    </div>
  )
}

export default App