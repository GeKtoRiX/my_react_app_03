import { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const resetNum = () => {
    setValue(0);
  };
  // Использование предыдущего значения value при ре-рендеринге.
  const complexIncrease = () => {
    setTimeout(() => {
      // value + 1
      setValue((prevState) => prevState + 1);
    }, 3000);
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
      <section>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='button-std' type='button' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
