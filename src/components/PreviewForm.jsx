import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import './PreviewForm.css'
function PreviewForm() {
  return (
    <div className="preview-form">
      <div className="form-control score-container">
        <label  className="radio-container">
          <input type="radio" value="unsatifield" name="previe" required />
           <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="neutral" name="previe" required />
           <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="satisfield" name="previe" required />
           <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="very_satisfield" name="previe" required />
           <BsFillEmojiHeartEyesFill/>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentarios</label>
        <textarea name="comment" id="commeny" placeholder="Conte como foi a sua experiencia com o produto..."></textarea>
      </div>
    </div>
  )
}

export default PreviewForm