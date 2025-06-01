"use client";
import React, { useState } from "react";
import { Menu, Shield, X, Search } from "lucide-react";
import Image from "next/image";
import { signOut, useSession } from "@/lib/auth-client";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Sidebar from "./Sidebar";
import Link from "next/link";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);

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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <header className='w-full py-4 px-6 md:px-8 absolute top-0 left-0 z-10'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Link href={"/"}>
              <Image
                src={"/monogramlogo.png"}
                alt='monogram-logo'
                width={80}
                height={80}
              />
            </Link>
            <Button
              onClick={toggleSidebar}
              variant='ghost'
              className='text-slate-400 hover:text-slate-200 outline-none border-none hover:bg-slate-800/50 transition-colors mr-2'
              aria-label='Toggle menu'>
              {sidebarOpen ? (
                <X className='h-5 w-5' />
              ) : (
                <>
                  <div className='flex items-center justify-center outline-none border-none text-slate-200  gap-1'>
                    <Menu className='h-5 w-5' />
                    <p>Browse</p>
                  </div>
                </>
              )}
            </Button>
            <div className='relative flex items-center'>
              <div
                className={`flex items-center bg-slate-800/50 rounded-full overflow-hidden transition-all duration-300 ${
                  showSearch ? "w-64" : "w-10"
                }`}>
                <button
                  onClick={() => setShowSearch(!showSearch)}
                  className='p-2 text-slate-400 hover:text-slate-200'>
                  <Search className='h-5 w-5' />
                </button>
                <input
                  type='text'
                  placeholder='Search movies, TV shows...'
                  className={`bg-transparent border-none outline-none text-slate-200 px-2 py-1 w-full transition-all duration-300 ${
                    showSearch ? "opacity-100" : "opacity-0 w-0"
                  }`}
                />
              </div>
            </div>
          </div>
          <nav className='hidden md:flex items-center space-x-6'>
            <a
              href='#'
              className='text-sm uppercase font-bold text-slate-400 hover:text-slate-200 transition-colors'>
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
                className='text-sm text-blue-600 transition-colors'
                variant='ghost'>
                Logout
              </Button>
            ) : (
              <a
                href='/sign-in'
                className='text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors'>
                Login
              </a>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};
