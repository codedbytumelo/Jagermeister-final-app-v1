"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

// Dummy product data
const productData = {
  "1": { name: "Leather Jacket", price: "$120", description: "High-quality leather jacket for all occasions." },
  "2": { name: "Jaeger T-Shirt", price: "$35", description: "Soft cotton T-shirt with Jaegermeister logo." },
  "3": { name: "Streetwear Hoodie", price: "$80", description: "Comfortable hoodie with streetwear style." },
  "4": { name: "Capsule Hoodie", price: "$90", description: "Limited edition hoodie from our capsule collection." },
  "5": { name: "Jaeger Beanie", price: "$25", description: "Warm beanie with Jaegermeister branding." },
  "6": { name: "Leather Belt", price: "$40", description: "Premium leather belt for everyday use." },
};

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const product = productData[params.id as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fff3d0] p-8">
        <p className="text-[#244034]/80">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff3d0] p-8 max-w-4xl mx-auto">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded bg-[#ffbe63] text-[#244034] hover:bg-[#ffd77f] transition"
      >
        Back
      </button>

      <div className="bg-[#244034] text-white rounded-xl p-6 shadow-md space-y-4">
        <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          Product Image
        </div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold">{product.price}</p>
        <p className="text-[#d2f34c]/90">{product.description}</p>

        <Link
          href="/shop/cart"
          className="inline-block mt-4 bg-[#d2f34c] text-[#244034] px-6 py-3 rounded hover:bg-[#b7e036] transition font-semibold"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
}
