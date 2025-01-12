import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SignUp = ({ setSifra, setEmaill }) => {
  const [eMail, setEmail] = useState("");

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (eMail.trim() === "") {
      alert("Unesite validnu email adresu.");
      return;
    }

    const templateParams = {
      to_email: eMail,
      message: "Here is the plain text content of your email!", // The plain text content
    };

    emailjs
      .send(
        "service_y6nw619", // Your EmailJS service ID
        "template_ngd8gip", // Your EmailJS template ID
        templateParams, // Template parameters
        "wZnVJXd8aNkTqP1ik" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Uspešno poslato!", response.status, response.text);
          alert("Email je uspešno poslat!");
          setSifra("sifra1234");
          setEmaill(eMail);
        },
        (error) => {
          console.error("Greška pri slanju emaila:", error);
          alert("Došlo je do greške pri slanju emaila.");
        }
      );
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <label htmlFor="emailInput" className="popUpLabel">
        <FontAwesomeIcon icon={faEnvelope} />
        {"  "}E-mail:
      </label>
      <input
        id="emailInput"
        type="email"
        className="popUpInput"
        value={eMail}
        onChange={handleEmail}
        placeholder="Unesite vašu E-mail adresu"
        required
      />
      <br />
      <center>
        <button className="popUpDugme" onClick={handleSendEmail}>
          <FontAwesomeIcon icon={faCheck} /> Potvrdi
        </button>
      </center>
    </div>
  );
};

export default SignUp;
