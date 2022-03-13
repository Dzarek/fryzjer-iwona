import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdPhoneAndroid } from "react-icons/md";
import MyForm from "../components/MyForm";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper id="contact" className="page">
      <h2 className="titlePage">Kontakt</h2>
      <h3>Zapytaj o termin</h3>
      <div className="contactContainer">
        <section className="myForm">
          <MyForm />
          <div className="contactFast">
            <h3>lub zadzwoń</h3>
            <section>
              <MdPhoneAndroid />
              <h5>789 194 123</h5>
            </section>

            <section>
              <MdPhoneAndroid className="icon" />
              <h5>123 456 789</h5>
            </section>
          </div>
        </section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.11513191577!2d19.936765435911067!3d50.08413125657414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a561c37111d%3A0x31dd5c09ed25e7f6!2sSalon%20Fryzjerski%20-%20Iwona%20Marzec!5e0!3m2!1spl!2spl!4v1647181955420!5m2!1spl!2spl"
          allowfullscreen=""
          loading="lazy"
          className="mapContact"
          title="map"
          data-aos="fade-top"
        ></iframe>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10vh 0 0;

  .titlePage {
    position: absolute;
    top: 35%;
    transform: translateY(-50%) rotate(90deg);
    right: -8.5vw;
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-family: var(--menuFont);
    letter-spacing: 3px;
    margin-bottom: 10vh;
    margin-top: 5vh;
  }
  .contactContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 10vh; */
  }

  .mapContact {
    width: 100vw;
    height: 60vh;
    border: var(--secondaryColor) 2px solid;
    /* border-radius: 0 5px 5px 0; */
    filter: invert(100%) saturate(30%);
  }
  .myForm {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 20vw;
    width: 60vw;
    margin-left: 0vw;
    margin-bottom: 10vh;
    h3 {
      text-transform: lowercase;
      text-align: center;
      color: var(--secondaryColor2);
      font-family: var(--menuFont);
      margin: 0 auto 5vh;
      font-size: 2rem;
      letter-spacing: 2px;
    }
  }
  .contactFast {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      margin-bottom: 10vh;
    }
    section {
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 2.5rem;
      margin-top: 8vh;
      h5 {
        font-weight: 600;
      }
      svg {
        margin-right: 2vw;
        animation: rotateIcon 4s linear infinite;
        @keyframes rotateIcon {
          10% {
            transform: rotate(-20deg);
          }
          20% {
            transform: rotate(20deg);
          }
          30% {
            transform: rotate(-20deg);
          }

          40% {
            transform: rotate(20deg);
          }

          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
      }
      .icon {
        animation-delay: 2s;
      }
    }
  }
`;

export default Contact;
