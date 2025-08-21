import { useState } from 'react';
import { Button } from '../../components/Button';
import { CopyButton } from '../../components/CopyButton';
import { useGeneratePost } from '../posts/hooks';
import { usePrompts } from '../prompts/hooks';

export const NewPage = () => {
  const [network, setNetwork] = useState('twitter');
  const [format, setFormat] = useState('text');
  const [promptId, setPromptId] = useState('');
  const [brief, setBrief] = useState('');
  const [content, setContent] = useState('');

  const promptsQuery = usePrompts();
  const generate = useGeneratePost();

  const handleGenerate = () => {
    generate.mutate(
      { network, format, promptId, brief },
      { onSuccess: (data) => setContent(data.content) },
    );
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">New Post</h1>
      <div className="flex gap-2">
        <select
          value={network}
          onChange={(e) => setNetwork(e.target.value)}
          className="border p-2"
        >
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
        </select>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="border p-2"
        >
          <option value="text">Text</option>
          <option value="image">Image</option>
        </select>
        <select
          value={promptId}
          onChange={(e) => setPromptId(e.target.value)}
          className="border p-2"
        >
          <option value="">Prompt</option>
          {promptsQuery.data?.map((p) => (
            <option key={p.id} value={p.id}>
              {p.text}
            </option>
          ))}
        </select>
      </div>
      <textarea
        className="w-full border p-2"
        placeholder="Brief"
        value={brief}
        onChange={(e) => setBrief(e.target.value)}
      />
      <Button onClick={handleGenerate} disabled={generate.isPending}>
        Générer
      </Button>
      {content && (
        <div className="space-y-2">
          <textarea
            className="w-full border p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <CopyButton text={content} />
        </div>
      )}
    </div>
  );
};
