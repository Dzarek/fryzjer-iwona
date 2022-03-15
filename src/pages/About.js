import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import OpenHours from "../components/OpenHours";

import aboutUsImg from "../images/aboutUs.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="aboutMe" className="page">
      <div className="hairFeatures">
        <span data-aos="fade-down">
          <h2>DOŚWIADCZENIE</h2>
        </span>
        <span data-aos="fade-out">
          <h2>PASJA</h2>
        </span>
        <span data-aos="fade-up">
          <h2>KREATYWNOŚĆ</h2>
        </span>
      </div>
      <div className="aboutContainer">
        <h2 className="titlePage">O NAS</h2>
        <div className="pageContent">
          <article>
            <h3>Kim jesteśmy?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur architecto dolores officia ad commodi nostrum ipsam
              fugit. Ullam expedita excepturi possimus, officia recusandae
              necessitatibus molestiae, libero animi praesentium iste dolores?
            </p>
          </article>
          <div data-aos="fade-left" className="imgAbout"></div>
        </div>
      </div>
      <OpenHours />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 15vh auto;
  @media screen and (max-width: 800px) {
    padding: 15vh 0vw 0;
    margin: 0 auto 15vh;
  }

  .aboutContainer {
    padding-top: 20vh;
    margin: 0 auto 20vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .titlePage {
    transform: rotate(-90deg);
    position: absolute;
    top: 40vh;
    left: -3vw;
    @media screen and (max-width: 800px) {
      top: 10vh;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .pageContent {
    /* width: 70vw; */
    display: flex;
    margin-right: 10vw;
    @media screen and (max-width: 800px) {
      flex-direction: column-reverse;
      margin-right: 0;
      margin-top: -15vh;
    }
    article {
      height: 65vh;
      width: 65vh;
      background: var(--secondaryColor);
      padding: 50px;
      padding-right: 15vh;
      h3 {
        font-family: var(--menuFont);
        color: #fff;
        font-size: 2rem;
        margin-bottom: 5vh;
      }
      p {
        font-family: var(--textFont);
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 1.7;
      }
      @media screen and (max-width: 800px) {
        width: 100vw;
        height: auto;
        padding-right: 0;
        padding: 50px;
        h3 {
          margin-top: 5vh;
        }
        p {
          text-align: justify;
        }
      }
    }
    .imgAbout {
      height: 65vh;
      width: 65vh;
      background-image: url(${aboutUsImg});
      background-position: center;
      background-size: cover;
      margin: -10vh auto 0 -5vw;
      border-left: 4px solid white;
      border-bottom: 4px solid white;
      @media screen and (max-width: 800px) {
        height: 80vw;
        width: 80vw;
        margin: 0vh auto -10vh;
        border: 5px solid white;
      }
    }
  }
  .hairFeatures {
    width: 70vw;
    margin: 5vh auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    span {
      width: 15vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        font-family: var(--menuFont);
        color: var(--secondaryColor2);
        font-size: 2rem;
      }
    }
    @media screen and (max-width: 800px) {
      width: 80vw;
      margin: 15vh auto 5vh;
      align-items: center;
      flex-direction: column;
      span {
        width: auto;
      }

      span:nth-of-type(2) {
        margin-top: 3vh;
        margin-bottom: 3vh;
      }
    }
  }
`;

export default About;
