// "use client"

// import Image from "next/image"
// import { Minus, Plus, ShoppingCart, X } from "lucide-react"
// import { useCart } from "../context/CartContext"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

// export default function Cart() {
//   const { state, dispatch } = useCart()

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) {
//       dispatch({ type: "REMOVE_ITEM", payload: id })
//       return
//     }
//     dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
//   }

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button size="icon" variant="ghost" className="relative">
//           <img src="/image/Frame.png" alt="cart" width={24} className="-mt-2"/>
//           {state.items.length > 0 && (
//             <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
//               {state.items.reduce((acc, item) => acc + item.quantity, 0)}
//             </span>
//           )}
//           <span className="sr-only">Open cart</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Shopping Cart ({state.items.length} items)</SheetTitle>
//         </SheetHeader>
//         {state.items.length === 0 ? (
//           <div className="flex h-full flex-col items-center justify-center space-y-2">
//             <ShoppingCart className="h-12 w-12 text-muted-foreground" />
//             <p className="text-lg font-medium">Your cart is empty</p>
//             <p className="text-sm text-muted-foreground">Add items to your cart to checkout</p>
//           </div>
//         ) : (
//           <div className="flex h-full flex-col gap-4">
//             <div className="flex-1 overflow-auto py-4">
//               {state.items.map((item) => (
//                 <div key={item.id} className="flex gap-4 py-4 border-b">
//                   <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div className="flex flex-1 flex-col gap-1">
//                     <h3 className="font-medium leading-none">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
//                     <div className="flex items-center gap-2">
//                       <Button
//                         size="icon"
//                         variant="outline"
//                         className="h-8 w-8"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       >
//                         <Minus className="h-4 w-4" />
//                         <span className="sr-only">Decrease quantity</span>
//                       </Button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <Button
//                         size="icon"
//                         variant="outline"
//                         className="h-8 w-8"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         <Plus className="h-4 w-4" />
//                         <span className="sr-only">Increase quantity</span>
//                       </Button>
//                     </div>
//                   </div>
//                   <Button
//                     size="icon"
//                     variant="ghost"
//                     className="h-8 w-8"
//                     onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
//                   >
//                     <X className="h-4 w-4" />
//                     <span className="sr-only">Remove item</span>
//                   </Button>
//                 </div>
//               ))}
//             </div>
//             <div className="space-y-4 border-t pt-4">
//               <div className="flex justify-between text-lg font-medium">
//                 <span>Total</span>
//                 <span>${state.total.toFixed(2)}</span>
//               </div>
//               <Button className="w-full" size="lg">
//                 Checkout
//               </Button>
//             </div>
//           </div>
//         )}
//       </SheetContent>
//     </Sheet>
//   )
// }


// "use client"

// import Image from "next/image"
// import { Minus, Plus, ShoppingCart, X } from "lucide-react"
// import { useCart } from "../context/CartContext"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { useState } from "react"

// // Sanity client import
// import { createClient } from "@sanity/client"

// const client = createClient({
//   projectId: "ohg2qcks",
//   dataset: "production",
//   useCdn: false,
//   token: "sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10"

// ,
// })

// export default function Cart() {
//   const { state, dispatch } = useCart()
//   const [loading, setLoading] = useState(false)

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) {
//       dispatch({ type: "REMOVE_ITEM", payload: id })
//       return
//     }
//     dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
//   }

//   const handleCheckout = async () => {
//     setLoading(true)
//     const orderData ={
//       userId: "shazsabir",  // Replace with actual user id from your authentication system
//       items: state.items.map(item => ({
//         title: item.title,
//         price: item.price,
//         quantity: item.quantity,
//         image: item.image || "/placeholder.svg",
//       })),
//       totalAmount: state.total,
//       status: "pending",
//       createdAt: new Date().toISOString(),
//     };

    
//     // Prepare the order data to send to Sanity
//     const query = `*[_type == "orders"] {
//       userId: "shazsabir",  // Replace with actual user id from your authentication system
//       items: state.items.map(item => ({
//         title: item.title,
//         price: item.price,
//         quantity: item.quantity,
//         image: item.image || "/placeholder.svg",
//       })),
//       totalAmount: state.total,
//       status: "pending",
//       createdAt: new Date().toISOString(),
//     }`

//     try {
//       // Send order data to Sanity
//       await client.create({
//         _type: "order",
//         ...orderData,
//       })

//       // Clear the cart after order creation
//       dispatch({ type: "CLEAR_CART" })
//       alert("Order placed successfully!")
//     } catch (error) {
//       console.error("Error placing order:", error)
//       alert("Failed to place order. Please try again.")
//     }

//     setLoading(false)
//   }

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Button size="icon" variant="ghost" className="relative">
//           <img src="/image/Frame.png" alt="cart" width={24} className="-mt-2"/>
//           {state.items.length > 0 && (
//             <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
//               {state.items.reduce((acc, item) => acc + item.quantity, 0)}
//             </span>
//           )}
//           <span className="sr-only">Open cart</span>
//         </Button>
//       </SheetTrigger>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>Shopping Cart ({state.items.length} items)</SheetTitle>
//         </SheetHeader>
//         {state.items.length === 0 ? (
//           <div className="flex h-full flex-col items-center justify-center space-y-2">
//             <ShoppingCart className="h-12 w-12 text-muted-foreground" />
//             <p className="text-lg font-medium">Your cart is empty</p>
//             <p className="text-sm text-muted-foreground">Add items to your cart to checkout</p>
//           </div>
//         ) : (
//           <div className="flex h-full flex-col gap-4">
//             <div className="flex-1 overflow-auto py-4">
//               {state.items.map((item) => (
//                 <div key={item.id} className="flex gap-4 py-4 border-b">
//                   <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
//                     <Image
//                       src={item.image || "/placeholder.svg"}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                       sizes="64px"
//                     />
//                   </div>
//                   <div className="flex flex-1 flex-col gap-1">
//                     <h3 className="font-medium leading-none">{item.title}</h3>
//                     <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
//                     <div className="flex items-center gap-2">
//                       <Button
//                         size="icon"
//                         variant="outline"
//                         className="h-8 w-8"
//                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                       >
//                         <Minus className="h-4 w-4" />
//                         <span className="sr-only">Decrease quantity</span>
//                       </Button>
//                       <span className="w-8 text-center">{item.quantity}</span>
//                       <Button
//                         size="icon"
//                         variant="outline"
//                         className="h-8 w-8"
//                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                       >
//                         <Plus className="h-4 w-4" />
//                         <span className="sr-only">Increase quantity</span>
//                       </Button>
//                     </div>
//                   </div>
//                   <Button
//                     size="icon"
//                     variant="ghost"
//                     className="h-8 w-8"
//                     onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
//                   >
//                     <X className="h-4 w-4" />
//                     <span className="sr-only">Remove item</span>
//                   </Button>
//                 </div>
//               ))}
//             </div>
//             <div className="space-y-4 border-t pt-4">
//               <div className="flex justify-between text-lg font-medium">
//                 <span>Total</span>
//                 <span>${state.total.toFixed(2)}</span>
//               </div>
//               <Button 
//                 className="w-full" 
//                 size="lg" 
//                 onClick={handleCheckout} 
//                 disabled={loading}
//               >
//                 {loading ? "Placing Order..." : "Checkout"}
//               </Button>
//             </div>
//           </div>
//         )}
//       </SheetContent>
//     </Sheet>
//   )
// }






"use client"

import Image from "next/image"
import { Minus, Plus, ShoppingCart, X } from "lucide-react"
import { useCart } from "../context/CartContext"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

// Sanity client import
import { createClient } from "@sanity/client"


const client = createClient({
  projectId: "ohg2qcks",
  dataset: "production",
  useCdn: false,
  token: "sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10",
})

export default function Cart() {
  const { state, dispatch } = useCart()
  const [loading, setLoading] = useState(false)

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: "REMOVE_ITEM", payload: id })
      return
    }
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const handleCheckout = async () => {
    setLoading(true)
    const orderData = {
      userId: "shazsabir",  // Replace with actual user id from your authentication system
      items: state.items.map(item => ({
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        image: item.image || "/placeholder.svg",
      })),
      totalAmount: state.total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    try {
      // Send order data to Sanity
      await client.create({
        _type: "order",
        ...orderData,
      })

      // Clear the cart after order creation
      dispatch({ type: "CLEAR_CART" })
      alert("Order placed successfully!")
    } catch (error) {
      console.error("Error placing order:", error)
      alert("Failed to place order. Please try again.")
    }

    setLoading(false)
  }

  return (
  
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <img src="/image/Frame.png" alt="cart" width={24} className="-mt-2"/>
          {state.items.length > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
              {state.items.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )}
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart ({state.items.length} items)</SheetTitle>
        </SheetHeader>
        {state.items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <ShoppingCart className="h-12 w-12 text-muted-foreground" />
            <p className="text-lg font-medium">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">Add items to your cart to checkout</p>
          </div>
        ) : (
          <div className="flex h-full flex-col gap-4">
            <div className="flex-1 overflow-auto py-4">
              {state.items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b">
                  <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="font-medium leading-none">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Decrease quantity</span>
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Increase quantity</span>
                      </Button>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              ))}
            </div>
            <div className="space-y-4 border-t pt-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total</span>
                <span>${state.total.toFixed(2)}</span>
              </div>
              <Button 
                className="w-full" 
                size="lg" 
                onClick={handleCheckout} 
                disabled={loading}
              >
                {loading ? "Placing Order..." : "Checkout"}
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>

  )
}




// 'use client'

// import Image from "next/image"
// import Link from "next/link"
// import { ChevronRight, Minus, Plus, X } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/i"
// import { useRouter } from "next/navigation"
// import { inter, poppins } from "@/app/ui/font"
// import { useEffect, useState } from 'react';
// import { getCartItems, removeFromCart, updateCartQuantity } from '../onboarding/_actions'
// import { Product } from '@/sanity/schemaTypes/product';
// import { urlFor } from '@/sanity/lib/image';
// // import toast from "react-hot-toast"
// import AuthGuard from "../../components/AuthGuard"

// export default function CartPage() {
//     const [cartItems, setCartItems] = useState<Product[]>([]);
//     const [couponCode, setCouponCode] = useState<string>(""); // State for coupon code
//     const [discount, setDiscount] = useState<number>(0); // State for discount
//     const router = useRouter();

//     useEffect(() => {
//         setCartItems(getCartItems());
//     }, []);

//     const handleRemove = (id: string) => {
//         removeFromCart(id);
//         setCartItems(getCartItems());
//     };

//     const handleQuantityChange = (id: string, quantity: number) => {
//         updateCartQuantity(id, quantity);
//         setCartItems(getCartItems());
//     };

//     const handleIncrement = (id: string) => {
//         const product = cartItems.find(item => item._id === id);
//         if (product) {
//             handleQuantityChange(id, product.quantity + 1);
//         }
//     };

//     const handleDecrement = (id: string) => {
//         const product = cartItems.find(item => item._id === id);
//         if (product && product.quantity > 1) {
//             handleQuantityChange(id, product.quantity - 1);
//         }
//     };

//     const handleApplyCoupon = () => {
//         if (couponCode === "kaladi") {
//             setDiscount(50); // Apply $50 discount
//             localStorage.setItem("appliedDiscount", "50"); // Store discount in LocalStorage
//             // toast.success(`Congratulations($50 discount)🎉`);

//             // toast.success(localStorage.getItem("appliedDiscount"))
//         } else {
//             setDiscount(0); // Reset discount if code is invalid
//             localStorage.removeItem("appliedDiscount"); // Remove any invalid discount

//         }
//     };
    

//     const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     const total = Math.max(subtotal - discount, 0); // Ensure total does not go negative

//     return (
//         <AuthGuard>
//         <div className={`${inter.className} min-h-screen bg-white`}>
//             {/* Breadcrumb */}
//             <div className="mt-10">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <nav className="flex items-center gap-2 py-3.5">
//                         <Link 
//                             href="/" 
//                             className="text-[#666666] hover:text-black transition-colors text-sm"
//                         >
//                             Home
//                         </Link>
//                         <ChevronRight className="w-4 h-4 text-[#666666]" />
//                         <span className="text-sm">Cart</span>
//                     </nav>
//                 </div>
//             </div>

//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
//                 {/* Cart Table */}
//                 <div className="mb-8 overflow-x-auto">
//                     <div className="min-w-[600px]">
//                         <div className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 sm:gap-8 pb-6 border-b text-sm font-medium">
//                             <div>Product</div>
//                             <div>Price</div>
//                             <div>Quantity</div>
//                             <div>Subtotal</div>
//                         </div>

//                         {cartItems.map((item) => (
//                             <div key={item._id} className="grid grid-cols-[2fr,1fr,1fr,1fr] gap-4 sm:gap-8 py-6 border-b items-center">
//                                 <div className="flex items-center gap-2 sm:gap-4">
//                                     <button 
//                                         className="text-[#666666] hover:text-black"
//                                         onClick={() => handleRemove(item._id)}
//                                     >
//                                         <X className="w-4 h-4 sm:w-5 sm:h-5" />
//                                     </button>
//                                     <div className="relative w-12 h-12 sm:w-16 sm:h-16 bg-[#F5F5F5]">
//                                         {item.image && (
//                                             <Image
//                                                 src={urlFor(item.image).url()}
//                                                 alt={item.name}
//                                                 fill
//                                                 className="object-contain p-2"
//                                             />
//                                         )}
//                                     </div>
//                                     <span className="font-medium text-sm sm:text-base">{item.name}</span>
//                                 </div>
//                                 <div className="text-sm sm:text-base">${item.price}</div>
//                                 <div className="flex items-center border rounded-sm max-w-[72px]">
//                                     <button 
//                                         className="p-1 sm:p-2 hover:bg-gray-50"
//                                         onClick={() => handleDecrement(item._id)}
//                                     >
//                                         <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
//                                     </button>
//                                     <span className="w-6 sm:w-8 text-center text-sm sm:text-base">{item.quantity}</span>
//                                     <button 
//                                         className="p-1 sm:p-2 hover:bg-gray-50"
//                                         onClick={() => handleIncrement(item._id)}
//                                     >
//                                         <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
//                                     </button>
//                                 </div>
//                                 <div className="text-sm sm:text-base">${item.price * item.quantity}</div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
//                     <Button 
//                         variant="outline" 
//                         className="h-10 sm:h-12 px-6 sm:px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
//                         onClick={() => router.push('/')}
//                     >
//                         Return To Shop
//                     </Button>
//                     {/* <Button 
//                         variant="outline" 
//                         className="h-10 sm:h-12 px-6 sm:px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
//                         onClick={() => setCartItems(getCartItems())}
//                     >
//                         Update Cart
//                     </Button> */}
//                 </div>

//                 {/* Coupon and Cart Total */}
//                 <div className="grid lg:grid-cols-2 gap-8">
//                     <div className="flex flex-col sm:flex-row gap-4">
//                         {/* <Input 
//                             placeholder="Coupon Code"
//                             value={couponCode}
//                             onChange={(e) => setCouponCode(e.target.value)} // Set coupon code
//                             className="h-10 sm:h-12 w-full sm:max-w-[300px] rounded-sm border-gray-300 focus:border-gray-400 focus:ring-0"
//                         /> */}
//                         <Button 
//                             onClick={handleApplyCoupon} // Apply coupon on click
//                             className="h-10 sm:h-12 px-6 sm:px-8 bg-blue-600 hover:bg-blue-800 rounded-sm w-full sm:w-auto"
//                         >
//                             Apply Coupon
//                         </Button>
//                     </div>

//                     <div className="border rounded-sm p-4 sm:p-6 space-y-4 w-full lg:max-w-[470px] lg:ml-auto">
//                         <h2 className={`${poppins.className} text-lg sm:text-xl font-medium mb-4`}>Cart Total</h2>
                        
//                         <div className="flex justify-between py-3 border-b text-sm sm:text-base">
//                             <span>Subtotal:</span>
//                             <span>${subtotal}</span>
//                         </div>
//                         <div className="flex justify-between py-3 border-b text-sm sm:text-base">
//                             <span>Discount:</span>
//                             <span>-${discount}</span>
//                         </div>
//                         <div className="flex justify-between py-3 border-b text-sm sm:text-base">
//                             <span>Shipping:</span>
//                             <span className="text-[#666666]">Free</span>
//                         </div>
//                         <div className="flex justify-between py-3 text-sm sm:text-base">
//                             <span>Total:</span>
//                             <span>${total}</span>
//                         </div>

//                         <Button 
//                             onClick={() => router.push('/checkout')}
//                             className="w-full h-10 sm:h-12 bg-blue-600 hover:bg-blue-800 rounded-sm mt-4 text-sm sm:text-base"
//                         >
//                             Proceed to checkout
//                         </Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </AuthGuard> 
//     )
// }