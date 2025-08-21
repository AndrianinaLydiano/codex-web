import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../lib/apiClient';
import type { Quota } from '../../types';

export const useQuota = () =>
  useQuery({
    queryKey: ['quota'],
    queryFn: async () => {
      const { data } = await apiClient.get<Quota>('/quota');
      return data;
    },
  });
