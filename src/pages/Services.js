import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { serviceArticles } from "../data";
import OneSerivce from "../components/OneSerivce";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Wrapper id="service" className="page">
      <h2 className="titlePage">Usługi</h2>
      <div data-aos="fade-up" className="servicesContainer">
        {serviceArticles.map((item) => {
          const { id } = item;
          return <OneSerivce key={id} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  .titlePage {
    transform: rotate(90deg);
    position: absolute;
    top: 30vh;
    right: -5vw;
    @media screen and (max-width: 800px) {
      top: 0vh;
      right: 50%;
      transform: translateX(50%);
    }
  }
  .servicesContainer {
    margin-left: 8vw;
    width: 68vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 5vw;
    row-gap: 5vh;
    @media screen and (max-width: 800px) {
      margin-left: 0;
      margin: 15vh auto 0vh;
      width: 80vw;
      grid-template-columns: 1fr;
      row-gap: 5vh;
      /* grid-template-rows: 1fr 1fr; */
    }
    article {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 40vh;
      width: 100%;
      position: relative;
      overflow: hidden;
      @media screen and (max-width: 800px) {
        min-height: 40vh;
        height: auto;
        border-bottom: 1px solid black;
        padding-bottom: 5vh;
        :nth-last-of-type(1) {
          border-bottom: none;
        }
      }
      img {
        width: 40%;
        max-width: 120px;
        height: 10vh;
        align-self: flex-end;
        transition: 0.5s;
        justify-self: flex-start;
      }
      h3 {
        color: var(--secondaryColor2);
        font-family: var(--menuFont);
        text-transform: uppercase;
        font-size: 1.5rem;
        margin-top: 1vh;
        margin-bottom: 2vh;
      }
      p {
        font-size: 1.1rem;
        line-height: 1.5;
        text-align: left;
        margin-bottom: 2vh;
      }
      button {
        align-self: flex-end;
        align-content: flex-end;
        border: none;
        background: none;
        color: var(--secondaryColor2);
        font-family: var(--menuFont);
        text-transform: lowercase;
        font-size: 1.2rem;
        transition: 0.3s;
        cursor: pointer;
        :hover {
          letter-spacing: 1px;
        }
      }
      :hover img {
        transform: rotate(10deg);
      }
    }
  }
  .service-over {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--primaryBg);
    background: #222;
    color: #fff;
    padding: 1rem;
    transition: 0.3s;
    overflow: auto;
    max-height: 100%;
    border: 2px solid var(--secondaryColor2);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transform: translateX(110%);
    button svg {
      font-size: 2rem;
    }
  }
  .showInfo {
    transform: translateX(0%);
  }
`;

export default Services;
