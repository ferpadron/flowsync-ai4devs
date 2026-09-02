import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { useAuth } from '@/lib/auth';

export function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/login', { replace: true });
  }

  return (
    <div className="flex min-h-svh items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>{user?.initials}</CardTitle>
          <CardDescription>Tu perfil</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <p className="text-sm">
            <span className="font-medium">Nombre:</span> {user?.fullName ?? '—'}
          </p>
          <p className="text-sm">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full" onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
