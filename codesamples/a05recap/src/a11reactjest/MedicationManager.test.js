//npm install --save-dev @testing-library/react @testing-library/dom

//Look at the link https://www.robinwieruch.de/react-testing-library/


import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MedicationManager from './MedicationManager';

describe('MedicationManager', () => {
  test('renders the component', () => {
    render(<MedicationManager />);
    expect(screen.getByText(/medication manager/i)).toBeInTheDocument();
  });

  test('adds a medication to the list', () => {
    render(<MedicationManager />);
    const input = screen.getByPlaceholderText(/enter medication name/i);
    const button = screen.getByText(/add medication/i);

    fireEvent.change(input, { target: { value: 'Aspirin' } });
    fireEvent.click(button);

    expect(screen.getByText(/aspirin/i)).toBeInTheDocument();
  });

  test('displays error message when trying to add an empty medication', () => {
    render(<MedicationManager />);
    const button = screen.getByText(/add medication/i);

    fireEvent.click(button);

    expect(screen.getByText(/medication name is required/i)).toBeInTheDocument();
  });

  test('deletes a medication from the list', () => {
    render(<MedicationManager />);
    const input = screen.getByPlaceholderText(/enter medication name/i);
    const button = screen.getByText(/add medication/i);

    fireEvent.change(input, { target: { value: 'Ibuprofen' } });
    fireEvent.click(button);
    
    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/ibuprofen/i)).not.toBeInTheDocument();
  });
});


/*

Rendering the Component:

We check if the MedicationManager component renders correctly by looking for its title.
Adding a Medication:

We simulate entering a medication name in the input field and clicking the "Add Medication" button. We then check if the medication appears in the list.
Error Handling:

We test the error message that should be displayed if the user tries to add an empty medication name.
Deleting a Medication:

After adding a medication, we simulate clicking the "Delete" button next to the medication. We then check that the medication is removed from the list.
Step 3: Run the Tests
You can run your tests using the following command:


npm test


*/