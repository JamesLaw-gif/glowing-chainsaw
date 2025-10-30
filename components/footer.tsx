"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, MapPin, Send } from "lucide-react"

export default function Footer() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <footer className="relative bg-gradient-to-b from-charcoal to-black text-white overflow-hidden">
      {/* Artistic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-beige rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8 py-16">
        {/* Logo at Top Center */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.img 
            src="/images/makeupbycarey-logo.png" 
            alt="MakeupByCarey Logo" 
            className="h-24 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="max-w-2xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-playfair text-2xl md:text-3xl mb-3" style={{ color: '#c5bbaf' }}>
            Stay Connected
          </h3>
          <p className="text-stone-400 text-sm mb-6 max-w-md mx-auto">
            Join our exclusive list for beauty tips, wedding inspiration, and special offers.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3 bg-white/5 text-white placeholder-stone-500 border border-stone-700 focus:border-beige focus:outline-none rounded-full text-sm backdrop-blur-sm transition-all"
            />
            <motion.button
              type="submit"
              className="px-8 py-3 rounded-full font-medium text-sm flex items-center justify-center gap-2 transition-all"
              style={{ backgroundColor: '#c5bbaf', color: '#1a1a1a' }}
              whileHover={{ scale: 1.05, backgroundColor: '#d4cbc1' }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        {/* Decorative Divider */}
        <div className="relative h-px mb-12">
          <div 
            className="absolute inset-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #c5bbaf 20%, #c5bbaf 80%, transparent 100%)',
              opacity: 0.3
            }}
          ></div>
        </div>

        {/* Main Content Grid */}
        {/* (de rest van je content blijft identiek) */}

        <motion.div 
          className="text-center space-y-4 pt-8 border-t border-stone-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-stone-400 text-xs tracking-wide">
            © 2024 MakeupByCarey. Crafted with passion in Amsterdam.
          </p>
          <div className="flex justify-center gap-6 text-xs">
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors">Privacy Policy</a>
            <span className="text-stone-700">•</span>
            <a href="#" className="text-stone-500 hover:text-stone-300 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
