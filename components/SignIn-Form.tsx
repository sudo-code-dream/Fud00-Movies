"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    await signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onResponse: () => {
          setLoading(false);
        },

        onError: (ctx) => {
          setLoading(false);
          toast.error(
            ctx.error.message || "Failed to sign in. Please try again."
          );
        },

        onSuccess: () => {
          setLoading(false);
          // Redirect or perform any other action after successful sign-in
        },
      }
    );
  }

  return (
    <Card className='max-w-full w-md'>
      <CardHeader>
        <CardTitle className='text-lg md:text-xl'>Sign In</CardTitle>
        <CardDescription className='text-xs md:text-sm'>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>

          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <Link href='#' className='ml-auto inline-block text-sm underline'>
                Forgot your password?
              </Link>
            </div>

            <Input
              id='password'
              type='password'
              placeholder='password'
              autoComplete='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='flex items-center gap-2'>
            <Checkbox
              id='remember'
              onClick={() => {
                setRememberMe(!rememberMe);
              }}
            />
            <Label htmlFor='remember'>Remember me</Label>
          </div>

          <Button
            type='submit'
            className='w-full'
            onClick={handleSubmit}
            disabled={loading}>
            {loading ? <Loader2 className='animate-spin' /> : "Login"}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex justify-center w-full border-t py-4'>
          <p className='text-center text-sm text-neutral-500'>
            Don't have an account?
            <Link href='/sign-up' className='' target='_blank'>
              <span className='text-orange-400'> Sign up</span>
            </Link>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
