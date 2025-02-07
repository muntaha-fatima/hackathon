// import { SignOutButton } from '@clerk/nextjs';

// const LogoutButton = () => {
//   return <SignOutButton />;
// };

// export default LogoutButton;





// import { withAuth } from '@clerk/nextjs';
// import { useUser } from '@clerk/nextjs';

// const ProtectedPage = () => {
//   const { user } = useUser();

//   if (!user) {
//     return <RedirectToSignIn />;
//   }

//   return <div>Protected Content for {user.firstName}</div>;
// };

// export default withAuth(ProtectedPage);



// import { SignIn } from '@clerk/nextjs';

// const SignInPage = () => {
//   return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
// };

// export default SignInPage;




// import { useClerk } from '@clerk/clerk-react';

// const SignOutButton = () => {
//   const { signOut } = useClerk();

//   const handleSignOut = async () => {
//     await signOut({ redirectUrl: '/product' }); // Redirect after sign out
//   };

//   return <button onClick={handleSignOut}>Sign Out</button>;
// };






// "use client";

// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
//   useUser,
//   useSignIn,
// } from "@clerk/nextjs";
// import Link from "next/link";
// import React, { useState } from "react";
// import { SiNike } from "react-icons/si";
// import { FcGoogle } from "react-icons/fc"; // Google Icon
// import { ImAppleinc } from "react-icons/im";


// const Login = () => {
//   const { user } = useUser(); // Get user details from Clerk
//   const { signIn, setActive, isLoaded } = useSignIn(); // Clerk's sign-in function
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!isLoaded) return;

//     try {
//       const result = await signIn.create({
//         identifier: email,
//         password,
//       });

//       if (result.status === "complete") {
//         await setActive({ session: result.createdSessionId });
//       }
//     } catch (err: any) {
//       setError(err.errors[7]?.message || "Sign-in failed");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-center w-2/6 h-[600px]">
//       <div className="flex-1 bg-white flex flex-col justify-center px-8 lg:px-20">
//         <SignedIn>
//             <h1 className="text-3xl font-bold mb-4">
//               Welcome, {user?.firstName || "User"}!
//             </h1>
//             <p className="mt-4 text-lg text-center">
//               Shop now and use the coupon{" "}
//               <span className="font-bold text-black">SHOP.CO</span> to get a
//               $50 discount on your next purchase!
//             </p>
//           {/* </div> */}
//         </SignedIn>

//         <SignedOut>
//           {/* When signed out */}
//           <div>
//             <h1 className="text-3xl font-bold mb-6">Login</h1>
//             {error && <p className="text-red-500">{error}</p>}

//             {/* Google Sign In Button */}
//             <SignInButton mode="modal">
//               <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
//                 <FcGoogle size={24} /> Continue with Google
//               </button>
              
//             </SignInButton>
//             <SignInButton mode="modal">

//             <button className="w-full mt-3 flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
//               <ImAppleinc size={24} /> Continue with Apple
//               </button>
//               </SignInButton>


//             <div className="text-center my-4 text-gray-500">or</div>

//             {/* Email and Password Login */}
//             <form onSubmit={handleSignIn}>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                   required
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-gray-700 font-medium mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
//                     required
//                   />
//                   <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
//                     👁
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between mb-6">
//                 <label className="flex items-center">
//                   <input type="checkbox" className="mr-2" />
//                   <span className="text-gray-700 text-sm">Remember Me</span>
//                 </label>
//                 <Link href="#" className="text-sm text-gray-500 hover:underline">
//                   Forgot Password
//                 </Link>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//         </SignedOut>
//       </div>
//     </div>
//   );
// };

// export default Login;






"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  useSignIn,
} from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

const Login = () => {
  const { user } = useUser();
  const { signIn, setActive, isLoaded } = useSignIn();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
      }
    } catch (err: any) {
      setError(err.errors[7]?.message || "Sign-in failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <SignedIn>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Welcome, {user?.firstName || "User"}!
          </h1>
          <p className="mt-4 text-lg text-center">
            Shop now and use the coupon <span className="font-bold text-black">SHOP.CO</span> to get a $50 discount on your next purchase!
          </p>
        </SignedIn>

        <SignedOut>
          <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="space-y-3">
            <SignInButton mode="modal">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
                <FcGoogle size={24} /> Continue with Google
              </button>
            </SignInButton>
            <SignInButton mode="modal">
              <button className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-3 rounded-lg border border-gray-300 hover:bg-gray-100">
                <ImAppleinc size={24} /> Continue with Apple
              </button>
            </SignInButton>
          </div>

          <div className="text-center my-4 text-gray-500">or</div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700 text-sm">Remember Me</span>
              </label>
              <Link href="#" className="text-sm text-gray-500 hover:underline">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
              Sign In
            </button>
          </form>
        </SignedOut>
      </div>
    </div>
  );
};

export default Login;
