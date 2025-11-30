import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MLInfrastructureCard from '../MLInfrastructureCard';

describe('MLInfrastructureCard', () => {
  it('renders Request Architecture button and calls onRequest when clicked', () => {
    const mock = vi.fn();
    const { getByRole } = render(<MLInfrastructureCard onRequest={mock} />);
    const btn = getByRole('button', { name: /request architecture/i });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
