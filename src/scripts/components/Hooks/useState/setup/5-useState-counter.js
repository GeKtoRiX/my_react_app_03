import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const resetNum = () => {
    setValue(0);
  };
  return (
    <>
      <section>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className='button-std'
          type='button'
          onClick={() => {
            setValue(value - 1);
          }}
        >
          decrease
        </button>
        <button className='button-std' type='button' onClick={() => resetNum()}>
          reset
        </button>
        <button
          className='button-std'
          type='button'
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
