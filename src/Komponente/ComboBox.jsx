const ComboBox = ({ vrednost, setVrednost }) => {
  const handleComboBox = (e) => {
    setVrednost(e.target.value); // Update the parent state with the selected value
  };

  return (
    <select
      name="usluge"
      value={vrednost}
      onChange={handleComboBox} // Ensure onChange is on the select element
      className="comboBoxKutija"
    >
      <option value="" disabled>
        Izaberite uslugu
      </option>
      <option value="snimanje">Snimanje i izrada</option>
      <option value="obelezavanje">Obeležavanje</option>
      <option value="izrada">Izrada</option>
      <option value="deoba">Fizička deoba</option>
      <option value="sud">Sudska veštačenja</option>
      <option value="omedjavanje">Omedjavanje</option>
    </select>
  );
};

export default ComboBox;
