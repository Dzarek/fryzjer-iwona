import React, { Component } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import Cookie from "./CookiePage";
import CookieConsent from "react-cookie-consent";

import { serviceArticles } from "../data";

let minDate = new Date().toISOString().slice(0, 10);

class MyForm extends Component {
  state = {
    status: "",
    visibleCookie: false,
    date: minDate,
    phone: "",
    category: "---",
  };
  handleChange = (e) => {
    this.setState({
      category: e.target.value,
    });
  };
  handleChangeDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  sendEmail = (e) => {
    e.preventDefault();
    if (e.target.value === "---") {
      alert("Wybierz kategorię przed wysłaniem formularza.");
    }
    emailjs
      .sendForm(
        "service_eu28q7p",
        "template_2gciz6b",
        e.target,
        "QPhckFRY63F4zWAKT"
      )
      .then(
        () => {
          e.target.reset();
          this.setState({ status: "SUCCESS" });
          setTimeout(() => {
            this.setState({ status: "" });
          }, 3000);
        },
        () => {
          this.setState({ status: "ERROR" });
        }
      );
  };

  render() {
    const { status, phone, category } = this.state;
    const handleVisibleCookie = () => {
      this.setState({
        visibleCookie: false,
      });
    };
    let categories = serviceArticles.map((item) => {
      const { title } = item;
      return title;
    });
    categories = ["---", ...categories].map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });

    return (
      <>
        <Wrapper>
          <form onSubmit={this.sendEmail}>
            <h3>napisz</h3>
            <div className="inputs">
              <input type="text" name="name" placeholder="Imię" required />
              <input
                type="text"
                name="surname"
                placeholder="Nazwisko"
                required
              />
            </div>
            <div className="inputs">
              <input type="email" name="email" placeholder="E-mail" required />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon"
                minLength={9}
                maxLength={12}
                value={phone}
                onChange={(e) =>
                  this.setState({
                    phone: e.target.value,
                  })
                }
                required
              />
            </div>
            <br />
            <div className="inputs">
              <div className="chooseInput">
                <label htmlFor="category">Wybierz kategorie:</label>
                <select
                  name="category"
                  id="category"
                  value={category}
                  onChange={this.handleChange}
                >
                  {categories}
                </select>
              </div>
              <div className="chooseInput">
                <label htmlFor="category">Wybierz termin:</label>

                <input
                  type="date"
                  name="date"
                  value={this.state.date}
                  min={minDate}
                  onChange={this.handleChangeDate}
                />
              </div>
            </div>
            <textarea
              placeholder="Twoja wiadomość..."
              name="message"
              required
            ></textarea>

            <label className="labelCheck" htmlFor="accept">
              <p>
                <input type="checkbox" id="accept" name="accept" required />
                Wyrażam zgodę na przetwarzanie danych osobowych w celu
                odpowiedzi na mojego e-maila{" "}
                <span
                  onClick={() => this.setState({ visibleCookie: true })}
                  className="cookieLink"
                >
                  (Polityka Prywatności).
                </span>
                <br />
                <strong>
                  Wysłanie zapytania nie równa się z rezerwacją terminu! Prosimy
                  oczekiwać na odpowiedź.
                </strong>
              </p>
            </label>
            {status === "SUCCESS" ? (
              <p className="sendMessage">Wiadomość wysłana! </p>
            ) : (
              <button>Wyślij</button>
            )}
            {status === "ERROR" && <p>ups... coś poszło nie tak!</p>}
          </form>
          {this.state.visibleCookie && (
            <Cookie handleVisibleCookie={handleVisibleCookie} />
          )}
        </Wrapper>
        <CookieConsent
          buttonText="Akceptuje"
          cookieName="myAwesomeCookieName2"
          className="cookieInfo"
          style={{
            background: "rgba(0,0,0, .8)",
            fontSize: "18px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            zIndex: 999999,
          }}
          buttonStyle={{
            color: "white",
            fontSize: "18px",
            backgroundColor: "rgb(161, 140, 97)",
            padding: "10px",
            borderRadius: "5px",
          }}
          expires={7}
        >
          Strona korzysta z plików cookies. Pozostając na niej wyrażasz zgodę na
          ich używanie. <br /> Ze szczegółowymi informacjami dotyczącymi cookies
          na tej stronie można się zapoznać tutaj:
          <span
            onClick={() => this.setState({ visibleCookie: true })}
            style={{ color: "rgb(161, 140, 97)", cursor: "pointer" }}
          >
            (Polityka Prywatności)
          </span>
          .
        </CookieConsent>
      </>
    );
  }
}

const Wrapper = styled.div`
  form {
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 800px) {
      width: 90vw;
    }
    @media (orientation: landscape) and (max-width: 500px) {
      width: 95vw;
    }

    button {
      width: 35%;
      font-size: 1.2rem;
      padding: 1vh 0;
      font-family: var(--menuFont);
      background: #333;
      color: white;
      letter-spacing: 1px;
      border: 2px solid var(--mainRed);
      border-radius: 10px;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        background: var(--secondaryColor2);
      }
    }

    h3 {
      text-transform: lowercase;
      text-align: center;
      color: var(--secondaryColor2);
      font-family: var(--menuFont);
      margin: 0 auto 3vh;
      font-size: 2rem;
      letter-spacing: 2px;
    }
    .inputs {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 1vh auto;
      input {
        width: 46%;
        font-size: 1.2rem;
        padding: 1vh 2%;
        border: none;
        border-bottom: 2px solid var(--secondaryColor2);
        /* border-radius: 10px; */
        font-family: var(--textFont);
      }
    }
    .chooseInput {
      width: 46%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: -3vh;
      label {
        text-align: left;
        align-self: flex-start;
      }
      input {
        width: 100%;
        font-size: 1.2rem;
      }
    }

    select {
      width: 100%;
      font-size: 1.2rem;
      padding: 1vh 2%;
      border: none;
      border-bottom: 2px solid var(--secondaryColor2);
      /* border-radius: 10px; */
      font-family: var(--textFont);
    }
    textarea {
      width: 100%;
      padding: 3vh 2% 0;
      font-size: 1.2rem;
      border: none;
      border-bottom: 2px solid var(--secondaryColor2);

      /* border-radius: 10px; */
      font-family: var(--textFont);
    }
    label {
      margin: 3vh auto;
      @media screen and (max-width: 800px) {
        font-size: 1rem;
      }
      input {
        margin-right: 10px;
      }
      span {
        color: var(--secondaryColor2);
        text-shadow: none;
        cursor: pointer;
      }
    }
  }
  .cookie {
    width: 100vw;
  }
  .sendMessage {
    font-size: 1.2rem;
  }
`;

export default MyForm;
