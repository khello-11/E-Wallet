import React from "react";
import { Top } from "../components/top";
import "./home.scss";
import chip from "../assets 3/chip-dark.svg";

import { Card } from "../components/card/card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CardList } from "../components/card/cardList";

export const Home = () => {
  //const creditCards = useSelector((state) => state.creditCards);

  return (
    <div className="screen">
      <Top />
      <div className="screen__active-card">Active Card</div>
      <Card />
      <CardList />
      <Link to={"./addCard"}>
        <button className="screen__newCard-button">Add A New Card</button>
      </Link>
    </div>
  );
};
