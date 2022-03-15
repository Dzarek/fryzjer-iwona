import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

import { GiHairStrands } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoHome } from "react-icons/io5";

import logoImg from "../images/logo.png";

const Navbar = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  const handleScroll = () => {
    setTimeout(() => {
      scroll.scrollMore(1);
    }, 1100);
  };

  return (
    <>
      <Wrapper>
        <div className={offset < 200 ? "navbar" : "navbar navbarBg"}>
          <div
            onClick={() => {
              scroll.scrollToTop();
            }}
            className="logo"
          >
            <h1>
              Salon Fryzjerski
              <img className="logoLine" src={logoImg} alt="logo" />
              <span>Iwona Marzec</span>{" "}
            </h1>
          </div>
          <div className="navbarLinks">
            <Link
              to="aboutMe"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
            >
              O nas
            </Link>
            <Link
              to="service"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              offset={-50}
            >
              Usługi
            </Link>
            <Link
              to="price"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              offset={-73}
            >
              Cennik
            </Link>
            {/* <Link
              to="offer"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
              offset={-50}
            >
              Galeria
            </Link> */}

            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass="active"
              spy={true}
            >
              Kontakt
            </Link>
          </div>
        </div>
        <button
          className={offset > 200 ? "upBtn" : "upBtn upBtnNone"}
          onClick={() => {
            scroll.scrollToTop();
          }}
        >
          <BsFillArrowUpSquareFill />
        </button>
      </Wrapper>
      <Wrapper2>
        <div
          onClick={() => {
            scroll.scrollToTop();
          }}
          className="logo"
        >
          <h1>
            Salon Fryzjerski
            <img className="logoLine" src={logoImg} alt="logo" />
            <span>Iwona Marzec</span>{" "}
          </h1>
        </div>
        <div className="navbar navbarBg">
          <Link
            to="home"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={0}
          >
            <IoHome />
          </Link>
          <Link
            to="aboutMe"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={30}
            onClick={handleScroll}
          >
            <MdPeople />
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={30}
            onClick={handleScroll}
          >
            <GiHairStrands />
          </Link>
          <Link
            to="price"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={30}
            onClick={handleScroll}
          >
            <GiReceiveMoney />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            activeClass="active"
            spy={true}
            offset={30}
            onClick={handleScroll}
          >
            <MdOutlinePhoneAndroid />
          </Link>
        </div>
      </Wrapper2>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 10vh;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 9999;
  @media screen and (max-width: 800px) {
    display: none;
  }
  .navbar {
    margin: 0 auto;
    position: fixed;
    height: 10vh;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    color: var(--secondaryColor);

    .navbarLinks {
      margin-right: 3vw;
    }
    h5,
    a {
      font-size: 1.3rem;
      font-family: "Oswald", sans-serif;
      font-weight: 600;
      letter-spacing: 1px;
      margin: 10px 1vw 0;
      text-transform: uppercase;
      transition: 0.5s letter-spacing;
      cursor: pointer;
      text-shadow: 3px 3px 3px black;
      padding-bottom: 8px;
      &.active {
        border-bottom: 2px solid white;
      }
      :hover {
        letter-spacing: 3px;
      }
    }

    .logo {
      margin: 0 3vw;
      cursor: pointer;
      h1 {
        font-family: "Karantina", cursive;
        font-size: 2.3rem;
        letter-spacing: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
        text-shadow: 2px 2px 2px black;
        font-style: italic;
        font-weight: 700;
        .logoLine {
          margin: 5px 20px 0;
          height: 3rem;
          /* width: 2.5rem; */
          animation: logoR 3s linear infinite alternate;
          @keyframes logoR {
            0% {
              transform: rotateY(0deg);
            }
            20% {
              transform: rotateY(0deg);
            }
            60% {
              transform: rotateY(180deg);
            }
            100% {
              transform: rotateY(180deg);
            }
          }
        }
      }
    }
  }
  .navbarBg {
    background: rgba(0, 0, 0, 0.8);
    transition: 0.5s;
  }
  .upBtn {
    position: fixed;
    bottom: 7vh;
    right: 3vw;
    font-size: 2rem;
    background: transparent;
    border: none;
    color: var(--primaryColor);
    transition: 0.5s;
    cursor: pointer;
    :hover {
      color: var(--secondaryColor2);
    }
  }
  .upBtnNone {
    opacity: 0;
  }
`;
const Wrapper2 = styled.div`
  @media screen and (min-width: 801px) {
    display: none;
  }

  .logo {
    cursor: pointer;
    margin: 0 auto;
    position: absolute;
    height: 10vh;
    width: 100vw;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
  h1 {
    width: 100%;
    font-family: "Karantina", cursive;
    font-size: 1.4rem;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-shadow: 2px 2px 2px black;
    font-style: italic;
    font-weight: 700;
    color: var(--secondaryColor);
    text-align: center;
    .logoLine {
      margin: 5px 15px 0;
      height: 2.3rem;
      animation: logoR 3s linear infinite alternate;
      @keyframes logoR {
        0% {
          transform: rotateY(0deg);
        }
        20% {
          transform: rotateY(0deg);
        }
        60% {
          transform: rotateY(180deg);
        }
        100% {
          transform: rotateY(180deg);
        }
      }
    }
  }
  .navbar {
    margin: 0 auto;
    position: fixed;
    height: 10vh;
    width: 100vw;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.95);
    color: #fff;
    h5,
    a {
      font-weight: 600;
      font-size: 1.8rem;
      text-transform: uppercase;
      transition: 0.4s;
      cursor: pointer;
      display: flex;
      align-items: center;
      user-select: none;
      &.active {
        color: var(--secondaryColor2);
      }
    }
  }
  .navbarBg {
    transition: 0.5s;
  }
`;

export default Navbar;
