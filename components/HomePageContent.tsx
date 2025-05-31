"use client";
import React from "react";
import { ShieldAlert, ArrowLeft, LifeBuoy, ArrowRight } from "lucide-react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomePageContent: React.FC = () => {
  const router = useRouter();

  const handlePushRouter = () => {
    router.push("/home");
  };

  return (
    <div className='w-full max-w-md mx-auto px-4'>
      <div className='text-center'>
        <div className='inline-flex items-center justify-center w-[11rem] h-[11rem]'>
          <Image
            src={"/transparentlogo.png"}
            alt='logo'
            width={1000}
            height={1000}
          />
        </div>
        <h1 className='text-4xl font-bold text-slate-200 mb-3 tracking-tight'>
          Fud00-Movies
        </h1>
        <div className='h-1 w-16 bg-red-500 mx-auto my-4'></div>
        <p className='text-lg text-slate-300 mb-8'>Watch Movies Online Free</p>

        <div className='flex items-center justify-center gap-1 mb-6'>
          <Button
            variant='primary'
            icon={ArrowRight}
            iconPosition='right'
            onClick={handlePushRouter}
            className='group '>
            <span className='group-hover:translate-x-[-2px] transition-transform'>
              View Full Site
            </span>
          </Button>
        </div>

        <div className='mt-10 pt-6 border-t border-slate-200'></div>
      </div>
    </div>
  );
};

export default HomePageContent;
