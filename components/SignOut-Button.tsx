"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";
import { toast } from "sonner";

const SignOutButton = () => {
  const router = useRouter();

  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onError: (ctx) => {
          toast.error("Failed to sign out. Please try again.");
        },
        onSuccess: () => {
          toast.success("Signed out successfully.");
          router.push("/sign-in");
        },
      },
    });
  }

  return (
    <Button onClick={handleSignOut} size={"sm"} variant={"destructive"}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
