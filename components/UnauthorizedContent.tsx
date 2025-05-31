"use client";
import React from "react";
import { ShieldAlert, ArrowLeft, LifeBuoy } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";

const UnauthorizedContent: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className='w-full max-w-md mx-auto px-4'>
      <div className='text-center'>
        <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6'>
          <ShieldAlert className='h-8 w-8 text-red-600' />
        </div>
        <h1 className='text-4xl font-bold text-slate-900 mb-3 tracking-tight'>
          Access Denied
        </h1>
        <div className='h-1 w-16 bg-red-500 mx-auto my-4'></div>
        <p className='text-lg text-slate-600 mb-8'>
          You don't have permission to access this resource. Please contact your
          administrator if you believe this is an error.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6'>
          <Button
            variant='primary'
            icon={ArrowLeft}
            iconPosition='left'
            onClick={handleGoBack}
            className='group'>
            <span className='group-hover:translate-x-[-2px] transition-transform'>
              Go Back
            </span>
          </Button>
          <Button
            variant='outline'
            onClick={() => {
              router.push("/support");
            }}
            icon={LifeBuoy}
            iconPosition='left'>
            <span>Get Help</span>
          </Button>
        </div>

        <div className='mt-10 pt-6 border-t border-slate-200'>
          <p className='text-sm text-slate-500'>
            Error Code: <span className='font-mono'>403-Unauthorized</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnauthorizedContent;
