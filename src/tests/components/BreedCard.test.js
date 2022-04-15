import { render, screen } from '@testing-library/react';
import BreedCard from '../../components/BreedCard';
import 'intersection-observer';

describe('Testing Breed Card Component', () => {
  test('does the component render correctly', () => {
    render(<BreedCard onClick={() => {}} imageURL="Test image" origin="Test Country 1" name="Test Breed 1" />);
    expect(screen.getByText('Test Breed 1'));
    expect(screen.getByText('Test Country 1'));
  });
});
