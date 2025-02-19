import React from "react";
import styled from "styled-components";

const logoJarek = "/public/logoJarek.png";

const Footer = () => {
  return (
    <Wrapper>
      <p className="desktopFooter">
        &copy; 2010 - {new Date().getFullYear()} Studio Fryzur. Wszelkie prawa
        zastrzeżone.
      </p>
      <p className="mobileFooter">
        &copy; 2010 - {new Date().getFullYear()} <br /> Studio Fryzur. Wszelkie
        prawa zastrzeżone.
      </p>
      <span className="logoJarek">
        <p>projekt i wykonanie</p>
        <a href="https://www.jarekjanas.com">
          <img src={logoJarek} alt="logo Jarosław Janas" />
        </a>{" "}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondaryColor2);
  font-family: var(--titleFont);
  font-size: 1.3rem;
  color: #fff;
  text-align: center;
  .mobileFooter {
    display: none;
  }
  .desktopFooter {
    display: block;
  }
  @media screen and (max-width: 800px) {
    margin-bottom: 10vh;
    height: 15vh;
    font-size: 1.1rem;
    .desktopFooter {
      display: none;
    }
    .mobileFooter {
      display: block;
    }
  }
`;

export default Footer;
