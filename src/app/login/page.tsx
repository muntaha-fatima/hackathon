

import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";




export default function Login() {
  return (

<ClerkProvider>
      
      
<SignedOut>
  <SignInButton />
</SignedOut>
<SignedIn>
  <UserButton />
</SignedIn>
{/* {children} */}

</ClerkProvider>
  )}




