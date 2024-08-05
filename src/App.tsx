import { FormEvent, ChangeEvent, useState } from 'react';
import './App.css'
import MovingButton from './features/movingButton'


function App() {

  const [formData, setFormData] = useState({ 
    login: '', 
    password: '',
    terms: false, });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = formData.login.length >= 7 && formData.password.length >= 7;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);

  };
  return (
    <>
    <MovingButton />
    <div className="back">
      <div className="rounded-div">
        <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          {/* <div className="input-hole"> */}
          <label>
            Login:
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          {/* </div> */}
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <div className="checkbox-container">
          <label>
            Remember me
            <input
              type="checkbox"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label>
            Forget me?
            <input
              type="checkbox"
              value={formData.password}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          </div>
          <label>
            Agree with terms and conditions
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label>
            Agree to donate to the rabbit support fund
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
          <label>
            C'est dans les rêves que se cache la porte de l'éternel conte
            <input
              type="checkbox"
              checked={formData.terms}
              onChange={handleInputChange}
              className="form-input"
            />
          </label>
        </div>
        <div>
          <button style={{marginTop: '16px'}} type="submit" disabled={!isFormValid}>
          Enter
          </button>
        </div>
      </form>
      </div>
    </div>
    </>
  )
}

export default App
