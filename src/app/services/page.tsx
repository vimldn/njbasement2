import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { services, categories } from '@/data/services';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Basement Services',
  description: 'Complete basement finishing and remodeling services in New Jersey including waterproofing, electrical, plumbing, and custom build-outs.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16 md:py-20">
        <div className="container-main">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Basement Services</h1>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl">Complete basement finishing and remodeling services. Whatever your vision, we have the expertise to make it reality.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-main">
          {categories.map((cat, idx) => (
            <div key={cat.slug} id={cat.slug} className={`scroll-mt-24 ${idx > 0 ? 'mt-16' : ''}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-8 pb-4 border-b">{cat.name}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.filter(s => s.category === cat.slug).map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className="card p-6 group border hover:border-primary-300">
                    <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                    <span className="text-primary-600 font-semibold text-sm">Learn More →</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Basement?</h2>
          <p className="text-primary-200 mb-8">Contact us for a free consultation and estimate.</p>
          <Link href="/contact" className="btn-primary">Get Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
