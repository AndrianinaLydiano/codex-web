import { render, screen } from '@testing-library/react';
import { QuotaBadge } from '../QuotaBadge';

test('renders quota badge', () => {
  render(<QuotaBadge remaining={3} limit={10} />);
  expect(screen.getByText('3/10')).toBeDefined();
});
