import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: 'ohg2qcks',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2025-01-13',
//   token: 'sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10',
// });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'ohg2qcks',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2025-01-13',
  token: process.env.SANITY_API_TOKEN || 'sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10',
});



async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    const imageId = await uploadImageToSanity(product.imageUrl);

    if (imageId) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        image: {
          _type: 'image',
          asset: {
            _ref: imageId,
          },
        },
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:`, createdProduct);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();









// import { createClient } from '@sanity/client';

// const client = createClient({
//   projectId: 'ohg2qcks',
//   dataset: 'production',
//   useCdn: true,
//   apiVersion: '2025-01-13',
//   token: 'sky0pECzxiaYqkJAvf3HHofNr8cgQb1tO6KHCQHYzjFlv3wEC7N0Qie59s157tfsJgSCtcrP3w3UelUSfZuypjOOjIhtsGJvb4AQce8IWVfOlHPSs5r3W5G9qmCcC3ej08Pc85XGLaKLYlbuWkqh0BY8pq0nkbrNzFrs5u455KrxZEd3KR10',
// });

// async function uploadImageToSanity(imageUrl) {
//   try {
//     console.log(`Uploading image: ${imageUrl}`);

//     // Fetch image from URL
//     const response = await fetch(imageUrl);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch image: ${imageUrl}`);
//     }

//     // Convert response to buffer
//     const buffer = await response.arrayBuffer();
//     const bufferImage = Buffer.from(buffer);

//     // Handle filename (convert to string if needed)
//     const filename = typeof imageUrl === 'string' 
//       ? imageUrl.split('/').pop() 
//       : String(imageUrl).split('/').pop();

//     // Upload image to Sanity
//     const asset = await client.assets.upload('image', bufferImage, {
//       filename: filename || 'unknown-file',
//     });

//     console.log(`Image uploaded successfully: ${asset._id}`);
//     return asset._id;
//   } catch (error) {
//     console.error('Failed to upload image:', imageUrl, error);
//     return null;
//   }
// }

// async function uploadProduct(product: {
//   imageUrl: string;
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   discountPercent: number;
//   isNew: boolean;
//   colors: string[];
//   sizes: string[];
// }) {
//   try {
//     // Upload the image first
//     const imageId = await uploadImageToSanity(product.imageUrl);

//     if (imageId) {
//       // Create the product document
//       const document = {
//         _type: 'products',
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         image: {
//           _type: 'image',
//           asset: {
//             _ref: imageId,
//           },
//         },
//         category: product.category,
//         discountPercent: product.discountPercent,
//         isNew: product.isNew,
//         colors: product.colors,
//         sizes: product.sizes,
//       };

//       // Upload product to Sanity
//       const createdProduct = await client.create(document);
//       console.log(`Product '${product.name}' uploaded successfully:`, createdProduct);
//     } else {
//       console.log(`Product '${product.name}' skipped due to image upload failure.`);
//     }
//   } catch (error) {
//     console.error('Error uploading product:', error);
//   }
// }

// async function importProducts() {
//   try {
//     console.log('Fetching products from API...');
    
//     // Fetch products from external API
//     const response = await fetch('https://template1-neon-nu.vercel.app/api/products');

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const products = await response.json();
//     console.log(`Found ${products.length} products. Starting upload...`);

//     // Loop through products and upload each one
//     for (const product of products) {
//       await uploadProduct(product);
//     }

//     console.log('All products have been processed.');
//   } catch (error) {
//     console.error('Error fetching or uploading products:', error);
//   }
// }

// // Start the process
// importProducts();
