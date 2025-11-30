import React from 'react';
import { render, screen } from '@testing-library/react';
import TechStack from './TechStack';

describe('TechStack', () => {
  it('renders technology stack heading', () => {
    render(<TechStack />);
    expect(screen.getByText('Technology Stack')).toBeInTheDocument();
  });
});
