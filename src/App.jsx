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

function App() {
  const [eMail, setEmaill] = useState("");
  const [openPopUp, setOpenPopUp] = useState(false);
  const [sifra, setSifra] = useState("");
  const [popUpSadrzaj, setPopUpSadrzaj] = useState(undefined);
  //userName se zove userName jer me mrzi da menjam sve u logInDugmeNaziv :/
  const [userName, setUserName] = useState("Prijava");
  const [aktivnoDugme, setAktivnoDugme] = useState(0);
  const [comboBoxVrednost, setComboBoxVrednost] = useState("");
  const [naslov, setNaslov] = useState(undefined);
  const [brojTelefona, setBrojTelefona] = useState("");
  const [minuti, setMinuti] = useState("M");
  const [sati, setSati] = useState("H");
  const [datum, setDatum] = useState("");
  function isString(a) {
    if (typeof a === "string") {
      return true;
    } else {
      return false;
    }
  }

  const handleMinuti = (e) => {
    setMinuti(e.target.value);
  };
  const handleSati = (e) => {
    setSati(e.target.value);
  };
  const handleBroj = (e) => {
    setBrojTelefona(e.target.value);
  };
  const handleDatum = (e) => {
    setDatum(e.target.value);
  };
  const handleZakazi = () => {
    if (sati < 8) {
      alert("Radno vreme počinje od 8 sati");
      setSati(null);
      return 0;
    } else if (sati > 19 || isString(sati) === true) {
      alert("Molim vas izaberite termin pre 19h");
      setSati(null);
      return 0;
    } else if (minuti < 0 || isString(minuti) === true) {
      setMinuti(null);
      alert("Molim vas unesite vrednost minuta veću ili jednaku nuli");
      return 0;
    } else if (minuti > 59) {
      alert("Molim vas unesite vrednost minuta manju od 60");
      return 0;
    } else if (comboBoxVrednost === "") {
      alert("Molim vas izaberite vrstu usluge");
      return 0;
    }
  };

  const informacijeKorisnika = {
    ime: eMail,
    sifra: "sifra1234",
  };
  //sadrzajNiz prebaciti u GornjiDeo.jsx da bi radila forma

  const sadrzajNiz = [
    <div className="divSadrzaj">
      <p className="sadrzajNaslov">O nama</p>
      <hr />
      <p className="sadrzaj">
        Geodetski biro ГЕОПЛАН osnovan je s ciljem pružanja vrhunskih geodetskih
        usluga koje zadovoljavaju najviše standarde u struci. Naš tim čine
        iskusni geodeti sa dugogodišnjim iskustvom, posvećeni preciznosti i
        profesionalizmu u svakom projektu. Koristimo najmoderniju opremu i
        tehnologiju kako bismo obezbedili pouzdane rezultate i ispunili
        specifične zahteve naših klijenata. Bez obzira na veličinu projekta,
        pristupamo svakom zadatku s istom pažnjom i posvećenošću. Kroz godine
        rada stekli smo poverenje mnogih klijenata zahvaljujući stručnosti,
        tačnosti i brzim rokovima. Naša misija je da budemo vaš pouzdan partner
        u svim geodetskim poslovima, osiguravajući kvalitetne rezultate koji
        podržavaju vaše projekte. Verujemo u važnost preciznosti,
        transparentnosti i kontinuiranog usavršavanja, kako bismo ostali lideri
        u oblasti geodezije.
      </p>
    </div>,
    <div className="divSadrzaj">
      <p className="sadrzajNaslov">Kontakt</p>
      <hr />
      <p className="sadrzaj">
        <FontAwesomeIcon icon={faEnvelope} /> Email - geo.plan@eune.rs
        <br />
        <FontAwesomeIcon icon={faPhone} /> Tel/Fax - 032/341 368 /// 064/133 71
        58
        <br />
        <FontAwesomeIcon icon={faStreetView} /> Ulica -32000 Čačak, Kralja Petra
        I br.30
        <br />
        <FontAwesomeIcon icon={faMap} /> Lokacija:
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
      <p className="sadrzajNaslov">Usluge</p>
      <hr />
      <p className="sadrzaj">
        Naše usluge obuhvataju:
        <ul>
          <li>
            Snimanje i izrada podloga za projektovanje – Precizne geodetske
            podloge prilagođene vašim potrebama.{" "}
          </li>
          <li>
            Obeležavanje projektovanog stanja – Profesionalno obeležavanje na
            terenu prema projektnoj dokumentaciji.
          </li>
          <li>
            {" "}
            Izrada geodetskih projekata i elaborata – Kompletna dokumentacija za
            urbanističke, građevinske i infrastrukturne projekte.
          </li>{" "}
          <li> Omeđavanje – Utvrđivanje i označavanje granica parcela.</li>{" "}
          <li>
            Fizička deoba – Razdvajanje parcela u skladu sa važećim propisima.{" "}
          </li>
          <li>
            Sudska veštačenja – Stručna mišljenja i analize za potrebe sudskih
            procesa.
          </li>
        </ul>
      </p>
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

  const [sadrzaj, setSadrzaj] = useState(
    <div className="divSadrzaj">
      <p className="sadrzaj">
        <FontAwesomeIcon icon={faChevronCircleUp} />
        {"    "}Izaberite jednu od opcija{"    "}
        <FontAwesomeIcon icon={faChevronCircleUp} />
      </p>
    </div>
  );
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
          min={0}
          max={60}
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
  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [sadrzaj]);
  useEffect(() => {
    console.log("eMail value changed:", eMail); // Logs the value every time it changes
    console.log("Vrednost objekta se promenio", informacijeKorisnika.ime);
  }, [eMail, informacijeKorisnika.ime]);
  useEffect(() => {
    if (sati > 18) {
      setSati(18);
    }
    if (sati < 8) {
      setSati(8);
    }
    if (minuti > 59) {
      setSati((staraVrednost) => staraVrednost + 1);
      setMinuti(0);
    }
    console.log(sati, ":", minuti);
  }, [sati, minuti]);

  return (
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
          slika="Logo.png"
          aktivno={aktivnoDugme}
          setAktivno={setAktivnoDugme}
          sadrzaj={sadrzajNiz}
          setSadrzaj={setSadrzaj}
        />
        <LogInDugme
          logIn={
            <LogIn
              userName={eMail}
              password={sifra}
              setUserName={setUserName}
              setOpenPopUp={setOpenPopUp}
            />
          }
          signUp={
            <SignUp
              eMail={eMail} // Pass eMail state from App
              setEmaill={setEmaill}
              setSifra={setSifra}
            />
          }
          open={openPopUp}
          naslov={naslov}
          userName={userName}
          setUserName={setUserName}
          setOpenPopUp={setOpenPopUp}
          setSadrzaj={setPopUpSadrzaj}
          setNaslov={setNaslov}
        />
      </header>
      <br />
      <main>
        <div className={`divCentriranje ${animate ? "animate" : ""}`}>
          {userName === "Prijava" && aktivnoDugme === 4 ? forma : sadrzaj}
        </div>
      </main>
    </div>
  );
}

export default App;
