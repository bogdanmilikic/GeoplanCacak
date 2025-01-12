import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogInDugme = ({
  userName,
  setUserName,
  setOpenPopUp,
  setSadrzaj,
  setNaslov,
  signUp,
  logIn,
}) => {
  const handleLogInDugme = () => {
    setNaslov("Log in");
    setSadrzaj(logIn);
    setOpenPopUp(true);
  };
  const handleSignUpDugme = () => {
    setNaslov("Sign up");
    setSadrzaj(signUp);
    setOpenPopUp(true);
  };
  const handleLogOut = () => {
    setOpenPopUp(false);
    setUserName("Prijava");
  };
  return (
    <div className="logInDugmePozicija">
      <div className="dropdown">
        <button className="dropbtn">
          <FontAwesomeIcon icon={faUser} /> {userName}
        </button>
        <div class="dropdown-content">
          {userName === "Prijava" ? (
            <>
              <center>
                <button className="logInOutDugmici" onClick={handleLogInDugme}>
                  Log in
                </button>
                <hr />
                <button className="logInOutDugmici" onClick={handleSignUpDugme}>
                  Sign up
                </button>
              </center>{" "}
            </>
          ) : (
            <center>
              <button onClick={handleLogOut} className="logInOutDugmici">
                Log out
              </button>
            </center>
          )}
        </div>
      </div>
    </div>
  );
};
export default LogInDugme;
