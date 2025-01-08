import { useEffect, useState } from "react";
import GornjiDeo from "./Komponente/GornjiDeo";
import stilovi from "./Komponente/stilovi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView } from "@fortawesome/free-solid-svg-icons/faStreetView";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { faEnvelope, faMap } from "@fortawesome/free-solid-svg-icons";

const sadrzajNiz = [
  <div className="divSadrzaj">
    <p className="sadrzajNaslov">O nama</p>
    <hr />
    <p className="sadrzaj">
      Geodetski biro ГЕОПЛАН osnovan je s ciljem pružanja vrhunskih geodetskih
      usluga koje zadovoljavaju najviše standarde u struci. Naš tim čine iskusni
      geodeti sa dugogodišnjim iskustvom, posvećeni preciznosti i
      profesionalizmu u svakom projektu. Koristimo najmoderniju opremu i
      tehnologiju kako bismo obezbedili pouzdane rezultate i ispunili specifične
      zahteve naših klijenata. Bez obzira na veličinu projekta, pristupamo
      svakom zadatku s istom pažnjom i posvećenošću. Kroz godine rada stekli smo
      poverenje mnogih klijenata zahvaljujući stručnosti, tačnosti i brzim
      rokovima. Naša misija je da budemo vaš pouzdan partner u svim geodetskim
      poslovima, osiguravajući kvalitetne rezultate koji podržavaju vaše
      projekte. Verujemo u važnost preciznosti, transparentnosti i kontinuiranog
      usavršavanja, kako bismo ostali lideri u oblasti geodezije.
    </p>
  </div>,
  <div className="divSadrzaj">
    <p className="sadrzajNaslov">Kontakt</p>
    <hr />
    <p className="sadrzaj">
      <FontAwesomeIcon icon={faEnvelope} /> Email - geo.plan@eune.rs
      <br />
      <FontAwesomeIcon icon={faPhone} /> Tel/Fax - 032/341 368 /// 064/133 71 58
      <br />
      <FontAwesomeIcon icon={faStreetView} /> Ulica -32000 Čačak, Kralja Petra I
      br.30
      <br />
      <FontAwesomeIcon icon={faMap} /> Lokacija:
      <center>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.1868052831746!2d20.345789348121226!3d43.8933976209781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4757721121a7b28b%3A0x4c37e4ab230a399f!2zR2VvUGzQsG4!5e0!3m2!1ssr!2srs!4v1736286608564!5m2!1ssr!2srs"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
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
        <li>
          {" "}
          Omeđavanje – Utvrđivanje i označavanje granica parcela. Fizička deoba
          – Razdvajanje parcela u skladu sa važećim propisima.{" "}
        </li>
        <li>
          Sudska veštačenja – Stručna mišljenja i analize za potrebe sudskih
          procesa.
        </li>
      </ul>
    </p>
  </div>,
];
function App() {
  const [sadrzaj, setSadrzaj] = useState("Izaberite jednu od opcija");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500);
    return () => clearTimeout(timeout);
  }, [sadrzaj]);

  return (
    <div>
      <header>
        <GornjiDeo
          slika="Logo.png"
          sadrzaj={sadrzajNiz}
          setSadrzaj={setSadrzaj}
        />
      </header>
      <br />
      <main>
        <div className={`divCentriranje ${animate ? "animate" : ""}`}>
          {sadrzaj}
        </div>
      </main>
    </div>
  );
}

export default App;
