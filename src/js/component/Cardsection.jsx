import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div className="container">
      <div className="row">
        <Card 
          image="https://via.placeholder.com/500x325" 
          title="Card title" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." 
        />
        <Card 
          image="https://via.placeholder.com/500x325" 
          title="Card title" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." 
        />
        <Card 
          image="https://via.placeholder.com/500x325" 
          title="Card title" 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiente esse necessitatibus neque." 
        />
      </div>
    </div>
  );
};

export default CardSection;