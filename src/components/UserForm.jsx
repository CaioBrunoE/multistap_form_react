

function UserForm() {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input type="text" name="nane" id="name" placeholder="Digite seu nome " required />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Digite seu e-mail " required />
      </div>
    </div>
  )
}

export default UserForm