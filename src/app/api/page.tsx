// 'use client';
// // import { useState } from 'react';

// // const ShipmentTracking = () => {
// //   const [trackingNumber, setTrackingNumber] = useState('');
// //   const [trackingData, setTrackingData] = useState(null);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false); // New loading state

// //   const handleTracking = async () => {
// //     if (!trackingNumber) {
// //       setError('Please enter a tracking number.');
// //       return;
// //     }

// //     setLoading(true);
// //     setError(''); // Reset previous errors

// //     try {
// //       const response = await fetch(`https://677faa580476123f76a77c1b.mockapi.io/shipment`);
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch tracking data');
// //       }
// //       const data = await response.json();
// //       setTrackingData(data); // Set the response data
// //     } catch (error) {

// //     } finally {
// //       setLoading(false); // Set loading to false after API call completes
// //     }
// //   };

// //   return (
// //     <div>
// //       <input 
// //         type="text" 
// //         value={trackingNumber} 
// //         onChange={(e) => setTrackingNumber(e.target.value)} 
// //         placeholder="Enter Tracking Number" 
// //       />
// //       <button onClick={handleTracking} disabled={loading}>
// //         {loading ? 'Tracking...' : 'Track Shipment'}
// //       </button>

// //       {error && <p className="text-red-500">Error: {error}</p>} {/* Error message in red */}
      
// //       {trackingData && (
// //         <div>
// //           <h3>Tracking Information:</h3>
// //           <pre>{JSON.stringify(trackingData, null, 2)}</pre>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default ShipmentTracking;








// // 'use client';
// // import { useState } from 'react';
// // import Image from 'next/image';

// // const ShipmentTracking = () => {
// //   const [trackingNumber, setTrackingNumber] = useState('');
// //   const [trackingData, setTrackingData] = useState(null);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false); // New loading state

// //   const handleTracking = async () => {
// //     if (!trackingNumber) {
// //       setError('Please enter a tracking number.');
// //       return;
// //     }

// //     setLoading(true);
// //     setError(''); // Reset previous errors
// //     console.log('Tracking number entered:', trackingNumber); // Log tracking number

// //     try {
// //       const response = await fetch(`https://677faa580476123f76a77c1b.mockapi.io/shipment`);
// //       console.log('API response:', response); // Log the response
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch tracking data');
// //       }
// //       const data = await response.json();
// //       console.log('Fetched tracking data:', data); // Log the fetched data
// //       setTrackingData(data); // Set the response data
// //     } catch (error) {
// //       console.error('Error during tracking fetch:', error); // Log error
// //       setError(error.message); // Set error message
// //     } finally {
// //       setLoading(false); // Set loading to false after API call completes
// //     }
// //   };
// //   type Shipment = {
// //     id: string;
// //     productname: string;
// //     description: string;
// //     price: number;
// //     tags: string;
// //     sizes: string;
// //     stockquantity: number;
// //     image: string | string[];  // It can be a single image or an array of images
// //   };

// //   return (
// //     <div>
// //       {/* <input 
// //         type="text" 
// //         value={trackingNumber} 
// //         onChange={(e) => setTrackingNumber(e.target.value)} 
// //         placeholder="Enter Tracking Number" 
// //       />
// //       <button onClick={handleTracking} disabled={loading}>
// //         {loading ? 'Tracking...' : 'Track Shipment'}
// //       </button>

// //       {error && <p className="text-red-500">Error: {error}</p>} {/* Error message in red */}
      
// //       {/* {trackingData && (
// //         <div>
// //           <h3>Tracking Information:</h3>
// //           <pre>{JSON.stringify(trackingData, null, 2)}</pre>
// //         </div>
// //       )} */}

// // <div>
// //       <h1>Shipments</h1>
// //       <h2>From Mock API</h2>
// //       <ul className="flex flex-col items-center justify-center gap-6">
// //         {shipments.map((shipment) => {
// //           // Log the image URL (outside JSX)
// //           console.log(shipment.image);

// //           return (
// //             <li key={shipment.id}>
// //               <h2>{shipment.productname}</h2>
// //               <p>{shipment.description}</p>
// //               <p>{shipment.tags}</p>
// //               <p>{shipment.sizes}</p>
// //               <p>{shipment.stockquantity}</p>
// //               <p>{shipment.price}</p>

// //               {/* Check if `shipment.image` is an array or string */}
// //               {Array.isArray(shipment.image) ? (
// //                 shipment.image.length > 0 ? (
// //                   shipment.image.map((image, index) => (
// //                     <div key={index}>
// //                       <Image
// //                         src={image}
// //                         alt={`Image ${index + 1} for ${shipment.price}`}
// //                         width={300}
// //                         height={300}
// //                         unoptimized={true} // Disable optimization for external images
// //                         onError={() => console.log(`Image failed to load: ${image}`)}
// //                       />
// //                     </div>
// //                   ))
// //                 )
// //               })
// //                 </li>
// //             </ul>


// //     </div>
// //   );
// // };

// // export default ShipmentTracking;









// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';

// // const ShipmentTracking = () => {
// //   const [trackingNumber, setTrackingNumber] = useState('');
// //   const [trackingData, setTrackingData] = useState(null);
// //   const [error, setError] = useState('');
// //   const [loading, setLoading] = useState(false); // New loading state
// //   const [shipments, setShipments] = useState([]); // Add state for shipments

// //   const handleTracking = async () => {
// //     if (!trackingNumber) {
// //       setError('Please enter a tracking number.');
// //       return;
// //     }

// //     setLoading(true);
// //     setError(''); // Reset previous errors
// //     console.log('Tracking number entered:', trackingNumber); // Log tracking number

// //     try {
//       // const response = await fetch(`https://677faa580476123f76a77c1b.mockapi.io/shipment`);
//       type Shipment = {
//         id: string;
//         description: string;
//         price: number;
//         image: string | string[]; 
//       };
//       const fetchShipments = async (): Promise<Shipment[]> => {
//         const res = await fetch("https://677faa580476123f76a77c1b.mockapi.io/shipment", {
//           cache: "no-store", // Disable caching for dynamic data
//         });
//         return res.json();
//       };

//       const Shipment = async () => {
//         const [shipment] = await Promise.all([fetchShipments()]);
//   //     console.log('API response:', response); // Log the response
//   //     if (!response.ok) {
//   //       throw new Error('Failed to fetch tracking data');
//   //     }
//   //     const data = await response.json();
//   //     console.log('Fetched tracking data:', data); // Log the fetched data
//   //     setTrackingData(data); // Set the response data
//   //     setShipments(data); // Store the shipment data in the state
//   //   } catch (error) {
//   //     console.error('Error during tracking fetch:', error); // Log error
//   //     setError(error.message); // Set error message
//   //   } finally {
//   //     setLoading(false); // Set loading to false after API call completes
//   //   }
//   // };

  

//   return (
//     <div>
//       {/* Input and Button for Tracking */}
//       {/* <input
//         type="text"
//         value={trackingNumber}
//         onChange={(e) => setTrackingNumber(e.target.value)}
//         placeholder="Enter Tracking Number"
//       />
//       <button onClick={handleTracking} disabled={loading}>
//         {loading ? 'Tracking...' : 'Track Shipment'}
//       </button>

//       {error && <p className="text-red-500">Error: {error}</p>} {/* Error message in red */}
      
//       {/* {trackingData && (
//         <div>
//           <h3>Tracking Information:</h3>
//           <pre>{JSON.stringify(trackingData, null, 2)}</pre>
//         </div> */}
//       {/* )}  */}

//       {/* Shipment Information from Mock API */}
//       <div>
//         <h1>Shipments</h1>
//         <h2>From Mock API</h2>
//         <ul className="flex flex-col items-center justify-center gap-6">
//           {shipment.map((shipment: Shipment) => {
//             // Log the image URL (outside JSX)
//             console.log(shipment.image);

//             return (
//               <li key={shipment.id}>
//                 {/* <h2>{shipment.productname}</h2> */}
//                 <p>{shipment.description}</p>
//                 {/* <p>{shipment.tags}</p> */}
//                 {/* <p>{shipment.sizes}</p> */}
//                 {/* <p>{shipment.stockquantity}</p> */}
//                 <p>{shipment.price}</p>

//                 {/* Check if `shipment.image` is an array or string */}
//                 {Array.isArray(shipment.image) ? (
//                   shipment.image.length > 0 ? (
//                     shipment.image.map((image, index) => (
//                       <div key={index}>
//                         <Image
//                           src={image}
//                           alt={`Image ${index + 1} for ${shipment.price}`}
//                           width={300}
//                           height={300}
//                           unoptimized={true} // Disable optimization for external images
//                           onError={() => console.log(`Image failed to load: ${image}`)}
//                         />
//                       </div>
//                     ))
//                   ) : (
//                     <p>No images available</p>
//                   )
//                 ) : (
//                   <div>
//                     <Image
//                       src={shipment.image}
//                       alt={`Image for ${shipment.price}`}
//                       width={300}
//                       height={300}
//                       unoptimized={true}
//                       onError={() => console.log(`Image failed to load: ${shipment.image}`)}
//                     />
//                   </div>
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Shipment;






