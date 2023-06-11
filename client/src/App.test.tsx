import { render, screen } from '@testing-library/react';
import App from './App';
describe('Client', () => {
  it('title', () => {
    render(<App />);
    expect(screen.getByText(/Welcome to application!!/)).toBeInTheDocument();
  });
});
