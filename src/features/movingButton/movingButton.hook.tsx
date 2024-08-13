import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../app/AppContext';

function useMovingButton() {
  const context = useContext(AppContext);

  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  });

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;

    if (context?.isMoving) {
      interval = setInterval(() => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        setPosition({
          left: x,
          top: y,
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [context]);

  const handleClick = () => {
    context?.setIsMoving(false);
  };

  return {
    position,
    isMoving: context?.isMoving ?? true,
    handleClick,
  };
}

export default useMovingButton;
