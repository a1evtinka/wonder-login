import { useEffect, useState } from "react";

function MovingButton() {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const [isMoving, setIsMoving] = useState(true);
  
    useEffect(() => {
      let interval: ReturnType<typeof setTimeout>;
  
      if (isMoving) {
        interval = setInterval(() => {
          const x = Math.random() * (window.innerWidth - 100); 
          const y = Math.random() * (window.innerHeight - 50); 
          setPosition({ left: x, top: y });
        }, 500);
      }
  
      return () => clearInterval(interval);
    }, [isMoving]);
  
    const handleClick = () => {
      setIsMoving(false);
    };
  
    return (
      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          left: `${position.left}px`,
          top: `${position.top}px`,
          fontSize: '14px',
          cursor: 'pointer',
          transition: 'left 2s linear, top 2s linear',
          borderRadius: '50%',
          width: '85px',
          height: '85px',
        //   backgroundImage: `url(${isMoving ? '../../public/wonder-cat.jpg' : ''})`,
        }}
        className={`${isMoving ? '' : 'cat'}`}
      >
        {isMoving ? 'Catch me!' : ''}
      </button>
    );
  }
  
  export default MovingButton;