import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SignUp = ({ eMail, setEmail, setSifra }) => {
  const handleSendEmail = (e) => {
    if (eMail === "") {
      alert("Unesite vašu e-mail");
      setEmail(undefined);
    } else {
    }
  };
  const handleEmail = (e) => {
    setEmail(e.targe.value);
  };
  return (
    <div style={{ marginTop: "70px" }}>
      <label className="popUpLabel">
        <FontAwesomeIcon icon={faEnvelope} />
        {"  "}
        E-mail:
      </label>
      <input
        className="popUpInput"
        value={eMail}
        handleChange={handleEmail}
        placeholder="Unesite vasu E-mail adresu"
      ></input>
      <br />
      <center>
        <button className="popUpDugme">
          <FontAwesomeIcon icon={faCheck} />
          Potvrdi
        </button>
      </center>
    </div>
  );
};
export default SignUp;
