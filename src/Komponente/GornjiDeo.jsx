import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dugmici from "./Dugmici";
import {
  faCircleInfo,
  faContactCard,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

import Prevodilac from "./Prevodilac";
import { useEffect, useState } from "react";

const GornjiDeo = ({
  slika,
  aktivno,
  setAktivno,
  prijava,
  setUradiAnimaciju,
  prevedi,
}) => {
  const [ekran, setEkran] = useState(window.innerWidth);

  const handleInfo = () => {
    setAktivno(1);
    setUradiAnimaciju(1);
  };

  const handleKontakt = () => {
    setAktivno(2);
    setUradiAnimaciju(2);
  };

  const handleGalerija = () => {
    setAktivno(3);
    setUradiAnimaciju(3);
  };
  useEffect(() => {
    const handleResize = () => {
      setEkran(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (aktivno === 3) {
      setAktivno(0);
      setTimeout(() => setAktivno(3), 0);
    }
  }, [ekran, aktivno, setAktivno]);

  return (
    <div className="gornjiDeoDiv">
      <menu>
        <div className="centrirajSliku">
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
          <FontAwesomeIcon icon={faCircleInfo} />
          <Prevodilac engleski={"About"} srpski={"О нама"} prevod={prevedi} />
        </Dugmici>

        <Dugmici aktivno={aktivno} brojDugmeta={2} handleUradi={handleKontakt}>
          <FontAwesomeIcon icon={faContactCard} />
          <Prevodilac
            srpski={"Контакт"}
            engleski={"Contact"}
            prevod={prevedi}
          />
        </Dugmici>

        <Dugmici aktivno={aktivno} brojDugmeta={3} handleUradi={handleGalerija}>
          <FontAwesomeIcon icon={faImages} />
          <Prevodilac
            prevod={prevedi}
            srpski={"Галерија"}
            engleski={"Gallery"}
          />
        </Dugmici>

        {prijava}
      </menu>
    </div>
  );
};

export default GornjiDeo;
