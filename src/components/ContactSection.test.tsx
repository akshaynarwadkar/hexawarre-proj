import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
    it('renders the form fields', () => {
        render(<ContactSection />);
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
    });

    it('shows validation errors when submitting empty form', async () => {
        const user = userEvent.setup();
        render(<ContactSection />);
        const submitBtn = screen.getByRole('button', { name: /Send/i });
        await user.click(submitBtn);

        expect(screen.getByText('Name is required')).toBeInTheDocument();
        expect(screen.getByText('Email is required')).toBeInTheDocument();
        expect(screen.getByText('Message is required')).toBeInTheDocument();
    });

    it('shows email validation error for invalid email', async () => {
        const user = userEvent.setup();
        render(<ContactSection />);
        const emailInput = screen.getByLabelText(/Email/i);
        await user.type(emailInput, 'invalid-email');

        const submitBtn = screen.getByRole('button', { name: /Send/i });
        await user.click(submitBtn);

        screen.debug(); // Inspect DOM
        expect(await screen.findByText('Invalid email address', {}, { timeout: 3000 })).toBeInTheDocument();
    });

    it('submits successfully with valid data', async () => {
        const user = userEvent.setup();
        render(<ContactSection />);

        await user.type(screen.getByLabelText(/Name/i), 'John Doe');
        await user.type(screen.getByLabelText(/Email/i), 'john@example.com');
        await user.type(screen.getByLabelText(/Message/i), 'Hello there');

        const submitBtn = screen.getByRole('button', { name: /Send/i });
        await user.click(submitBtn);

        expect(screen.getByText(/Sending.../i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument();
        }, { timeout: 3000 });
    });
});
