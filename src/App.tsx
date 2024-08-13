import { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from './app/AppContext';

import MovingButton from './features/movingButton';
import LoginForm from './entities/LoginForm';

function App() {
  const context = useContext(AppContext);

  return (
    <>
      <MovingButton />
      <BackgroundWrapper>
        <LoginWrapper>
          <h1>Login</h1>
          <LoginForm isMoving={context?.isMoving || false} />
        </LoginWrapper>
      </BackgroundWrapper>
    </>
  );
}

const LoginWrapper = styled.div`
  padding: 16px;
  position: relative;
  left: 10%;
  top: 10%;
  width: 700px; 
  height: 500px; 
  border-radius: 30px;
  background-color: rgba(2, 15, 1, 0.9);
  mix-blend-mode: luminosity;
`;

const BackgroundWrapper = styled.div`
  width: 1000px; 
  height: 1000px; 
`;

export default App;
