import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dugmici from "./Dugmici";
import {
  faCalendarCheck,
  faCircleInfo,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";

import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons/faCheckToSlot";
const GornjiDeo = ({ slika, setSadrzaj, sadrzaj, aktivno, setAktivno }) => {
  const handleInfo = () => {
    setAktivno(1);
    setSadrzaj(sadrzaj[0]);
  };
  const handleKontakt = () => {
    setAktivno(2);
    setSadrzaj(sadrzaj[1]);
  };
  const handleUsluge = () => {
    setAktivno(3);
    setSadrzaj(sadrzaj[2]);
  };
  const handleZakazivanje = () => {
    setAktivno(4);
    setSadrzaj(sadrzaj[3]);
  };
  return (
    <div class="gornjiDeoDiv">
      <menu>
        <center>
          {" "}
          <img src={slika} className="logo" alt="Nema slike" />
        </center>

        <Dugmici aktivno={aktivno} brojDugmeta={1} handleUradi={handleInfo}>
          <FontAwesomeIcon icon={faCircleInfo} /> O nama
        </Dugmici>
        <Dugmici aktivno={aktivno} brojDugmeta={2} handleUradi={handleKontakt}>
          {" "}
          <FontAwesomeIcon icon={faContactCard} /> Kontakt
        </Dugmici>
        <Dugmici aktivno={aktivno} brojDugmeta={3} handleUradi={handleUsluge}>
          <FontAwesomeIcon icon={faCheckToSlot} /> Usluge
        </Dugmici>
        <Dugmici
          aktivno={aktivno}
          brojDugmeta={4}
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
