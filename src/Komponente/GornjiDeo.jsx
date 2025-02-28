import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dugmici from "./Dugmici";
import {
  faCalendarCheck,
  faCircleInfo,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";

import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons/faCheckToSlot";
import Prevodilac from "./Prevodilac";
const GornjiDeo = ({
  slika,
  aktivno,
  setAktivno,
  prijava,
  setUradiAnimaciju,
  prevedi,
}) => {
  const handleInfo = () => {
    setAktivno(1);
    setUradiAnimaciju(1);
  };
  const handleKontakt = () => {
    setAktivno(2);
    setUradiAnimaciju(2);
  };
  const handleUsluge = () => {
    setAktivno(3);
    setUradiAnimaciju(3);
  };
  const handleZakazivanje = () => {
    setAktivno(4);
    setUradiAnimaciju(4);
  };
  return (
    <div class="gornjiDeoDiv">
      <menu>
        <div className="centrirajSliku">
          {" "}
          <img
            src={slika}
            className="logo"
            alt="Nema slike"
            style={{
              backgroundColor: "rgb(255,255,255,0.6)",
              borderRadius: "30px",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          />
        </div>

        <Dugmici aktivno={aktivno} brojDugmeta={1} handleUradi={handleInfo}>
          <FontAwesomeIcon icon={faCircleInfo} />{" "}
          <Prevodilac engleski={"About"} srpski={"O nama"} prevod={prevedi} />
        </Dugmici>
        <Dugmici aktivno={aktivno} brojDugmeta={2} handleUradi={handleKontakt}>
          {" "}
          <FontAwesomeIcon icon={faContactCard} />{" "}
          <Prevodilac
            srpski={"Kontakt"}
            engleski={"Contact"}
            prevod={prevedi}
          />
        </Dugmici>
        <Dugmici aktivno={aktivno} brojDugmeta={3} handleUradi={handleUsluge}>
          <FontAwesomeIcon icon={faCheckToSlot} />{" "}
          <Prevodilac
            srpski={"Usluge"}
            engleski={"Services"}
            prevod={prevedi}
          />
        </Dugmici>
        <Dugmici
          aktivno={aktivno}
          brojDugmeta={4}
          handleUradi={handleZakazivanje}
        >
          {" "}
          <FontAwesomeIcon icon={faCalendarCheck} /> Zakazivanje
        </Dugmici>
        {prijava}
      </menu>
    </div>
  );
};
export default GornjiDeo;
