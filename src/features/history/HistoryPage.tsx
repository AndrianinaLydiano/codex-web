import { useState } from 'react';
import { CopyButton } from '../../components/CopyButton';
import { useMyPosts } from '../posts/hooks';

export const HistoryPage = () => {
  const [page, setPage] = useState(1);
  const { data: posts } = useMyPosts(page);
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">History</h1>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border px-2 py-1">Réseau</th>
            <th className="border px-2 py-1">Extrait</th>
            <th className="border px-2 py-1">Date</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts?.map((p) => (
            <tr key={p.id}>
              <td className="border px-2 py-1">{p.network}</td>
              <td className="border px-2 py-1">{p.content.slice(0, 40)}...</td>
              <td className="border px-2 py-1">
                {new Date(p.createdAt).toLocaleDateString()}
              </td>
              <td className="border px-2 py-1">
                <CopyButton text={p.content} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-2">
        <button
          className="rounded border px-2 py-1"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
        >
          Prev
        </button>
        <button
          className="rounded border px-2 py-1"
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
