'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      // redirectTo param to return after login
      router.replace(`/auth/login?redirectTo=${encodeURIComponent(pathname)}`);
    }
  }, [user, loading, router, pathname]);

  if (loading || !user) {
    //todo: show a loading spinner or something while checking auth
    return null;
  }

  return <>{children}</>;
}
