import styled from 'styled-components';
import img from '../../../public/wonder-cat.jpg';
import useMovingButton from './movingButton.hook';

function MovingButton() {
  const {
    position, isMoving, handleClick,
  } = useMovingButton();

  return (
    <CatButton
      onClick={handleClick}
      isMoving={isMoving}
      style={{
        left: `${position.left}px`,
        top: `${position.top}px`,
      }}
    >
      {isMoving ? 'Catch me!' : ''}
    </CatButton>
  );
}

interface ButtonProps {
  isMoving: boolean;
  onClick: () => void;
}

const CatButton = styled.button<ButtonProps>`
  position: absolute;
  font-size: 14px;
  cursor: pointer;
  transition: left 2s linear, top 2s linear;

  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${({ isMoving }) => (isMoving ? '#1a1a1a' : 'none')};
  background-image: ${({ isMoving }) => (!isMoving ? `url(${img})` : 'none')};
  background-repeat: no-repeat;
  background-size: ${({ isMoving }) => (!isMoving ? 'cover' : 'initial')};
  background-position: ${({ isMoving }) => (!isMoving ? '45% 95%' : 'initial')};
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ isMoving }) => (isMoving ? '#1a1a1a' : 'transparent')};
    background-image: ${({ isMoving }) => (!isMoving ? `url(${img})` : 'none')};
    background-repeat: no-repeat;
    background-size: ${({ isMoving }) => (!isMoving ? '300%' : 'initial')};
    background-position: ${({ isMoving }) => (!isMoving ? '20% 25%' : 'initial')};
    clip-path: polygon(40% 0%, 0% 100%, 100% 100%);
    z-index: -1;
  }

  &::before {
    top: -12px;
    left: 0px;
  }

  &::after {
    top: -12px;
    right: 0px;
  }
`;

export default MovingButton;
