import React from "react";
import { Shield } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className='w-full py-4 px-6 md:px-8 absolute top-0 left-0 z-10'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <Shield className='h-8 w-8 text-blue-600' />
          <span className='ml-2 text-lg font-semibold text-slate-800'>
            SecureApp
          </span>
        </div>
        <nav className='hidden md:flex items-center space-x-6'>
          <a
            href='#'
            className='text-sm text-slate-600 hover:text-slate-900 transition-colors'>
            Home
          </a>
          <a
            href='#'
            className='text-sm text-slate-600 hover:text-slate-900 transition-colors'>
            Help
          </a>
          <a
            href='#'
            className='text-sm text-slate-600 hover:text-slate-900 transition-colors'>
            Contact
          </a>
          <a
            href='#'
            className='text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors'>
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
