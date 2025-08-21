import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import type { ReactNode } from 'react';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';
import { ProfilePage } from '../features/auth/ProfilePage';
import { NewPage } from '../features/generate/NewPage';
import { HistoryPage } from '../features/history/HistoryPage';
import { DashboardPage } from './pages/DashboardPage';
import { useAuth } from '../features/auth/AuthProvider';
import { ResetPasswordPage } from '../features/auth/ResetPasswordPage';
import { UpdatePasswordPage } from '../features/auth/UpdatePasswordPage';

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  if (!user) return <Navigate to="/auth/login" />;
  const handleSignOut = async () => {
    await signOut();
    navigate('/auth/login');
  };
  return (
    <div className="min-h-screen">
      <header className="flex justify-end border-b p-4">
        <button
          onClick={handleSignOut}
          className="rounded bg-gray-200 px-4 py-2"
        >
          Se déconnecter
        </button>
      </header>
      {children}
    </div>
  );
};

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route path="/auth/reset" element={<ResetPasswordPage />} />
      <Route path="/auth/update-password" element={<UpdatePasswordPage />} />
      <Route
        path="/app"
        element={
          <RequireAuth>
            <DashboardPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/new"
        element={
          <RequireAuth>
            <NewPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/history"
        element={
          <RequireAuth>
            <HistoryPage />
          </RequireAuth>
        }
      />
      <Route
        path="/app/profile"
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  </BrowserRouter>
);
