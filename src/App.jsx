//componets
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import PreviewForm from './components/PreviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'
import './App.css'
//Hooks
import { useForm } from "./hooks/useForm"
import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);


  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    })
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <PreviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirtsStep } = useForm(formComponents);

  return (
    <div className='app'>
      <div className="header">
        <h2>Deixe sua avaliaç;ao</h2>
        <p>Ficamos felizes com a sua compra, ultilizer o formulario abaixo para avaçiar o produto</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
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
