//componets
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import './App.css'

function App() {
  
  return (
    <>
      
       <div className="header">
        <h2>Deixe sua avaliaç;ao</h2>
        <p>Ficamos felizes com a sua compra, ultilizer o formulario abaixo para avaçiar o produto</p>
       </div>
       <div className="form-container">
        <p>etapas</p>
        <form >
          <div className="inputs-container">
            
          </div>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious/>
              <span>Voltar</span>
              </button>
            <button type='submit'>
              <span>Avançar</span>
               <GrFormNext/>
              </button>
          </div>
        </form>
       </div>
    </>
  )
}

export default App
