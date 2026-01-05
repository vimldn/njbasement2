'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Phone, Menu, X, ChevronDown, Home } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { categories } from '@/data/services';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <div className="bg-primary-900 text-white py-2 text-sm hidden md:block">
        <div className="container-main flex justify-between items-center">
          <span>{siteConfig.license} • Licensed & Insured</span>
          <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 font-semibold hover:text-secondary-400">
            <Phone className="w-4 h-4" /> {siteConfig.phone}
          </a>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="bg-primary-700 p-2 rounded-lg">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-primary-900 block leading-tight">New Jersey</span>
                <span className="text-lg font-semibold text-secondary-600">Basements</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-primary-700 font-medium">Home</Link>
              
              <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center gap-1 text-gray-700 hover:text-primary-700 font-medium">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border p-4 w-64">
                      {categories.map((cat) => (
                        <Link key={cat.slug} href={`/services#${cat.slug}`} className="block py-2 text-gray-700 hover:text-primary-700">
                          {cat.name}
                        </Link>
                      ))}
                      <hr className="my-2" />
                      <Link href="/services" className="block py-2 text-primary-700 font-semibold">All Services →</Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/locations" className="text-gray-700 hover:text-primary-700 font-medium">Areas</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-700 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary-700 font-medium">Contact</Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-primary-700 font-semibold">
                <Phone className="w-5 h-5" /> {siteConfig.phone}
              </a>
              <Link href="/contact" className="btn-primary">Free Estimate</Link>
            </div>

            <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white border-t p-4 space-y-3">
            <Link href="/" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/services" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
            <Link href="/locations" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Areas</Link>
            <Link href="/about" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="block py-2 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link href="/contact" className="btn-primary w-full text-center" onClick={() => setIsOpen(false)}>Free Estimate</Link>
          </div>
        )}
      </header>
    </>
  );
}
