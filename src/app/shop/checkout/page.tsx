"use client";

import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff3d0] p-8">
      <h1 className="text-4xl font-bold text-[#244034] mb-6">Your Cart / Checkout</h1>

      <p className="text-lg text-[#244034]/80 mb-8 text-center max-w-md">
        This is a placeholder page for the checkout process. Items added to the cart will appear here.
      </p>

      <div className="flex gap-4">
        <Link
          href="/shop"
          className="bg-[#ffbe63] text-[#244034] px-6 py-3 rounded-lg hover:bg-[#ffd77f] transition font-semibold"
        >
          Continue Shopping
        </Link>
        <button
          disabled
          className="bg-[#d2f34c] text-[#244034] px-6 py-3 rounded-lg opacity-50 cursor-not-allowed font-semibold"
        >
          Proceed to Payment (Coming Soon)
        </button>
      </div>
    </div>
  );
}
