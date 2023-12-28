//componets
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import PreviewForm from './components/PreviewForm'
import Thanks from './components/Thanks'
import './App.css'
//Hooks
import { useForm } from "./hooks/useForm"
import Step from './components/Steps'
import Steps from './components/Steps'

function App() {
  const formComponents = [<UserForm />, <PreviewForm />, <Thanks />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirtsStep } = useForm(formComponents);

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliaç;ao</h2>
        <p>Ficamos felizes com a sua compra, ultilizer o formulario abaixo para avaçiar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {!isFirtsStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type='submit'>
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type='button'>
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
