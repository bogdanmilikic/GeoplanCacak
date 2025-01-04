import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dugmici from "./Dugmici";
import {
  faCalendarCheck,
  faCircleInfo,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const GornjiDeo = ({ slika }) => {
  const [aktivno, setAktivno] = useState(0);
  const handleInfo = () => {
    setAktivno(1);
  };
  const handleKontakt = () => {
    setAktivno(2);
  };
  const handleZakazivanje = () => {
    setAktivno(3);
  };
  return (
    <div class="gornjiDeoDiv">
      <menu>
        <img src={slika} className="logo" alt="Nema slike" />
        <Dugmici aktivno={aktivno} brojDugmeta={1} handleUradi={handleInfo}>
          <FontAwesomeIcon icon={faCircleInfo} /> O nama
        </Dugmici>
        <Dugmici aktivno={aktivno} brojDugmeta={2} handleUradi={handleKontakt}>
          {" "}
          <FontAwesomeIcon icon={faContactCard} /> Kontakt
        </Dugmici>
        <Dugmici
          aktivno={aktivno}
          brojDugmeta={3}
          handleUradi={handleZakazivanje}
        >
          {" "}
          <FontAwesomeIcon icon={faCalendarCheck} /> Zakazivanje
        </Dugmici>
      </menu>
    </div>
  );
};
export default GornjiDeo;
