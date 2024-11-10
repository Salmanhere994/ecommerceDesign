"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { useCart } from "@/app/components/CardContext";

const products = [
  {
    id: "1",
    name: "Elegant Timepiece",
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400",
    description:
      "A sophisticated timepiece that combines classic design with modern functionality. Perfect for both casual and formal occasions.",
  },
  {
    id: "2",
    name: "Designer Handbag",
    price: 159.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400",
    description:
      "Crafted from premium materials, this designer handbag offers both style and practicality. A must-have accessory for the fashion-conscious.",
  },
  {
    id: "3",
    name: "Luxury Sunglasses",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400', description: 'Protect your eyes in style with these luxury sunglasses. Featuring UV protection and a timeless design, they're perfect for any outdoor activity.",
  },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const [selectedSize, setSelectedSize] = useState("M");
  const { addToCart } = useCart();

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <button className="absolute top-4 right-4 p-2 bg-white bg-opacity-75 rounded-full">
            <Heart className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
          </button>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            <Star className="w-5 h-5 text-accent fill-current" />
            <Star className="w-5 h-5 text-accent fill-current" />
            <Star className="w-5 h-5 text-accent fill-current" />
            <Star className="w-5 h-5 text-accent fill-current" />
            <Star className="w-5 h-5 text-gray-300 fill-current" />
            <span className="ml-2 text-gray-600">(4.8) 124 reviews</span>
          </div>
          <p className="text-2xl font-bold text-primary mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Size</h3>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 rounded-full ${
                    selectedSize === size
                      ? "bg-gray-800 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-gray-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-60 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
