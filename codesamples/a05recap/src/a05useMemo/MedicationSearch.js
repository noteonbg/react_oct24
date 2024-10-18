import React, { useState, useMemo } from 'react';

const MedicationSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const medications = useMemo(() => [
    { id: 1, name: 'Aspirin' },
    { id: 2, name: 'Ibuprofen' },
    { id: 3, name: 'Paracetamol' },
    { id: 4, name: 'Antihistamine' },
  ], []);

  // Memoized filtered medications based on the search term
  const filteredMedications = useMemo(() => {
    return medications.filter((med) =>
      med.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, medications]);

  return (
    <div>
      <h1>Medication Search</h1>
      <input
        type="text"
        placeholder="Search for a medication"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h2>Results:</h2>
      <ul>
        {filteredMedications.map((med) => (
          <li key={med.id}>{med.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicationSearch;


/*


State Management:

The component uses useState to manage searchTerm.
Memoized Medications Array:

The medications array is memoized using useMemo, ensuring it remains the same across renders unless its dependencies change. In this case, it has no dependencies and will be created only once.
Memoized Filtered Medications:

The filteredMedications variable is calculated using useMemo, filtering the medications array based on the searchTerm.
Rendering:

The component renders an input field for the user to search and displays the filtered list of medications.


Optimization: By memoizing both the medications array and the filtered result, we ensure that neither is recalculated unnecessarily, which can be beneficial if the array grows larger.

Clarity: It separates the data definition from the logic for filtering, improving the readability of the code.

*/