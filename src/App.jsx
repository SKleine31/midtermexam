import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('10 Things That Require Zero Talent');

  const handleClick = (key) => {
    switch (key) {
      case '1':
        setDisplay('Being On Time');
        break;
      case '2':
        setDisplay('Making An Effort');
        break;
      case '3':
        setDisplay('Being High Energy');
        break;
      case '4':
        setDisplay('Having A Positive Attitude');
        break;
      case '5':
        setDisplay('Being Passionate');
        break;
      case '6':
        setDisplay('Using Good Body Language');
        break;
      case '7':
        setDisplay('Being Coachable');
        break;
      case '8':
        setDisplay('Doing A Little Extra');
        break;
      case '9':
        setDisplay('Being Prepared');
        break;
      case '0':
        setDisplay('Having A Strong Work Ethic');
        break;
      case 'NAME':
        setDisplay('SEAN AETHAN KLEINE T. NUNAG');
        break;
      case 'SUBJ':
        setDisplay('C-PCIT9');
        break;
      default:
        break;
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="header-title">SEAN AETHAN KLEINE T. NUNAG - IT3A</h1>
        
        <div className="display-screen">
          {display}
        </div>
        
        <div className="keypad-grid">
          <button className="btn" onClick={() => handleClick('7')}>7</button>
          <button className="btn" onClick={() => handleClick('8')}>8</button>
          <button className="btn" onClick={() => handleClick('9')}>9</button>
          
          <button className="btn" onClick={() => handleClick('4')}>4</button>
          <button className="btn" onClick={() => handleClick('5')}>5</button>
          <button className="btn" onClick={() => handleClick('6')}>6</button>
          
          <button className="btn" onClick={() => handleClick('1')}>1</button>
          <button className="btn" onClick={() => handleClick('2')}>2</button>
          <button className="btn" onClick={() => handleClick('3')}>3</button>
          
          <button className="btn btn-action" onClick={() => handleClick('NAME')}>NAME</button>
          <button className="btn" onClick={() => handleClick('0')}>0</button>
          <button className="btn btn-action" onClick={() => handleClick('SUBJ')}>SUBJ</button>
        </div>
      </div>
    </div>
  );
}

export default App;