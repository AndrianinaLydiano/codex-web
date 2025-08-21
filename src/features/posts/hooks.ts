import { useMutation, useQuery } from '@tanstack/react-query';
import { apiClient } from '../../lib/apiClient';
import type { Post } from '../../types';

export const useMyPosts = (page = 1) =>
  useQuery({
    queryKey: ['my-posts', page],
    queryFn: async () => {
      const { data } = await apiClient.get<{ posts: Post[] }>('/posts', {
        params: { page },
      });
      return data.posts;
    },
  });

export const useGeneratePost = () =>
  useMutation({
    mutationFn: async (payload: {
      network: string;
      format: string;
      promptId: string;
      brief: string;
    }) => {
      const { data } = await apiClient.post<Post>('/posts', payload);
      return data;
    },
  });

export const useUpdatePost = () =>
  useMutation({
    mutationFn: async ({ id, content }: { id: string; content: string }) => {
      const { data } = await apiClient.put<Post>(`/posts/${id}`, { content });
      return data;
    },
  });
