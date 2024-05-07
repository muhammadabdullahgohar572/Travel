// import React from 'react';

// // Sample data representing categories and subcategories
// const categoriesData = [
//   {
//     name: 'Electronics',
//     description: 'Explore our latest collection of electronic gadgets and devices.',
//     subcategories: ['Smartphones', 'Laptops & Tablets', 'Cameras & Photography', 'Audio & Headphones', 'Wearable Technology']
//   },

// ];

// export const CaCategoriesPage=()=>{
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Shop by Category</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {categoriesData.map(category => (
//           <div key={category.name} className="bg-white rounded-lg shadow-md p-6">
//             <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-md mb-4" />
//             <h2 className="text-xl font-bold mb-2">{category.name}</h2>
//             <p className="text-gray-700 mb-4">{category.description}</p>
//             <h3 className="text-lg font-semibold mb-2">Subcategories:</h3>
//             <ul className="list-disc pl-6">
//               {category.subcategories.map(subcategory => (
//                 <li key={subcategory} className="text-gray-600">{subcategory}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


