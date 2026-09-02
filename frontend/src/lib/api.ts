const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3333';

export type UserDTO = {
  id: number;
  fullName: string | null;
  email: string;
  createdAt: string;
  updatedAt: string;
  initials: string;
};

type AuthResponse = {
  user: UserDTO;
  token: string;
};

type SignupPayload = {
  fullName: string | null;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type LoginPayload = {
  email: string;
  password: string;
};

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

async function apiFetch<T>(
  path: string,
  options: { method?: string; body?: unknown; token?: string } = {},
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (options.token) headers.Authorization = `Bearer ${options.token}`;

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method: options.method ?? 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });
  } catch {
    throw new ApiError(
      'No se pudo conectar con el servidor. Inténtalo de nuevo.',
      0,
    );
  }

  const json = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      json?.errors?.[0]?.message ?? 'Ha ocurrido un error inesperado.';
    throw new ApiError(message, response.status);
  }

  return json as T;
}

export function signup(payload: SignupPayload) {
  return apiFetch<{ data: AuthResponse }>('/api/v1/auth/signup', {
    method: 'POST',
    body: payload,
  }).then((res) => res.data);
}

export function login(payload: LoginPayload) {
  return apiFetch<{ data: AuthResponse }>('/api/v1/auth/login', {
    method: 'POST',
    body: payload,
  }).then((res) => res.data);
}

export function getProfile(token: string) {
  return apiFetch<{ data: UserDTO }>('/api/v1/account/profile', { token }).then(
    (res) => res.data,
  );
}

export function logout(token: string) {
  return apiFetch<{ message: string }>('/api/v1/account/logout', {
    method: 'POST',
    token,
  });
}
