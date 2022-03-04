import React from "react";
import styled from "styled-components";

import aboutUsImg from "../images/aboutUs.jpg";
import scissors from "../images/scissors.svg";
import grzebien from "../images/grzebien.svg";
import suszarka from "../images/suszarka.svg";

const About = () => {
  return (
    <Wrapper className="page">
      <div className="hairFeatures">
        <span>
          <img src={scissors} alt="" />
          <h2>PASJA</h2>
        </span>
        <span>
          <img src={grzebien} alt="" />
          <h2>DOŚWIADCZENIE</h2>
        </span>
        <span>
          <img src={suszarka} alt="" />
          <h2>ZAJEBISTOŚĆ</h2>
        </span>
      </div>
      <div id="aboutMe" className="aboutContainer">
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
          <div className="imgAbout"></div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 0 1vw;
  margin: 15vh auto;

  .aboutContainer {
    padding-top: 20vh;
    margin: 0 auto 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .titlePage {
    transform: rotate(90deg);
  }
  .pageContent {
    /* width: 70vw; */
    display: flex;
    margin-right: 10vw;
    margin-top: 5vh;
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

      img {
        width: 70%;
        height: 15vh;
        margin-bottom: 5vh;
        transition: 0.5s;
      }
      h2 {
        font-family: var(--menuFont);
        color: var(--secondaryColor);
        font-size: 2rem;
      }
      :hover img {
        transform: rotate(10deg);
      }
    }
  }
`;

export default About;
