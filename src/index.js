import React from "react";
import ReactDOM from "react-dom";

function Card(props)
{
  return <div>
  <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.number}</p>
    <p>{props.email}</p>
    </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card 
    name="Some name 1"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    number="147852369"
    email="someone@gmail.com">
    </Card>
    <Card 
    name="Some name 2"
    img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    number="147852369"
    email="some@gmail.com">
    </Card>
    

    
  </div>,
  document.getElementById("root")
);
