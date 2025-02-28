import { useEffect, useState } from "react";
import GornjiDeo from "./Komponente/GornjiDeo";
import stilovi from "./Komponente/stilovi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStreetView,
  faPhone,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faChevronCircleUp,
  faEnvelope,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import LogInDugme from "./Komponente/LogInDugme";
import PopUp from "./Komponente/PopUp";
import SignUp from "./Komponente/SignUp";
import LogIn from "./Komponente/LogIn";
import ComboBox from "./Komponente/ComboBox";
import Termin from "./Komponente/Termin";
import lista from "./Komponente/lista";
import Switch from "react-switch";
import { Flag } from "@mui/icons-material";
import ReactCountryFlag from "react-country-flag";
import Prevodilac from "./Komponente/Prevodilac";
import tekstLista from "./Komponente/Tekst";

function App() {
  const [eMail, setEmaill] = useState("");
  const [localLista, setLocalLista] = useState(lista);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [sifra, setSifra] = useState("");
  const [popUpSadrzaj, setPopUpSadrzaj] = useState(undefined);
  //userName se zove userName jer me mrzi da menjam sve u logInDugmeNaziv :/
  const [userName, setUserName] = useState("Prijava");
  const [aktivnoDugme, setAktivnoDugme] = useState(0);
  const [comboBoxVrednost, setComboBoxVrednost] = useState("");
  const [naslov, setNaslov] = useState(undefined);
  const [brojTelefona, setBrojTelefona] = useState("");
  const [minuti, setMinuti] = useState(0);
  const [sati, setSati] = useState(0);
  const [uradiAnimaciju, setUradiAnimaciju] = useState(0);
  const [prevedi, setPrevedi] = useState(false);
  const [datum, setDatum] = useState("");
  const handleMinuti = (e) => {
    const value = e.target.value;
    if (value === "" || isNaN(value)) {
      setMinuti(0);
    } else {
      const numericValue = Math.max(0, Math.min(59, Number(value)));
      setMinuti(numericValue);
    }
  };
  const handleSati = (e) => {
    const value = e.target.value;
    if (value === "" || isNaN(value)) {
      setSati(0);
    } else {
      const numericValue = Math.max(1, Math.min(18, Number(value)));
      setSati(numericValue);
    }
  };
  const handleBroj = (e) => {
    setBrojTelefona(e.target.value);
  };
  const handleDatum = (e) => {
    setDatum(e.target.value);
  };
  const handleOtkazi = (id) => {
    const updatedTermini = localLista.filter((termin) => termin.id !== id);
    setLocalLista(updatedTermini);
  };
  const zauzetTermin = (datum, sati, minuti) => {
    return localLista.some(
      (item) =>
        item.datum === datum && item.sati === sati && item.minuti === minuti
    );
  };
  const terminUProslosti = (datum, sati, minuti) => {
    const trenutniDatum = new Date();
    const uneseniDatum = new Date(datum);
    uneseniDatum.setHours(sati);
    uneseniDatum.setMinutes(minuti);
    return uneseniDatum < trenutniDatum;
  };
  const sortirajListu = (listaZaSortiranje) => {
    return listaZaSortiranje.sort((a, b) => {
      const datumA = new Date(
        `${a.datum}T${String(a.sati).padStart(2, "0")}:${String(
          a.minuti
        ).padStart(2, "0")}`
      );
      const datumB = new Date(
        `${b.datum}T${String(b.sati).padStart(2, "0")}:${String(
          b.minuti
        ).padStart(2, "0")}`
      );

      return datumA - datumB;
    });
  };

  useEffect(() => {
    const sortiranaLista = sortirajListu(lista);
    setLocalLista(sortiranaLista);
  }, []);

  const handleZakazi = () => {
    const dodatakListi = {
      id: localLista.length + 1,
      userName: userName,
      usluga: comboBoxVrednost,
      datum: datum,
      sati: sati,
      minuti: minuti,
    };

    if (userName === "Prijava") {
      alert("Morate biti prijavljeni da bi ste zakazali termin");
      return;
    }

    if (sati < 8) {
      alert("Radno vreme počinje od 8 sati");
      setSati("");
      return;
    } else if (sati > 19) {
      alert("Molim vas izaberite termin pre 19h");
      setSati("");
      return;
    }

    if (comboBoxVrednost === "") {
      alert("Morate uneti uslugu");
      return;
    }

    if (brojTelefona === "") {
      alert("Morate uneti vaš broj telefona");
      return;
    }

    if (datum === "") {
      alert("Morate uneti datum termina");
      return;
    }

    if (terminUProslosti(datum, sati, minuti)) {
      alert("Ne možete zakatati termin u prošlosti");
      return;
    }

    if (zauzetTermin(datum, sati, minuti)) {
      alert("Termin je zauzet :(");
      return;
    }

    alert(`Termin zakazan u ${sati}:${minuti < 10 ? "0" : ""}${minuti}`);
    const novaLista = sortirajListu([...localLista, dodatakListi]);
    setLocalLista(novaLista);
  };
  const informacijeKorisnika = {
    ime: eMail,
    sifra: "sifra1234",
  };

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
          srpski={"Izaberite jednu od opcija"}
          prevod={prevedi}
        />
        {"     "}
        <FontAwesomeIcon
          icon={faChevronCircleUp}
          style={{ marginLeft: "5px" }}
        />
      </p>
    </div>,
    <div className="divSadrzaj">
      <Prevodilac
        engleski={tekstLista[0].engleski}
        prevod={prevedi}
        srpski={tekstLista[0].srpski}
      />
    </div>,
    <div className="divSadrzaj">
      <p className="sadrzajNaslov">
        <Prevodilac srpski={"Kontakt"} engleski={"Contact"} prevod={prevedi} />
      </p>
      <hr />
      <p className="sadrzaj">
        <FontAwesomeIcon icon={faEnvelope} /> Email - geoplancacak@mts.rs /
        milan.geoplan@gmail.com
        <br />
        <FontAwesomeIcon icon={faPhone} style={{ marginTop: "10px" }} /> Tel/Fax
        - 032/341 368 /// 064/133 71 58
        <br />
        <FontAwesomeIcon
          icon={faStreetView}
          style={{ marginTop: "10px" }}
        />{" "}
        <Prevodilac engleski={"Street"} srpski={"Ulica"} prevod={prevedi} />{" "}
        -32000 Čačak, Kralja Petra I br.30
        <br />
        <FontAwesomeIcon icon={faMap} style={{ marginTop: "10px" }} />{" "}
        <Prevodilac
          engleski={"Location"}
          srpski={"Lokacija"}
          prevod={prevedi}
        />
        :
        <center>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.1868052831746!2d20.345789348121226!3d43.8933976209781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757721121a7b28b%3A0x4c37e4ab230a399f!2zR2VvUGzQsG4!5e0!3m2!1ssr!2srs!4v1736286608564!5m2!1ssr!2srs"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lokacija"
          ></iframe>
        </center>
      </p>
    </div>,
    <div className="divSadrzaj">
      <Prevodilac
        engleski={tekstLista[1].engleski}
        srpski={tekstLista[1].srpski}
        prevod={prevedi}
      />
    </div>,
    <div className="divSadrzaj">
      {userName === "Prijava" ? (
        <br />
      ) : (
        <p className="sadrzaj">
          Morate biti prijavljeni da bi ste zakazali termin.
        </p>
      )}
    </div>,
  ];

  const [animate, setAnimate] = useState(false);
  const forma = (
    <div className="divSadrzaj">
      <div className="zakazivanjeDiv">
        <label className="zakazivanjeLabel">Vrsta usluge:</label>
        <ComboBox
          vrednost={comboBoxVrednost}
          setVrednost={setComboBoxVrednost}
        />
        <br />
        <br />
        <label className="zakazivanjeLabel">Broj telefona:</label>
        <input
          className="zakazivanjeDatum"
          style={{
            appearance: "textfield", // Cross-browser support for most browsers
            MozAppearance: "textfield", // Firefox-specific
            WebkitAppearance: "none", // WebKit-based browsers
          }}
          onChange={handleBroj}
          value={brojTelefona}
          placeholder="Unesite vaš broj telefona"
        ></input>
        <br />
        <br />
        <label className="zakazivanjeLabel">Datum:</label>
        <input
          type="date"
          value={datum}
          className="zakazivanjeDatum"
          onChange={handleDatum}
        ></input>
        <label className="zakazivanjeLabel" style={{ marginLeft: "10px" }}>
          Vreme:
        </label>
        <input
          min={8}
          max={18}
          className="zakazivanjeDatum"
          value={sati}
          onChange={handleSati}
          style={{ width: "50px" }}
          type="number"
        ></input>
        {"  "}
        <font style={{ fontSize: "30px" }}>:</font>
        <input
          className="zakazivanjeDatum"
          value={minuti}
          onChange={handleMinuti}
          style={{ width: "50px" }}
          type="number"
        ></input>
        {"  "}
        <center>
          <button
            className="popUpDugme"
            style={{ marginTop: "20px" }}
            onClick={handleZakazi}
          >
            <FontAwesomeIcon icon={faCheck} /> Potvrdi
          </button>
        </center>
      </div>
    </div>
  );
  const handlePrevedi = () => {
    setPrevedi(!prevedi);
  };
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [uradiAnimaciju]);
  useEffect(() => {
    console.log("eMail value changed:", eMail); // Logs the value every time it changes
    console.log("Vrednost objekta se promenio", informacijeKorisnika.ime);
  }, [eMail, informacijeKorisnika.ime]);
  useEffect(() => {
    if (minuti < 0) {
      setMinuti(0);
    }
    console.log(sati, ":", minuti);
  }, [sati, minuti]);

  return (
    <>
      <div className="bg"></div>
      <div>
        {openPopUp && (
          <PopUp
            naslov={naslov}
            setOpenPopUp={setOpenPopUp}
            sadrzaj={popUpSadrzaj}
          />
        )}

        <header>
          <GornjiDeo
            prevedi={prevedi}
            slika="GeoPlanLogo.png"
            aktivno={aktivnoDugme}
            setAktivno={setAktivnoDugme}
            setUradiAnimaciju={setUradiAnimaciju}
          />
          <div className="logInDugmePozicija">
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
                    countryCode="RS"
                    style={{
                      fontSize: "30px",
                    }}
                  />
                }
                checkedIcon={
                  <ReactCountryFlag
                    countryCode="GB"
                    style={{ fontSize: "30px", paddingRight: "20px" }}
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
        </header>
        <br />
        <main>
          <div className={`divCentriranje ${animate ? "animate" : ""}`}>
            {aktivnoDugme === 4 ? forma : sadrzajNiz[aktivnoDugme]}
          </div>
          {aktivnoDugme === 4 ? (
            <div className={`divCentriranje ${animate ? "animate" : ""}`}>
              <p
                className="sadrzajNaslov"
                style={{
                  color: "white",
                  backgroundColor: "rgb(46, 60, 70, 0.7)",
                  textAlign: "center",
                  borderRadius: "10px",
                  padding: "15px",
                }}
              >
                Zakazani termini
              </p>
            </div>
          ) : undefined}
          {aktivnoDugme === 4 ? (
            <div className={`divCentriranje ${animate ? "animate" : ""}`}>
              <div className="parentContainer">
                <div className="terminList">
                  {localLista.map((item) => (
                    <Termin
                      id={item.id}
                      key={item.id}
                      usluga={item.usluga}
                      datum={item.datum}
                      userName={item.userName}
                      sati={item.sati}
                      minuti={item.minuti}
                      ime={userName}
                      handleOtkazi={handleOtkazi}
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : undefined}
        </main>
      </div>
    </>
  );
}

export default App;
