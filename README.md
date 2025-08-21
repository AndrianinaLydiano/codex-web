# codex-web

Frontend Vite + React + TypeScript pour le générateur SaaS de contenu pour réseaux sociaux.

## Démarrage

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` – lance le serveur de développement.
- `npm run lint` – vérifie le code avec ESLint et Prettier.
- `npm run build` – génère la version de production.
- `npm test` – exécute les tests (placeholder).

## Variables d'environnement

Copiez `.env.example` vers `.env` et renseignez :

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_API_BASE_URL`

## Tests manuels

1. `npm run dev`
2. Ouvrir `http://localhost:5173`
3. Créer un compte via `/auth/register` ou se connecter sur `/auth/login`.
4. Les routes `/app`, `/app/new`, `/app/history` et `/app/profile` nécessitent une session active.
5. Pour réinitialiser le mot de passe, utiliser `/auth/reset` puis suivre le lien envoyé vers `/auth/update-password`.

## Licence

[MIT](./LICENSE)
