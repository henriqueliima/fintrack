import { Link } from 'react-router';

import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignupPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <Card className="w-[458px]">
        <CardHeader className="flex flex-col items-center">
          <CardTitle>Crie sua conta</CardTitle>
          <CardDescription>Insira seus dados abaixo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Digite seu nome" />
          <Input placeholder="Digite seu sobrenome" />
          <Input placeholder="Digite seu email" />
          <PasswordInput />
          <PasswordInput placeholder="Digite sua senha novamente" />
          <div className="flex items-start gap-3">
            <Checkbox id="terms" defaultChecked />
            <div className="grid gap-2">
              <Label
                className="text-muted-foreground text-xs opacity-75"
                htmlFor="terms"
              >
                Ao clicar em “Criar conta”, você aceita{' '}
                <a className="text-white underline" href="#">
                  nosso termo de uso e política de privacidade
                </a>
              </Label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Criar conta</Button>
        </CardFooter>
      </Card>
      <div className="mb-4 flex items-center justify-center">
        <p className="text-center opacity-50">Já possui uma conta?</p>
        <Button variant="link" asChild>
          <Link to="/login">Faça login</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
