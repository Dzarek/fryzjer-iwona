import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

import { priceData } from "../data";
import priceBg from "../images/priceBg.jpg";

const Prices = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const strzyzenie = priceData.strzyzenie;
  const koloryzacja = priceData.koloryzacja;
  const upiecia = priceData.upiecia;
  const pielegnacja = priceData.pielegnacja;
  const [showPrice, setShowPrice] = useState(strzyzenie);
  return (
    <Wrapper id="price" className="page">
      <h2 className="titlePage">CENNIK</h2>
      <div className="priceContainer">
        <ul data-aos="fade-left" className="categoryList">
          <li
            className={showPrice === strzyzenie && "activeItem"}
            onClick={() => setShowPrice(strzyzenie)}
          >
            Strzyżenia
          </li>
          <li
            className={showPrice === koloryzacja && "activeItem"}
            onClick={() => setShowPrice(koloryzacja)}
          >
            Koloryzacja
          </li>
          <li
            className={showPrice === upiecia && "activeItem"}
            onClick={() => setShowPrice(upiecia)}
          >
            Upięcia
          </li>
          <li
            className={showPrice === pielegnacja && "activeItem"}
            onClick={() => setShowPrice(pielegnacja)}
          >
            Pielęgnacja
          </li>
        </ul>
        <ul className="itemList">
          {showPrice.items.map((item) => {
            const { id, name, price } = item;
            return (
              <li key={id}>
                <p>{name}</p>
                <div></div>
                <span>{price} zł</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${priceBg});
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  margin: 20vh auto 0;
  @media screen and (max-width: 800px) {
    margin: 10vh auto 0;
    padding: 10vh 0;
  }
  .titlePage {
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-90deg);
    left: -6vw;
    @media screen and (max-width: 800px) {
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .priceContainer {
    position: absolute;
    top: 20%;
    margin-left: 30vw;
    width: 60vw;
    display: flex;
    flex-direction: column;
    color: #eee;
    text-shadow: 2px 2px 2px black;
    @media screen and (max-width: 800px) {
      margin-left: 0;
      margin: 20vh auto 0;
      width: 100vw;
      position: relative;
    }
    .categoryList {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      margin-bottom: 5vh;
      @media screen and (max-width: 800px) {
        flex-wrap: wrap;
        margin: 0 auto 5vh;
        width: 100vw;
      }
      li {
        font-family: var(--menuFont);
        text-transform: uppercase;
        font-size: 2.3rem;
        font-weight: 400;
        cursor: pointer;
        color: #ccc;
        transition: 0.4s;
        width: 25%;
        text-align: center;
        border-bottom: 4px solid #666;
        padding-bottom: 4vh;
        :hover {
          color: #fff;
        }
        @media screen and (max-width: 800px) {
          font-size: 1.7rem;
          width: 50%;
          padding: 3vh 5%;
        }
      }
      .activeItem {
        color: var(--secondaryColor);
        border-bottom: 4px solid #fff;
        :hover {
          color: var(--secondaryColor);
        }
      }
    }

    .itemList {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      li {
        width: 45%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.6rem;
        margin-top: 4vh;
        color: #fff;
        @media screen and (max-width: 800px) {
          width: 90%;
          margin: 0vh auto;
          margin-top: 4vh;
          font-size: 1.2rem;
        }
        span {
          color: var(--secondaryColor);
        }
        div {
          flex-grow: 1;
          border-bottom: 1px solid #ddd;
          align-self: flex-end;
          margin: 0 5px 7px;
        }
      }
    }
  }
`;

export default Prices;
