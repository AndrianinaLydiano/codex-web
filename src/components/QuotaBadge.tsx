export const QuotaBadge = ({
  remaining,
  limit,
}: {
  remaining: number;
  limit: number;
}) => (
  <span className="rounded bg-gray-200 px-2 py-1 text-sm">
    {remaining}/{limit}
  </span>
);
