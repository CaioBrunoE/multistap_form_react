import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import './Thanks.css'

const emojiData ={
  unsatifield :<BsFillEmojiFrownFill/>,
  neutral:<BsFillEmojiNeutralFill/>,
  satisfield : <BsFillEmojiSmileFill/>,
  very_satisfield :<BsFillEmojiHeartEyesFill/>
}

function Thanks({data}) {
  return (
    <div className="thanks-container">
      <h2>Falta pouco...</h2>
      <p>A sua opniao e muito importante, em breve voce recebera um cupom de 10% de desconto.</p>
      <p>Para concluir a sua avaliação click no botão de enviar abaixo</p>
      <h3>Aqui esta o resumo da sua avaliação {data.name}:</h3>
      <p className="revieew-data">
        <span>Satisfação com o produto</span>
        {emojiData[data.review]}
      </p>
      <p className="revieew-data">
        <span>Comentario:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks