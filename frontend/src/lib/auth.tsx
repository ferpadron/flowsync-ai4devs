import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import * as api from '@/lib/api';
import type { UserDTO } from '@/lib/api';

const TOKEN_KEY = 'flowsync.token';

type SignupInput = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type LoginInput = {
  email: string;
  password: string;
};

type AuthStatus = 'loading' | 'authenticated' | 'guest';

type AuthContextValue = {
  status: AuthStatus;
  user: UserDTO | null;
  login: (input: LoginInput) => Promise<void>;
  signup: (input: SignupInput) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem(TOKEN_KEY),
  );
  const [user, setUser] = useState<UserDTO | null>(null);
  const [status, setStatus] = useState<AuthStatus>(token ? 'loading' : 'guest');

  useEffect(() => {
    if (!token) {
      setStatus('guest');
      return;
    }

    let cancelled = false;
    api
      .getProfile(token)
      .then((profile) => {
        if (cancelled) return;
        setUser(profile);
        setStatus('authenticated');
      })
      .catch(() => {
        if (cancelled) return;
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
        setStatus('guest');
      });

    return () => {
      cancelled = true;
    };
  }, [token]);

  async function login(input: LoginInput) {
    const result = await api.login(input);
    localStorage.setItem(TOKEN_KEY, result.token);
    setToken(result.token);
    setUser(result.user);
    setStatus('authenticated');
  }

  async function signup(input: SignupInput) {
    const result = await api.signup(input);
    localStorage.setItem(TOKEN_KEY, result.token);
    setToken(result.token);
    setUser(result.user);
    setStatus('authenticated');
  }

  function logout() {
    if (token) api.logout(token).catch(() => {});
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
    setUser(null);
    setStatus('guest');
  }

  return (
    <AuthContext.Provider value={{ status, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
