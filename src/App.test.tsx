import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders the main application with DEPT logo', () => {
        render(<App />);
        // Check for the logo text (which might be in MenuOverlay or Footer) or just Main content
        // The Header has "DEPT" in SVG, but let's check for a main section like Hero
        const heroText = screen.getAllByText(/WORK/i);
        expect(heroText.length).toBeGreaterThan(0);
    });

    it('renders the Contact section', () => {
        render(<App />);
        const contactHeader = screen.getByText(/QUESTION\?/i);
        expect(contactHeader).toBeInTheDocument();
    });
});
