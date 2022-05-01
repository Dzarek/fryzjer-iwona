import React from "react";
import styled from "styled-components";

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
