import { useEffect, useState } from "react";
import GornjiDeo from "./Komponente/GornjiDeo";
import "./Komponente/stilovi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStreetView,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faChevronCircleUp,
  faEnvelope,
  faMap,
} from "@fortawesome/free-solid-svg-icons";

import Switch from "react-switch";

import ReactCountryFlag from "react-country-flag";
import Prevodilac from "./Komponente/Prevodilac";
import tekstLista from "./Komponente/Tekst";

import Pitanje from "./Komponente/Pitanje";

import DonjiDeo from "./Komponente/DonjiDeo";
import Galerija from "./Komponente/Galerija";

function App() {
  //userName se zove userName jer me mrzi da menjam sve u logInDugmeNaziv :/

  const [aktivnoDugme, setAktivnoDugme] = useState(0);

  const [uradiAnimaciju, setUradiAnimaciju] = useState(0);
  const [prevedi, setPrevedi] = useState(false);

  const slike = [
    "Slika1.jpg",
    "Slika2.jpg",
    "Slika3.jpg",
    "Slika4.jpg",
    "Slika5.jpg",
    "Slika6.jpg",
    "Slika7.jpg",
  ];
  const [poruka, setPoruka] = useState({
    srb: "",
    eng: "",
  });

  const sadrzajNiz = [
    <div className="divSadrzaj">
      <p className="sadrzaj" style={{ textAlign: "center" }}>
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          style={{ marginRight: "5px" }}
        />
        {"     "}
        <Prevodilac
          engleski={"Choose one of the options"}
          srpski={"Изаберите једну од опција"}
          prevod={prevedi}
        />
        {"     "}
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          style={{ marginLeft: "5px" }}
        />
      </p>
    </div>,
    <div
      className="divSadrzaj"
      style={window.innerWidth >= 800 ? { width: "90%" } : null}
    >
      <Prevodilac
        engleski={tekstLista[0].engleski}
        prevod={prevedi}
        srpski={tekstLista[0].srpski}
      />
    </div>,
    <div className="divSadrzaj">
      <p className="sadrzajNaslov">
        <Prevodilac srpski={"Контакт"} engleski={"Contact"} prevod={prevedi} />
      </p>
      <hr />
      <div className="sadrzaj">
        <FontAwesomeIcon icon={faEnvelope} /> Email - geoplancacak@mts.rs /
        milan.geoplan@gmail.com
        <br />
        <FontAwesomeIcon icon={faPhone} style={{ marginTop: "10px" }} />{" "}
        Тел/Факс - 032/341 368 /// 064/133 71 58
        <br />
        <FontAwesomeIcon
          icon={faStreetView}
          style={{ marginTop: "10px" }}
        />{" "}
        <Prevodilac engleski={"Street"} srpski={"Улица"} prevod={prevedi} /> -
        <Prevodilac
          engleski={" 32000 Čačak, Kralja Petra I br.30"}
          srpski={" 32000 Чачак, Краља Петра I бр.30"}
          prevod={prevedi}
        />
        <br />
        <FontAwesomeIcon icon={faClock} style={{ marginTop: "10px" }} />{" "}
        <Prevodilac
          engleski={"Work time"}
          srpski={"Радно време"}
          prevod={prevedi}
        />{" "}
        :
        <ul style={{ marginLeft: "50px" }}>
          <li>
            <Prevodilac
              prevod={prevedi}
              engleski={"Monday-Friday"}
              srpski={"Понедељак-Петак"}
            />{" "}
            : 07:00-15:00
          </li>
          <li>
            <Prevodilac
              prevod={prevedi}
              engleski={"Saturday-Sunday"}
              srpski={"Subota-Nedelja"}
            />
            :{" "}
            <Prevodilac
              prevod={prevedi}
              engleski={"closed"}
              srpski={"zatvoreno"}
            />
          </li>
        </ul>
        <FontAwesomeIcon icon={faMap} style={{ marginTop: "5px" }} />{" "}
        <Prevodilac
          engleski={"Location"}
          srpski={"Локација"}
          prevod={prevedi}
        />
        :
        <center>
          <iframe
            title="Mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.1783104725055!2d20.344077426189436!3d43.89357357109168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa8c75bda6b72a62f%3A0x47e411746b24cbbc!2sGEOPLAN%20%C4%8CA%C4%8CAK%20-%20GEOMETAR!5e0!3m2!1ssr!2srs!4v1764458083250!5m2!1ssr!2srs"
          ></iframe>
        </center>
        <p className="sadrzajNaslov">
          <Prevodilac
            prevod={prevedi}
            srpski={"Поставите питање"}
            engleski={"Ask a question"}
          />{" "}
        </p>{" "}
        <hr />
        <Pitanje prevod={prevedi} poruka={poruka} setPoruka={setPoruka} />
      </div>
    </div>,
    <div className="divSadrzaj" style={{ width: "95%" }}>
      <p className="sadrzajNaslov">
        <Prevodilac srpski={"Галерија"} engleski={"Gallery"} prevod={prevedi} />
      </p>
      <hr />
      <Galerija slike={slike} prevod={prevedi} />
    </div>,
  ];

  const [animate, setAnimate] = useState(false);

  const handlePrevedi = () => {
    setPrevedi(!prevedi);
  };
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [uradiAnimaciju]);

  return (
    <>
      <div className="bg" />
      <div style={{ position: "relative" }}>
        <header>
          <GornjiDeo
            prevedi={prevedi}
            slika="GeoPlanLogo.png"
            aktivno={aktivnoDugme}
            setAktivno={setAktivnoDugme}
            setUradiAnimaciju={setUradiAnimaciju}
          />
          <div className="logInDugmePozicija">
            <div style={{ position: "relative" }}>
              <div className="switchPolje">
                <p style={{ marginBottom: "5px" }}>
                  {" "}
                  <Prevodilac
                    engleski={"Language:"}
                    srpski={"Jezik:"}
                    prevod={prevedi}
                  />
                </p>

                {"   "}
                <Switch
                  onColor="rgb(255,255,255,0.6)"
                  offColor="rgb(255,255,255,0.6)"
                  checked={prevedi}
                  onChange={handlePrevedi}
                  uncheckedIcon={
                    <ReactCountryFlag
                      svg
                      countryCode="RS"
                      style={{
                        fontSize: "30px",
                      }}
                    />
                  }
                  checkedIcon={
                    <ReactCountryFlag
                      svg
                      countryCode="GB"
                      style={{
                        fontSize: "30px",
                      }}
                    />
                  }
                />
                <br />

                <p style={{ marginTop: "5px" }}>
                  <Prevodilac
                    engleski={"English"}
                    srpski={"Srpski"}
                    prevod={prevedi}
                  />
                </p>
              </div>
            </div>
          </div>
        </header>
        <br />
        <main>
          <div className={`divCentriranje ${animate ? "animate" : ""}`}>
            {sadrzajNiz[aktivnoDugme]}
          </div>
        </main>
      </div>

      <DonjiDeo
        pozicija={
          aktivnoDugme === 0 ||
          (window.innerHeight > 1080 && window.innerWidth > 1000)
            ? "absolute"
            : "relative"
        }
      />
    </>
  );
}

export default App;
