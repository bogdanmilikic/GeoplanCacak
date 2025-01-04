import Dugmici from "./Dugmici";
const GornjiDeo = ({ slika }) => {
  return (
    <div class="gornjiDeoDiv">
      <menu>
        <img src={slika} className="logo" alt="Nema slike" />
        <Dugmici>O nama</Dugmici>
        <Dugmici>aaa</Dugmici>
        <Dugmici>aaa</Dugmici>
        <Dugmici>aaa</Dugmici>
        <Dugmici>aaa</Dugmici>
      </menu>
    </div>
  );
};
export default GornjiDeo;
