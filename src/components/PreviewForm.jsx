import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import './PreviewForm.css'
function PreviewForm({data,  updateFieldHandler}) {
  return (
    <div className="preview-form">
      <div className="form-control score-container">
        <label  className="radio-container">
          <input type="radio" value="unsatifield" name="previe" required 
           checked={data.review === "unsatifield"}
           onChange={(e)=>updateFieldHandler("review",e.target.value)}
          />
           <BsFillEmojiFrownFill/>
          <p>Insatisfeito</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="neutral" name="previe" required
            checked={data.review === "neutral"}
            onChange={(e)=>updateFieldHandler("review",e.target.value)} />
           <BsFillEmojiNeutralFill/>
          <p>Poderia ser melhor</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="satisfield" name="previe" required
           checked={data.review === "satisfield"}
           onChange={(e)=>updateFieldHandler("review",e.target.value)} /> 
           <BsFillEmojiSmileFill/>
          <p>Satisfeito</p>
        </label>
        <label  className="radio-container">
          <input type="radio" value="very_satisfield" name="previe" required 
           checked={data.review === "very_satisfield"}
           onChange={(e)=>updateFieldHandler("review",e.target.value)} />
           <BsFillEmojiHeartEyesFill/>
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentarios</label>
        <textarea name="comment" id="commeny" placeholder="Conte como foi a sua experiencia com o produto..."
        value={data.comment || ""}
        onChange={(e)=>updateFieldHandler("comment",e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default PreviewForm