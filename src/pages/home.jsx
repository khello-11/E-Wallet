import React, { useState } from "react";
import { Top } from "../components/top";
import "./home.scss";

import { Card } from "../components/card/card";
import { Link } from "react-router-dom";
import chip from "../assets 3/chip-dark.svg";
import bitcoin from "../assets 3/vendor-bitcoin.svg"

import { useSelector } from "react-redux";
import colors from "../sass/colors";
import { CardList } from "../components/card/cardList";


export const Home = () => {
  const creditCards = useSelector((state) => state.creditCards);
  const [activeDiv, setActiveDiv] = useState({
    activeObject: null,
    objects: creditCards
  })

  const toggleActive = (index) => {
    setActiveDiv({...activeDiv, activeObject: activeDiv.objects[index]})
  }

  
  
  return (
    <div className="screen">
      <Top />
        <div className="screen__active-card">Active Card</div>   
        {activeDiv.activeObject === null 
        ? 
        <Card/> 
        : <section style={{
        width: 382,
        height: 241,
        margin: 15,
        borderRadius: 10,
        backgroundColor: activeDiv.activeObject.vendor.color
        }}>
      <div className="card__card-image">
        <img src={chip} alt="chip-icon" />
        <img src={activeDiv.activeObject.vendor.svg} alt="biticon" />
      </div>
      <div className="card__card-number">{activeDiv.activeObject.cardNumber} </div>
      <div className="card__card-name-valid-holder">
        <div className="card__cardHolderName">
          <p>Cardholder Name</p>
          <p>{activeDiv.activeObject.cardHolderName}</p>
        </div>
        <div className="card__cardValidThru">
          <p>{activeDiv.activeObject.validThru}</p>
          <p>{activeDiv.activeObject.ccv}</p>
        </div>
      </div>
    </section> }
    
      <div> 

<ul style={{
   overflowY: 'scroll',

}}>
  
  {creditCards.map((creditCard, index) => {
    return (
        <section 
        onClick={()=> {toggleActive(index)}}
        key={index}
        style={{
          width: 382,
          height: 241,
          margin: 15,
          borderRadius: 10,
          backgroundColor: creditCard.vendor.color
          }}>
          <div className="card__card-image">
            <img src={chip} alt="chip-icon" />
            <img src={creditCard.vendor.svg} alt="vendor" />
          </div>
          <div style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 32,
            fontFamily: 'monospace',
            color: creditCard.vendor.color === colors.black ? 'white' : 'black'  
          }}>
            {creditCard.cardNumber}
            </div>
          <div className="card__card-name-valid-holder">
            <div className="card__cardHolderName">
              <p style={{
                color: creditCard.vendor.color === colors.black ? 'white' : 'black'  
              }}>Cardholder Name</p>
              <p style={{
                color: creditCard.vendor.color === colors.black ? 'white' : 'black'  
              }}>{creditCard.cardHolderName}</p>
            </div>
            <div className="card__cardValidThru">
              <p style={{
                color: creditCard.vendor.color === colors.black ? 'white' : 'black'  
              }}>Valid Thru</p>
              <p style={{
                color: creditCard.vendor.color === colors.black ? 'white' : 'black'  
              }}>{creditCard.validThru}</p>
            </div>
          </div>
        </section>
      // </li>
    );
  })}
</ul>
</div>
      <Link to={"./addCard"}>
        <button className="screen__newCard-button">Add A New Card</button>
      </Link>
    </div>

  );
};
