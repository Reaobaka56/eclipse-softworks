import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceStat from './ServiceStat';

describe('ServiceStat', () => {
  it('renders label and value', () => {
    render(<ServiceStat label="Uptime" value={99} />);
    expect(screen.getByText('Uptime')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
  });
});
