import React from 'react';

const Container = (WrappedComponent) => (props) => {
  return (
    <div className='mx-auto max-w-[1024px] py-6 px-3'>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Container;
