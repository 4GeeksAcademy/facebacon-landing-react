import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Container;