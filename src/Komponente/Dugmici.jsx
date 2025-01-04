const Dugmici = ({ children, aktivno, brojDugmeta, handleUradi }) => {
  return (
    <button
      class={
        aktivno === brojDugmeta ? "gornjiDeoDugmiciAktivno" : "gornjiDeoDugmici"
      }
      onClick={handleUradi}
    >
      {children}
    </button>
  );
};
export default Dugmici;
