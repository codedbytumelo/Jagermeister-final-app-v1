"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ShopFooter from "./ShopFooter"; // updated footer component

// Dummy product data
const featuredProducts = [
  { id: "1", name: "Leather Jacket", price: "$120" },
  { id: "2", name: "Jaeger T-Shirt", price: "$35" },
  { id: "3", name: "Streetwear Hoodie", price: "$80" },
];

const newArrivals = [
  { id: "4", name: "Capsule Hoodie", price: "$90" },
  { id: "5", name: "Jaeger Beanie", price: "$25" },
  { id: "6", name: "Leather Belt", price: "$40" },
];

export default function ShopHomePage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<string[]>([]);

  const addToCart = (productId: string) => {
    setCartItems((prev) => [...prev, productId]);
  };

  return (
    <div className="space-y-16">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#244034] text-white">
        <div className="font-bold text-xl">Jaegermeister Shop</div>
        <nav className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="rounded px-2 py-1 text-black"
          />
          <input
            type="text"
            placeholder="Location"
            className="rounded px-2 py-1 text-black"
          />
          <Link href="/login">
            <button className="bg-[#ffbe63] text-[#244034] px-4 py-2 rounded hover:bg-[#ffd77f] transition">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-[#d2f34c] text-[#244034] px-4 py-2 rounded hover:bg-[#b7e036] transition">
              Sign Up
            </button>
          </Link>
          {/* Cart Button */}
          <button
            className={`relative bg-[#ffbe63] px-3 py-2 rounded transition ${
              cartItems.length === 0 ? "cursor-not-allowed opacity-60" : "hover:bg-[#ffd77f]"
            }`}
            onClick={() => {
              if (cartItems.length > 0) router.push("/shop/cart");
            }}
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartItems.length}
            </span>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#ffbe63] text-[#244034] rounded-b-3xl shadow-lg py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Discover Jaegermeister-Inspired Designs</h1>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Explore exclusive products from our competition participants. Limited editions and new arrivals weekly.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/shop/products"
            className="bg-[#244034] text-white px-6 py-3 rounded hover:bg-[#1f372f] transition"
          >
            Shop Now
          </Link>
          <Link
            href="/shop/home#featured"
            className="bg-[#fff3d0] text-[#244034] px-6 py-3 rounded hover:bg-[#ffe5a3] transition"
          >
            Featured Products
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="max-w-6xl mx-auto space-y-8 px-4">
        <h2 className="text-3xl font-bold text-center">Featured Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#244034] text-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                Image
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-[#ffbe63] text-[#244034] px-4 py-2 rounded hover:bg-[#ffd77f] transition mb-2 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section id="new" className="max-w-6xl mx-auto space-y-8 px-4">
        <h2 className="text-3xl font-bold text-center">New Arrivals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="bg-[#244034] text-white rounded-xl p-4 shadow-md hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                Image
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-[#ffbe63] text-[#244034] px-4 py-2 rounded hover:bg-[#ffd77f] transition mb-2 w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Countdown to New Product */}
      <section className="bg-[#244034] text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Countdown to New Product Drop</h2>
        <p className="text-xl mb-6">Launching Soon!</p>
        <div className="text-4xl font-mono">00:12:34:56</div>
      </section>

      {/* Footer */}
      <ShopFooter />
    </div>
  );
}
