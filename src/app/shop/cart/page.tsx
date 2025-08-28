"use client";

import Link from "next/link";

export default function CartPage() {
  // Dummy cart items
  const cartItems = [
    { id: "1", name: "Leather Jacket", price: "$120", quantity: 1 },
    { id: "2", name: "Jaeger T-Shirt", price: "$35", quantity: 2 },
  ];

  return (
    <div className="min-h-screen bg-[#fff3d0] p-8">
      <h1 className="text-4xl font-bold text-[#244034] mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-[#244034]/80 mb-6">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-4 bg-[#244034] text-white rounded-xl shadow"
            >
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-8">
        <Link
          href="/shop/products"
          className="bg-[#ffbe63] text-[#244034] px-6 py-3 rounded-lg hover:bg-[#ffd77f] transition font-semibold"
        >
          Continue Shopping
        </Link>
        <Link
          href="/shop/checkout"
          className={`bg-[#d2f34c] text-[#244034] px-6 py-3 rounded-lg font-semibold ${
            cartItems.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#b7e036]"
          }`}
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
