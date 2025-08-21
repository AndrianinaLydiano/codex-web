import type { Post } from '../types';
import { CopyButton } from './CopyButton';

export const PostCard = ({ post }: { post: Post }) => {
  const excerpt = post.content.split('\n').slice(0, 2).join('\n');
  return (
    <div className="rounded border p-4">
      <p className="mb-2 whitespace-pre-wrap">{excerpt}</p>
      <CopyButton text={post.content} />
    </div>
  );
};
