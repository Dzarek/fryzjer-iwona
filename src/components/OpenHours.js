import React from "react";
import styled from "styled-components";
import { BiTimeFive } from "react-icons/bi";

const OpenHours = () => {
  return (
    <Wrapper>
      <div className="hoursLeft">
        <h2>godziny otwarcia</h2>
        <BiTimeFive />
      </div>
      <span className="hoursLine"></span>
      <div className="hoursRight">
        <section>
          <h3>Poniedziałek - Piątek</h3>
          <p>9:00 - 17:00</p>
        </section>
        <section>
          <h3>Sobota</h3>
          <p>10:00 - 14:00</p>
        </section>
        <section>
          <h3>Niedziela</h3>
          <p>nieczynne</p>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 50vh;
  background: #222;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 5vw;

  .hoursLine {
    height: 80%;
    width: 2px;
    background: var(--secondaryColor);
  }
  div {
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hoursLeft {
    h2 {
      text-transform: uppercase;
      font-family: var(--menuFont);
      font-size: 3rem;
    }
    svg {
      font-size: 5rem;
      color: var(--secondaryColor);
      margin-top: 3vh;
    }
  }
  .hoursRight {
    section {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #888;
      padding: 20px 0;
      font-family: var(--textFont);
      font-size: 1.5rem;
      :nth-last-of-type(1) {
        border: none;
      }
      p {
        color: var(--secondaryColor);
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    height: auto;
    .hoursLine {
      height: 2px;
      width: 80vw;
      margin: 5vh auto;
    }
    div {
      width: 90vw;
    }
    .hoursLeft {
      h2 {
        font-size: 2rem;
      }
      svg {
        font-size: 4rem;
        margin-top: 3vh;
      }
    }
    .hoursRight {
      section {
        width: 100%;
        padding: 20px 0;
        font-size: 1.1rem;
        h3 {
          font-size: 1.1rem;
        }
        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;

export default OpenHours;
