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
      <option value="Snimanje">Snimanje i izrada</option>
      <option value="Obelezavanje">Obeležavanje</option>
      <option value="Izrada">Izrada</option>
      <option value="Deoba">Fizička deoba</option>
      <option value="Sud">Sudska veštačenja</option>
      <option value="Omedjavanje">Omedjavanje</option>
    </select>
  );
};

export default ComboBox;
