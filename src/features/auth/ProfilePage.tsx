import { QuotaBadge } from '../../components/QuotaBadge';
import { useQuota } from '../quota/hooks';

export const ProfilePage = () => {
  const { data: quota } = useQuota();
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Profile</h1>
      <p>Plan: FREE</p>
      {quota && <QuotaBadge remaining={quota.remaining} limit={quota.limit} />}
      <button className="rounded bg-gray-300 px-4 py-2" disabled>
        Plans pro (bientôt)
      </button>
    </div>
  );
};
