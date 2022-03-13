import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} Salon Fryzjerski - Iwona Marzec.
        Wszelkie prawa zastrzeżone.
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
  @media screen and (max-width: 800px) {
    margin-bottom: 10vh;
    height: 12vh;
    text-align: center;
  }
`;

export default Footer;
