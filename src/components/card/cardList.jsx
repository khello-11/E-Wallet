import React from "react";
import { useSelector } from "react-redux";
import chip from "../../assets 3/chip-dark.svg";
import "./card.scss";

export const CardList = () => {
  const creditCards = useSelector((state) => state.creditCards);

  return (
    <ul>
      {creditCards.map((creditCard) => {
        return (
          <li>
            <section className="card">
              <div className="card__card-image">
                <img src={chip} alt="chip-icon" />
                <img src={creditCard.vendor.svg} alt="vendor" />
              </div>
              <div className="card__card-number">{creditCard.cardNumber}</div>
              <div className="card__card-name-valid-holder">
                <div className="card__cardHolderName">
                  <p>Cardholder Name</p>
                  <p>{creditCard.cardHolderName}</p>
                </div>
                <div className="card__cardValidThru">
                  <p>Valid Thru</p>
                  <p>{creditCard.validThru}</p>
                </div>
              </div>
            </section>
          </li>
        );
      })}
    </ul>
  );
};
