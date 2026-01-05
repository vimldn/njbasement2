import Link from 'next/link';
import { Phone, Mail, MapPin, Home, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { categories } from '@/data/services';
import { locations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="bg-secondary-500 py-10">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary-950">Ready to Transform Your Basement?</h2>
            <p className="text-primary-900">Get a free estimate today. No obligation.</p>
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-primary-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors">
              Free Estimate
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="border-2 border-primary-900 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 hover:text-white transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container-main grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="bg-primary-800 p-2 rounded-lg">
                <Home className="w-6 h-6 text-secondary-400" />
              </div>
              <div>
                <span className="text-lg font-bold block">New Jersey</span>
                <span className="text-secondary-400">Basements</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4">Professional basement finishing and remodeling throughout New Jersey.</p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-gray-300 hover:text-secondary-400">
                <Phone className="w-4 h-4" /> {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-gray-300 hover:text-secondary-400">
                <Mail className="w-4 h-4" /> {siteConfig.email}
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" /> {siteConfig.address}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/services#${cat.slug}`} className="text-gray-400 hover:text-secondary-400">{cat.name}</Link>
                </li>
              ))}
              <li><Link href="/services" className="text-secondary-400 font-semibold">All Services →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-1 text-sm">
              {locations.slice(0, 8).map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="text-gray-400 hover:text-secondary-400">{loc.name}</Link>
                </li>
              ))}
              <li><Link href="/locations" className="text-secondary-400 font-semibold">All 75+ Areas →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Why Choose Us</h3>
            <ul className="space-y-2 text-sm">
              {['Licensed NJ Contractor', 'Fully Insured', 'Free Estimates', '25+ Years Experience', 'Quality Craftsmanship'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-4 h-4 text-secondary-500" /> {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 p-3 bg-primary-900 rounded-lg">
              <p className="text-secondary-400 font-semibold text-sm">{siteConfig.license}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-900 py-6">
        <div className="container-main flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-secondary-400">Privacy</Link>
            <Link href="/terms" className="hover:text-secondary-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
