// export default {
//     name: "order",
//     title: "Order",
//     type: "document",
//     fields: [
//       { name: "userId", title: "User ID", type: "string" },
//       { name: "items", title: "Cart Items", type: "array", of: [{ type: "object", fields: [
//           { name: "title", title: "Product Name", type: "string" },
//           { name: "price", title: "Price", type: "number" },
//           { name: "quantity", title: "Quantity", type: "number" },
//           { name: "image", title: "Image", type: "string" }
//         ]}
//       ]},
//       { name: "totalAmount", title: "Total Amount", type: "number" },
//       { name: "status", title: "Order Status", type: "string", options: { list: ["Pending", "Completed", "Cancelled"] } },
//       { name: "createdAt", title: "Order Date", type: "datetime" }
//     ]
//   }
  




// export default {
//     name: "order",
//     title: "Orders",
//     type: "document",
//     fields: [
//       {
//         name: "userId",
//         title: "User ID",
//         type: "string",
//       },
//       {
//         name: "items",
//         title: "Ordered Items",
//         type: "array",
//         of: [
//           {
//             type: "object",
//             fields: [
//               { name: "title", title: "Title", type: "string" },
//               { name: "price", title: "Price", type: "number" },
//               { name: "quantity", title: "Quantity", type: "number" },
//               { name: "image", title: "Image", type: "url" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "totalAmount",
//         title: "Total Amount",
//         type: "number",
//       },
//       {
//         name: "status",
//         title: "Order Status",
//         type: "string",
//         options: {
//           list: [
//             { title: "Pending", value: "pending" },
//             { title: "Completed", value: "completed" },
//             { title: "Cancelled", value: "cancelled" },
//           ],
//         },
//       },
//       {
//         name: "createdAt",
//         title: "Created At",
//         type: "datetime",
//       },
//     ],
//   }
  