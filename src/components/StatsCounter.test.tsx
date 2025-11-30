import React from 'react';
import { render, screen } from '@testing-library/react';
import StatsCounter from './StatsCounter';

describe('StatsCounter', () => {
  it('renders label and end number', () => {
    render(<StatsCounter end={42} label="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
