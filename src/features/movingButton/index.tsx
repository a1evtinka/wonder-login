import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../app/AppContext";

function MovingButton() {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    // const [isMoving, setIsMoving] = useState(true);
    const context = useContext(AppContext);
  
    useEffect(() => {
      let interval: ReturnType<typeof setTimeout>;
  
      if (context?.isMoving) {
        interval = setInterval(() => {
          const x = Math.random() * (window.innerWidth - 100); 
          const y = Math.random() * (window.innerHeight - 50); 
          console.log(x, y, 'x, y');
          
          setPosition({ left: x, top: y });
        }, 1000);
      }
  
      return () => clearInterval(interval);
    }, [context]);
  
    const handleClick = () => {
      context?.setIsMoving(false);
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
          width: '80px',
          height: '80px',
          // width: 0,
          // height: 0,
          // borderLeft: '40px solid transparent',
          // borderRight: '40px solid transparent',
          // borderBottom: '70px solid yellow',
          // position: 'relative',
        //   backgroundImage: `url(${isMoving ? '../../public/wonder-cat.jpg' : ''})`,
        }}
        className={`${context?.isMoving ? 'cat' : 'cat-shape'}`}
        // className={'cat-shape'}

      >
        {context?.isMoving ? 'Catch me!' : ''}
      </button>
    );
  }
  
  export default MovingButton;