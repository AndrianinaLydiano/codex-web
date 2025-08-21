import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthProvider';

export const ResetPasswordPage = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const { error } = await resetPassword(email);
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      setMessage('Vérifiez vos e-mails.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <h1 className="text-center text-2xl font-bold">
          Réinitialiser le mot de passe
        </h1>
        <input
          className="w-full rounded border p-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full rounded bg-blue-500 px-4 py-2 text-white"
        >
          Envoyer le lien
        </button>
        {message && <p className="text-sm text-green-600">{message}</p>}
        {error && (
          <p role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}
        <p className="text-center text-sm">
          <Link to="/auth/login" className="text-blue-600">
            Se connecter
          </Link>
        </p>
      </form>
    </div>
  );
};
