const Prevodilac = ({ engleski, srpski, prevod }) => {
  let tekst = srpski;
  if (prevod === true) {
    tekst = engleski;
  }
  return tekst;
};
export default Prevodilac;
