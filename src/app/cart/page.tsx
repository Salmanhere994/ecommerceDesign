"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";
import { useCart } from "../components/CardContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">
        Your Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link
            href="/shop"
            className="bg-gray-800 text-white p-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow"
              >
                <div className="flex items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 className="w-6 h-6" />
                </button>
              </motion.div>
            ))}
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-4 font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
