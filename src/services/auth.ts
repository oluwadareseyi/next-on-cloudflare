export interface LoginResponse {
  user: {
    id: string;
    email: string;
  };
  needs_onboarding: boolean;
}

export interface AuthError {
  message: string;
  code?: string;
}

class AuthService {
  private baseUrl: string;

  constructor() {
    this.baseUrl =
      process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  }

  async signUp(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Signup failed');
      }

      return await response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Signup failed');
    }
  }

  async login(email: string, userId: string): Promise<LoginResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, userId }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      return await response.json();
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'Login failed');
    }
  }

  async googleSignIn(token: string): Promise<LoginResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Google sign-in failed');
      }

      return await response.json();
    } catch (error) {
      throw new Error(
        error instanceof Error ? error.message : 'Google sign-in failed'
      );
    }
  }
}

export const authService = new AuthService();
