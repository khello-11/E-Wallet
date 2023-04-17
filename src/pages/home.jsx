import React from "react";
import { Top } from "../components/top";
import "./home.scss";

import { Card } from "../components/card/card";
import { Link } from "react-router-dom";
//import {useHistory}  from 'react-router-dom'

export const Home = () => {
  //const history= useHistory()

  //const handleClick =()=>{
  //    history.push('./addCard')
  // }

  return (
    <div className="screen">
      <Top />
      <div className="screen__active-card">Activ Card</div>
      <Card />

      <Link to={"./addCard"}>
        <button className="screen__newCard-button">Add A New Card</button>
      </Link>
    </div>
  );
};
