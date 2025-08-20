# AGENTS

## Commandes

- `npm run dev` lance le serveur de développement.
- `npm run lint` exécute ESLint et vérifie le formatage Prettier.
- `npm run build` produit la version de production.
- `npm test` n'est pas encore configuré.

Lancer `npm run lint` et `npm run build` avant de soumettre une PR.

## Secrets

Créer un fichier `.env` à partir de `.env.example` et définir :

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `VITE_API_BASE_URL`

Ces valeurs sont nécessaires pour exécuter l'application.
