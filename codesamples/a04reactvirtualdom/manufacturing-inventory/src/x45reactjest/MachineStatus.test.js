// src/MachineStatus.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MachineStatus from './MachineStatus';

describe('MachineStatus Component', () => {
  const machine = { id: 1, name: 'CNC Machine', status: 'Operational' };

  test('renders machine name and initial status', () => {
    const { getByText } = render(<MachineStatus machine={machine} />);

    expect(getByText('CNC Machine')).toBeInTheDocument();
    expect(getByText('Status: Operational')).toBeInTheDocument();
  });

  test('toggles status when button is clicked', () => {
    const { getByText } = render(<MachineStatus machine={machine} />);

    // Initial status
    expect(getByText('Status: Operational')).toBeInTheDocument();

    // Click to set to Under Maintenance
    fireEvent.click(getByText('Set to Under Maintenance'));

    // Check new status
    expect(getByText('Status: Under Maintenance')).toBeInTheDocument();
    expect(getByText('Set to Operational')).toBeInTheDocument();

    // Click to set back to Operational
    fireEvent.click(getByText('Set to Operational'));

    // Check status again
    expect(getByText('Status: Operational')).toBeInTheDocument();
  });
});
