import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useQuota } from '../hooks';
import { apiClient } from '../../../lib/apiClient';

vi.mock('../../../lib/apiClient');

afterEach(() => {
  vi.resetAllMocks();
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>
    {children}
  </QueryClientProvider>
);

test('fetches quota', async () => {
  (apiClient.get as unknown as vi.Mock).mockResolvedValue({
    data: { remaining: 5, limit: 10 },
  });
  const { result } = renderHook(() => useQuota(), { wrapper });
  await waitFor(() => expect(result.current.data).toBeDefined());
  expect(result.current.data?.remaining).toBe(5);
});
