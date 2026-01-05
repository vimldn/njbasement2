import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import { locations, counties, getLocationsByCounty } from '@/data/locations';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Professional basement finishing services throughout New Jersey. Find basement contractors near you in 75+ communities.',
};

export default function LocationsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Areas</h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl">Professional basement finishing throughout New Jersey. Find expert basement contractors near you.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">75+ Communities Served</h2>
            <p className="text-gray-600">From North Jersey to the Shore, we provide expert basement services throughout NJ.</p>
          </div>

          {counties.map((county) => {
            const locs = getLocationsByCounty(county);
            if (!locs.length) return null;
            return (
              <div key={county} className="mb-10">
                <h3 className="text-xl font-bold text-primary-800 mb-4 flex items-center gap-2 border-b pb-3">
                  <MapPin className="w-5 h-5 text-secondary-500" /> {county} County
                </h3>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {locs.map((loc) => (
                    <Link key={loc.slug} href={`/locations/${loc.slug}`} className="group flex items-center gap-2 text-gray-600 hover:text-primary-700 py-2">
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" /> {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Town?</h2>
          <p className="text-primary-200 mb-8">We serve all of New Jersey. Contact us to discuss your project.</p>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
