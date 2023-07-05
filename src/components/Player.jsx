import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div>
    <Card className="card">
      <Card.Img variant="top" src={imageUrl} className="image"/>
      <Card.Body>
        <Card.Title><h3>{name}</h3></Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
 </div>
  );
};

export default Player;


