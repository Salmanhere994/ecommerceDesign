'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const products = [
  { id: '1', name: 'Elegant Timepiece', price: 299.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400' },
  { id: '2', name: 'Designer Handbag', price: 159.99, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400' },
  { id: '3', name: 'Luxury Sunglasses', price: 199.99, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400' },
]

export default function Shop() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <h1 className="text-3xl font-bold mb-8 text-center">Discover Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/shop/${product.id}`}>
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                />
                <button className="absolute top-2 right-2 p-2 bg-white bg-opacity-75 rounded-full">
                  <Heart className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-accent font-bold">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}