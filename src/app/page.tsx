'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const categories = [
  { name: 'New Arrivals', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Best Sellers', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80&w=1200' },
  { name: 'Collections', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200' },
]

export default function Home() {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-16"
    >
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Elevate Your Style</h1>
          <p className="text-xl mb-8 text-white">Discover our curated collection of premium fashion items.</p>
          <Link href="/shop" className="bg-slate-700 bg-opacity-70 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
            Explore Now
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
    </>
  )
}


