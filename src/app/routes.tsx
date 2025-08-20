import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';
import { LoginPage } from '../features/auth/LoginPage';
import { RegisterPage } from '../features/auth/RegisterPage';
import { ProfilePage } from '../features/auth/ProfilePage';
import { NewPage } from '../features/generate/NewPage';
import { HistoryPage } from '../features/history/HistoryPage';
import { DashboardPage } from './pages/DashboardPage';
import { useAuth } from '../features/auth/AuthProvider';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/auth/login" />;
};

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/register" element={<RegisterPage />} />
      <Route
        path="/app"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/new"
        element={
          <PrivateRoute>
            <NewPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/history"
        element={
          <PrivateRoute>
            <HistoryPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/app/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  </BrowserRouter>
);
