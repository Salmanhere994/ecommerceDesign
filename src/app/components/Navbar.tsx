'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, ShoppingBag, ShoppingCart } from 'lucide-react'
import { useCart } from './CardContext'
import { motion } from 'framer-motion'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/shop', icon: ShoppingBag, label: 'Shop' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { cartItems } = useCart()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          LUXE
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="relative">
              <item.icon className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
              <span className="sr-only">{item.label}</span>
              {pathname === item.href && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary"
                  layoutId="navbar-indicator"
                />
              )}
            </Link>
          ))}
          <Link href="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-secondary hover:text-primary transition-colors" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  )
}