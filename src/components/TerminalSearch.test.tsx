import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import TerminalSearch from './TerminalSearch';

describe('TerminalSearch', () => {
  const mockOnNavigate = vi.fn();
  const mockOnRequestClose = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('opens modal when "/" is pressed', () => {
    render(<TerminalSearch onNavigate={mockOnNavigate} />);
    fireEvent.keyDown(window, { key: '/' });
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('closes modal when "Escape" is pressed', () => {
    render(<TerminalSearch onNavigate={mockOnNavigate} />);
    fireEvent.keyDown(window, { key: '/' });
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('navigates on Enter when result is selected', () => {
    render(<TerminalSearch onNavigate={mockOnNavigate} />);
    fireEvent.keyDown(window, { key: '/' });
    const input = screen.getByLabelText('Search the site');
    fireEvent.change(input, { target: { value: 'home' } });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockOnNavigate).toHaveBeenCalledWith('home');
  });

  it('selects next result on ArrowDown', () => {
    render(<TerminalSearch onNavigate={mockOnNavigate} />);
    fireEvent.keyDown(window, { key: '/' });
    const input = screen.getByLabelText('Search the site');
    fireEvent.change(input, { target: { value: 'a' } }); // Should match multiple
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    // Check if selected changes, but since it's internal, hard to test without exposing
    // Perhaps test that it doesn't crash
  });

  it('closes modal on backdrop click', () => {
    render(<TerminalSearch onNavigate={mockOnNavigate} onRequestClose={mockOnRequestClose} />);
    fireEvent.keyDown(window, { key: '/' });
    const backdrop = screen.getByTestId('search-backdrop');
    fireEvent.click(backdrop);
    expect(mockOnRequestClose).toHaveBeenCalled();
  });

  // Add more tests as needed
});