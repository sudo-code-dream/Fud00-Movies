import SignOutButton from "@/components/SignOut-Button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

async function Profile() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return <p className='text-destructive'>Unauthorizes</p>;
  }

  return( 
  <div className='mx-auto min-h-full  p-4'>
    <pre className="text-sm overflow-clip">
        {JSON.stringify(session, null, 2)}
        <SignOutButton />
    </pre>
  </div>
  )
}

export default Profile;
