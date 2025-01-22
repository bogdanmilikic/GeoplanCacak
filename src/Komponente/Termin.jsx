import { faCancel } from "@fortawesome/free-solid-svg-icons/faCancel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Termin = ({
  id,
  usluga,
  datum,
  userName,
  sati,
  minuti,
  ime,
  handleOtkazi,
}) => {
  return (
    <div
      className="terminDiv"
      style={{ marginBottom: "20px", marginTop: "20px" }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "whitesmoke",
          borderRadius: "30px 30px 0px 0px",
        }}
      >
        <h1 className="terminUsluga">{usluga}</h1>
      </div>
      <hr className="terminHr" />
      <p>{datum}</p>
      <p>
        {sati} : {minuti}
      </p>
      {userName === ime ? (
        <button className="otkaziDugme" onClick={() => handleOtkazi(id)}>
          <FontAwesomeIcon icon={faCancel} /> Otkazi
        </button>
      ) : undefined}
    </div>
  );
};
export default Termin;
