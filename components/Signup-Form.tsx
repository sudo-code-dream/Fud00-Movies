"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import { Loader2, X } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    await signUp.email(
      {
        name,
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
        onError: (e) => {
          toast.error(e.error.message);
        },
        onSuccess: () => {
          toast.success("Account created successfully!");
          router.push("/sign-in");
        },
      }
    );
  }

  return (
    <Card className='z-50 rounded-md w-md max-w-md'>
      <CardHeader>
        <CardTitle className='text-lg md:text-xl'>Sign Up</CardTitle>
        <CardDescription className='text-xs md:text-sm'>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='grid gap-4'>
          <div className='grid  '>
            <div className='grid gap-2 w-full'>
              <Label htmlFor='name'>First name</Label>
              <Input
                id='name'
                placeholder='Max'
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
          </div>
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
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='new-password'
              placeholder='Password'
            />
          </div>
          <Button
            type='submit'
            onClick={handleSubmit}
            className='w-full'
            disabled={loading}>
            {loading ? (
              <Loader2 size={16} className='animate-spin' />
            ) : (
              "Create an account"
            )}
          </Button>
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex justify-center w-full border-t py-4'>
          <p className='text-center text-sm text-neutral-500'>
            Already have an account?
            <span className='text-orange-400'>
              <Link href={"/sign-in"}> Sign in</Link>{" "}
            </span>
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
