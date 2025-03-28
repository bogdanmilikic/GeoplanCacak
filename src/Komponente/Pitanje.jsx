import { useEffect, useState } from "react";
import Prevodilac from "./Prevodilac";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Pitanje = ({ prevod }) => {
  const [imePlace, setImePlace] = useState("");
  const [eMailPlace, setEMailPlace] = useState("");
  const [pitanjePlace, setPitanjePlace] = useState("");
  const [ime, setIme] = useState("");
  const [eMail, setEmail] = useState("");
  const [pitanje, setPitanje] = useState("");
  const [posalji, setPosalji] = useState(false);
  const handleRecaptcha = (token) => {
    if (token) {
      setPosalji(true);
    } else {
      setPosalji(false);
    }
    console.log("reCAPTCHA Token:", token);
  };
  //template_fy1rd1v
  const handlePitanje = (e) => {
    e.preventDefault();

    if (eMail.trim() === "") {
      alert("Unesite validnu email adresu.");
      return;
    }
    if (ime.trim() === "" || ime.trim() === undefined) {
      alert(
        prevod === true
          ? "'First and last name' must be entered in order to send your question"
          : "'Име и презиме' поље мора бити попуњено да би се послало ваше питање "
      );
      return;
    }
    if (pitanje.trim() === "" || pitanje.trim() === undefined) {
      alert(
        prevod === true
          ? "'The question' field must be entered in order to send your question"
          : "'Питање' поље мора бити попуњено да би се послало ваше питање "
      );
      return;
    }
    const templateParams = {
      name: ime,
      emaill: eMail,
      message: pitanje,
    };

    emailjs
      .send(
        "service_y6nw619", // Your EmailJS service ID
        "template_fy1rd1v", // Your EmailJS template ID
        templateParams, // Template parameters
        "wZnVJXd8aNkTqP1ik" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Uspešno poslato!", response.status, response.text);
          alert("Email je uspešno poslat!");
        },
        (error) => {
          console.error("Greška pri slanju emaila:", error);
          alert("Došlo je do greške pri slanju emaila.");
        }
      );
  };

  useEffect(() => {
    if (prevod) {
      setImePlace("First and last name");
      setEMailPlace("E-mail adress");
      setPitanjePlace("Enter your question");
    } else {
      setImePlace("Име и презиме");
      setEMailPlace("Е-mail адреса");
      setPitanjePlace("Унети ваше питање");
    }
    console.log(imePlace);
  }, [prevod, imePlace]);

  return (
    <div>
      <input
        style={{ width: "80%" }}
        placeholder={imePlace}
        className="zakazivanjeDatum"
        onChange={(e) => {
          setIme(e.target.value);
        }}
      ></input>
      <input
        style={{ width: "80%" }}
        placeholder={eMailPlace}
        className="zakazivanjeDatum"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <textarea
        className="poljeZaPitanje"
        placeholder={pitanjePlace}
        value={pitanje}
        onChange={(e) => {
          setPitanje(e.target.value);
        }}
      />
      <br />

      <div className="recaptcha-container">
        <ReCAPTCHA
          sitekey="6Lfsf_YqAAAAANTs7iyvELAqPgr_1JQybpV6fLcl"
          onChange={handleRecaptcha}
          size="compact"
          badge="bottomleft"
          data-storage="none"
        />
      </div>
      <br />
      <button
        className={posalji === false ? "neaktivnoDugmePitanje" : "pitanjeDugme"}
        disabled={posalji === false}
        onClick={handlePitanje}
      >
        <Prevodilac prevod={prevod} srpski={"Пошаљи "} engleski={"Send "} />
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  );
};
export default Pitanje;
