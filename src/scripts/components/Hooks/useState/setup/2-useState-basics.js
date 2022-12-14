import { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  };
  return (
    <div>
      <h1>{text}</h1>
      <button
        className='button-std'
        type='button'
        onClick={() => handleClick()}
      >
        change title
      </button>
    </div>
  );
};

export default UseStateBasics;
