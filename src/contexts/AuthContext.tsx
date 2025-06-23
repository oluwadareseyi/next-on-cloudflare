'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authService, type LoginResponse } from '@/services/auth';

interface AuthContextType {
  user: LoginResponse['user'] | null;
  loading: boolean;
  error: string | null;
  login: (_email: string, _password: string) => Promise<void>;
  googleSignIn: (_token: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (_email: string, _password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<LoginResponse['user'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check for existing session
    const checkSession = async () => {
      try {
        // TODO: Implement session check
        setLoading(false);
      } catch {
        setError('Failed to check session');
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.signUp(email, password);
      setUser(response.user);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Signup failed');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, _password: string) => {
    setLoading(true);
    setError(null);
    console.warn('login', email, _password);
    try {
      // TODO: Implement actual authentication
      const response = await authService.login(email, 'temp-user-id');
      setUser(response.user);

      if (response.needs_onboarding) {
        router.push('/onboarding');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const googleSignIn = async (token: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await authService.googleSignIn(token);
      setUser(response.user);

      if (response.needs_onboarding) {
        router.push('/onboarding');
      } else {
        router.push('/dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    setError(null);

    try {
      // TODO: Implement logout
      setUser(null);
      router.push('/login');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Logout failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        googleSignIn,
        logout,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
