import { useContext } from 'react';
import { AppContext } from './app/AppContext';

import MovingButton from './features/movingButton'
import LoginForm from './entities/LoginForm';

import './App.css'


function App() {
  const context = useContext(AppContext);

  return (
    <>
    <MovingButton />
    <div className="back">
      <div className="rounded-div">
        <h1>Login</h1>
          <LoginForm isMoving={context?.isMoving || false}></LoginForm>
      </div>
    </div>
    </>
  )
}

export default App;
