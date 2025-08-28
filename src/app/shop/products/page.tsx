"use client";

import Link from "next/link";

// Dummy products
const products = [
  { id: "1", name: "Leather Jacket", price: "$120" },
  { id: "2", name: "Jaeger T-Shirt", price: "$35" },
  { id: "3", name: "Streetwear Hoodie", price: "$80" },
  { id: "4", name: "Capsule Hoodie", price: "$90" },
  { id: "5", name: "Jaeger Beanie", price: "$25" },
  { id: "6", name: "Leather Belt", price: "$40" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#fff3d0] p-8 space-y-8">
      <h1 className="text-4xl font-bold text-[#244034] mb-6 text-center">All Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#244034] text-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
          >
            <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
              Image
            </div>
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="mb-4">{product.price}</p>
            <Link
              href={`/shop/products/${product.id}`}
              className="bg-[#ffbe63] text-[#244034] px-4 py-2 rounded hover:bg-[#ffd77f] transition"
            >
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
