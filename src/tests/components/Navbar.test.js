import { render, screen } from '@testing-library/react';
import 'intersection-observer';
import Navbar from '../../components/Navbar';

describe('Testing Breed Card Component', () => {
  test('does the component render correctly', () => {
    render(<Navbar title="Test Title" />);
    expect(screen.getByText('Test Title'));
  });
});
