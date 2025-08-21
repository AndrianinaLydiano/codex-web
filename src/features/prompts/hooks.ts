import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../lib/apiClient';
import type { Prompt } from '../../types';

export const usePrompts = () =>
  useQuery({
    queryKey: ['prompts'],
    queryFn: async () => {
      const { data } = await apiClient.get<{ prompts: Prompt[] }>('/prompts');
      return data.prompts;
    },
  });
