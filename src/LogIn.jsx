import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const LogIn = ({ userName, setUserName, sifra, setSifra }) => {
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangeSifra = (e) => {
    setSifra(e.target.value);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <label className="popUpLabel">
        <FontAwesomeIcon icon={faEnvelope} /> E-mail:
      </label>
      <input
        value={userName}
        handleChange={handleChangeUserName}
        className="popUpInput"
      ></input>
      <br />
      <br />
      <label className="popUpLabel">
        <FontAwesomeIcon icon={faLock} /> Šifra:
      </label>
      <input
        style={{ marginLeft: "38px" }}
        value={sifra}
        handleChange={handleChangeSifra}
        className="popUpInput"
      ></input>
      <br />
      <center>
        <button className="popUpDugme">
          <FontAwesomeIcon icon={faCheck} />
          {"   "}Potvrdi
        </button>
      </center>
    </div>
  );
};
export default LogIn;
