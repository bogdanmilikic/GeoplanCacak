import { useEffect, useRef, useState } from "react";
import Prevodilac from "./Prevodilac";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";
import Alert from "./Alert";

const Pitanje = ({ prevod, poruka, setPoruka, aktivno }) => {
  const [imePlace, setImePlace] = useState("");
  const [eMailPlace, setEMailPlace] = useState("");
  const [pitanjePlace, setPitanjePlace] = useState("");
  const [ime, setIme] = useState("");
  const [eMail, setEmail] = useState("");
  const [pitanje, setPitanje] = useState("");
  const [posalji, setPosalji] = useState(false);
  const eMailRef = useRef(null);
  const [obavestenje, setObavestenje] = useState(false);
  const [uspesno, setUspesno] = useState(false);

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

    if (eMail.trim() === "" || eMailRef.current.checkValidity() === false) {
      setPoruka({
        srb: "Унети валидну еmail адресу",
        eng: "Please enter a valid email adress",
      });
      setUspesno(false);
      setObavestenje(true);
      return;
    }
    if (ime.trim() === "" || ime.trim() === undefined) {
      setPoruka({
        srb: "Име и презиме' поље мора бити попуњено да би се послало ваше питање",
        eng: "'First and last name' must be entered in order to send your question",
      });
      setUspesno(false);
      setObavestenje(true);
      return;
    }
    if (pitanje.trim() === "" || pitanje.trim() === undefined) {
      setPoruka({
        srb: "'Питање' поље мора бити попуњено да би се послало ваше питање",
        eng: "'The question' field must be entered in order to send your question",
      });
      setUspesno(false);
      setObavestenje(true);
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

          setPoruka({
            srb: "Питање је успешно послато!",
            eng: "The question has been sent successfuly!",
          });
          setUspesno(true);
          setObavestenje(true);
        },
        (error) => {
          console.error("Greška pri slanju emaila:", error);
          setPoruka({
            srb: "Дошло је до грешке при слању питања",
            eng: "An error has occurred while sending your question",
          });
          setUspesno(false);
          setObavestenje(true);
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
  useEffect(() => {
    if (aktivno !== 2) {
      setObavestenje(false);
    }
  }, [aktivno, setObavestenje]);

  return (
    <div>
      {obavestenje ? (
        <Alert
          setOpen={setObavestenje}
          uspesno={uspesno}
          poruka={prevod ? poruka.eng : poruka.srb}
        />
      ) : undefined}

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
        type="email"
        className="zakazivanjeDatum"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        ref={eMailRef}
        required
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
        />
      </div>
      <br />
      <button
        className={posalji === false ? "neaktivnoDugmePitanje" : "pitanjeDugme"}
        disabled={posalji === false}
        onClick={handlePitanje}
      >
        <Prevodilac prevod={prevod} srpski={"Пошаљи "} engleski={"Send "} />
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
      </button>
    </div>
  );
};
export default Pitanje;
