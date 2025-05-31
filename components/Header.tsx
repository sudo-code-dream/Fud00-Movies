"use client";
import React from "react";
import { Shield } from "lucide-react";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Header: React.FC = () => {
  const router = useRouter();

  const { data: session, isPending, error, refetch } = useSession();

  const handleSignOut = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logout successful!");
          router.push("/");
        },
      },
    });
  };

  return (
    <header className='w-full py-4 px-6 md:px-8 absolute top-0 left-0 z-10'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={"/monogramlogo.png"}
            alt='monogram-logo'
            width={80}
            height={80}
          />
        </div>
        <nav className='hidden md:flex items-center space-x-6'>
          <a
            href='#'
            className='text-sm  uppercase font-bold text-slate-400 hover:text-slate-200 transition-colors'>
            Home
          </a>
          <a
            href='#'
            className='text-sm uppercase font-bold text-slate-400 hover:text-slate-200 transition-colors'>
            Movies
          </a>
          <a
            href='#'
            className='text-sm uppercase font-bold text-slate-400 hover:text-slate-200 transition-colors'>
            TV SHOWS
          </a>
          {session ? (
            <Button
              onClick={handleSignOut}
              className='text-sm  text-blue-600 transition-colors'
              variant='ghost'>
              Logout
            </Button>
          ) : (
            <a
              href='/sign-in'
              className='text-sm font-medium  text-blue-600 hover:text-blue-700 transition-colors'>
              Login
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
