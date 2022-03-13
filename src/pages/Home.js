import React, { useEffect } from "react";
import styled from "styled-components";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

import headerImg from "../images/headerImg.jpg";
import headerImg2 from "../images/headerImg2.jpg";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <div className="header"></div>
      <div className="header-info">
        <Carousel
          infinite
          autoPlay={6000}
          animationSpeed={2000}
          slidesPerPage={1}
        >
          <article>
            <h1>Szukasz nowej fryzury?</h1>
            <p>W tym miejscu pomożemy Ci odnaleźć swój nowy styl.</p>
          </article>
          <article>
            <h1>
              Przed Tobą ślub, romantyczna kolacja <br /> lub inna uroczystość?
            </h1>
            <p>
              Przygotujemy twoją fryzurę by była gotowa na wyjątkową okazje.
            </p>
          </article>
          <article>
            <h1>
              Strzyżenie, Czesanie, Koloryzacja, <br /> Modelowanie,
              Pielęgnacja...
            </h1>
            <p>Umów się na wizytę i zadbaj o swoje włosy.</p>
          </article>
        </Carousel>
      </div>

      <Link
        to="contact"
        smooth={true}
        duration={1000}
        activeClass="active"
        spy={true}
        className="bookLink"
      >
        Umów wizytę
      </Link>
      <div className="menAndWoman">
        <h2>Damski</h2>
        <h2>Męski</h2>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  .header {
    width: 100vw;
    height: 100vh;
    background-image: url(${headerImg});
    background-position: center 20%;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: zoomIn 20s ease-in-out infinite alternate;
    @keyframes zoomIn {
      0% {
        transform: scale(1) translate(-50%, -50%);
        background-image: url(${headerImg});
      }
      50% {
        transform: scale(1.1) translate(-50%, -50%);
        background-image: url(${headerImg});
      }
      55% {
        transform: scale(1.1) translate(-50%, -50%);
        background-image: url(${headerImg2});
      }
      100% {
        transform: scale(1) translate(-50%, -50%);
        background-image: url(${headerImg2});
      }
    }
  }
  .header-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: whitesmoke;
    font-size: 1.2rem;
    line-height: 3;
    text-align: center;
    letter-spacing: 2px;
    article {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-family: "Oswald", sans-serif;

      h1 {
        width: 70%;
        text-shadow: 2px 2px 2px black;
        font-size: 2.5rem;
        line-height: 1.5;
        margin-bottom: 3vh;
      }
      p {
        font-size: 1.8rem;
        text-shadow: 2px 2px 2px black;
        color: var(--secondaryColor);
        font-weight: 500;
      }
    }
    @media screen and (max-width: 800px) {
      font-size: 1rem;
      line-height: 2;
      letter-spacing: 1px;
      h1 {
        width: 85%;
        text-shadow: 2px 2px 2px black;
      }
    }
  }
  .bookLink {
    color: #fff;
    border: 4px solid var(--secondaryColor);
    padding: 5px 20px;
    border-radius: 5px;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: 0.5s;
    cursor: pointer;
    text-shadow: 3px 3px 3px black;
    background: #d3bb8c59;
    :hover {
      letter-spacing: 3px;
    }
  }
  .menAndWoman {
    width: 100vw;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    h2 {
      text-transform: uppercase;
      font-family: "Oswald", sans-serif;
      font-size: 3.5rem;
      letter-spacing: 6px;
      color: #555;
      text-shadow: 4px 4px 4px black;
    }
  }
`;

export default Home;
