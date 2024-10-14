// src/MachineList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import MachineList from './MachineList';

describe('MachineList Component', () => {
  test('renders the machine list correctly', () => {
    const machines = [
      { id: 1, name: 'CNC Machine', status: 'Operational' },
      { id: 2, name: 'Lathe Machine', status: 'Under Maintenance' },
    ];

    const { getByText } = render(<MachineList machines={machines} />);

    expect(getByText('Machine List')).toBeInTheDocument();
    expect(getByText('CNC Machine: Operational')).toBeInTheDocument();
    expect(getByText('Lathe Machine: Under Maintenance')).toBeInTheDocument();
  });

  test('renders message when no machines are available', () => {
    const { getByText } = render(<MachineList machines={[]} />);

    expect(getByText('No machines available.')).toBeInTheDocument();
  });
});
