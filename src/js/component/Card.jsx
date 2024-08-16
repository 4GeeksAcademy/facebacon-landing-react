import React from "react";

const Card = ({ image, title, text }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4 py-3">
      <div className="card h-100">
        <img className="card-img-top" src={image} alt={title} />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{text}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">Find Out More!</a>
        </div>
      </div>
    </div>
  );
};

export default Card;