const ErrorExample = () => {
  let title = 'random example';
  const handleClick = () => {
    title = 'Hello world';
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button
        className='button-std'
        type='button'
        onClick={() => handleClick()}
      >
        change title
      </button>
    </>
  );
};

export default ErrorExample;
