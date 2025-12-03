import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, within } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders branding and CTA, and calls onNav when links and CTA are clicked', () => {
    const navMock = vi.fn();
    const { getByRole } = render(
      <MemoryRouter>
        <Footer onNav={navMock} />
      </MemoryRouter>
    );
    const footer = getByRole('contentinfo');
    const utils = within(footer);

    // Branding
    const brand = utils.getAllByText(/Eclipse Softworks/i)[0];
    expect(brand).toBeInTheDocument();

    // Company nav link 'About'
    const aboutBtn = utils.getByText(/about/i);
    fireEvent.click(aboutBtn);
    expect(navMock).toHaveBeenCalledWith('about');

    // Services nav link (should call services)
    const aiBtn = utils.getByText(/ai development/i);
    fireEvent.click(aiBtn);
    expect(navMock).toHaveBeenCalledWith('services');

    // Request Architecture CTA
    const requestBtn = utils.getByRole('button', { name: /contact/i });
    fireEvent.click(requestBtn);
    expect(navMock).toHaveBeenCalledWith('contact');
  });
});
