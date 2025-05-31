import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full py-6 px-6 md:px-8 mt-auto'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row md:items-center justify-between'>
          <div className='mb-4 md:mb-0'>
            <p className='text-sm text-slate-500'>
              &copy; {currentYear} SecureApp. All rights reserved.
            </p>
          </div>
          <div className='flex items-center space-x-6'>
            <a
              href='#'
              className='text-sm text-slate-500 hover:text-slate-700 transition-colors'>
              Privacy Policy
            </a>
            <a
              href='#'
              className='text-sm text-slate-500 hover:text-slate-700 transition-colors'>
              Terms of Service
            </a>
            <a
              href='#'
              className='text-sm text-slate-500 hover:text-slate-700 transition-colors'>
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
