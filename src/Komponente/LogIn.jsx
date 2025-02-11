import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const LogIn = ({ userName, setUserName, password, setOpenPopUp }) => {
  const [sifra, setSifra] = useState("");
  const [korisnik, setKorisnikk] = useState("");
  const handleChangeUserName = (e) => {
    setKorisnikk(e.target.value);
  };
  const handleChangeSifra = (e) => {
    setSifra(e.target.value);
  };
  const handleClickPotvrdi = () => {
    if (password === sifra && userName === korisnik) {
      alert("Uspesno prijavljivanje ");
      setUserName(korisnik);
      setOpenPopUp(false);
    } else {
      alert("Uneti podaci se ne poklapaju !");
      setKorisnikk("");
      setSifra("");
    }
  };
  useEffect(() => {
    console.log("ovo je korisnicko ime", userName);
    console.log("ovo je sifra", password);
  }, [userName, password]);

  return (
    <div style={{ marginTop: "20px" }}>
      <label className="popUpLabel">
        <FontAwesomeIcon icon={faEnvelope} /> E-mail:
      </label>
      <input
        value={korisnik}
        onChange={handleChangeUserName}
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
        onChange={handleChangeSifra}
        className="popUpInput"
      ></input>
      <br />
      <center>
        <button className="popUpDugme" onClick={handleClickPotvrdi}>
          <FontAwesomeIcon icon={faCheck} />
          {"   "}Potvrdi
        </button>
      </center>
    </div>
  );
};
export default LogIn;
