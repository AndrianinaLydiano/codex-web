import { QuotaBadge } from '../../components/QuotaBadge';
import { PostCard } from '../../components/PostCard';
import { useMyPosts } from '../../features/posts/hooks';
import { useQuota } from '../../features/quota/hooks';

export const DashboardPage = () => {
  const { data: quota } = useQuota();
  const { data: posts } = useMyPosts();
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {quota && <QuotaBadge remaining={quota.remaining} limit={quota.limit} />}
      <div className="grid gap-4">
        {posts?.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
