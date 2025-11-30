import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceBadge from './ServiceBadge';

describe('ServiceBadge', () => {
  it('renders an icon and label', () => {
    render(<ServiceBadge icon="fa-solid fa-server" label="ML" />);
    expect(screen.getByText('ML')).toBeInTheDocument();
  });
});
