"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
// import { Button } from "@/components/ui/button"
import { MdAccountCircle } from "react-icons/md";

export default function AuthButtons() {
  return (
    <div className="flex justify-center items-center gap-4">
      <SignedOut>
        <SignInButton mode="modal">
           
        <MdAccountCircle className="w-7 h-7 -mt-2 cursor-pointer " /> 
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton/>
      </SignedIn>
    </div>
  )
}






