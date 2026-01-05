import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, CheckCircle, ChevronRight, MapPin } from 'lucide-react';
import { services, getServiceBySlug, getServicesByCategory, categories } from '@/data/services';
import { locations } from '@/data/locations';
import { siteConfig } from '@/data/config';

interface Props { params: Promise<{ service: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Not Found' };
  return {
    title: `${service.name} Services in New Jersey`,
    description: `Professional ${service.name.toLowerCase()} services throughout NJ. ${service.shortDesc} Free estimates.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getServicesByCategory(service.category).filter(s => s.slug !== slug).slice(0, 4);
  const cat = categories.find(c => c.slug === service.category);

  return (
    <>
      <div className="bg-gray-100 py-3">
        <div className="container-main flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary-700">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/services" className="text-gray-500 hover:text-primary-700">Services</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary-700 font-medium">{service.name}</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-main">
          <div className="text-secondary-400 font-medium mb-2">{cat?.name}</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{service.name}</h1>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl">{service.shortDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container-main grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">Professional {service.name} Services</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{service.description}</p>

            <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-primary-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-2">
                {['Licensed & insured NJ contractor', '25+ years of experience', 'Quality materials & craftsmanship', 'Transparent pricing', 'Warranty backed work'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700"><CheckCircle className="w-5 h-5 text-secondary-600" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-primary-900 mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-secondary-500" /> {service.name} by Location</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {locations.slice(0, 15).map((loc) => (
                  <Link key={loc.slug} href={`/services/${service.slug}/${loc.slug}`} className="text-gray-600 hover:text-primary-700 text-sm py-1">{service.name} in {loc.name}</Link>
                ))}
              </div>
              <Link href="/locations" className="text-primary-600 font-semibold text-sm mt-4 inline-block">View All Locations →</Link>
            </div>
          </div>

          <div>
            <div className="bg-primary-900 text-white rounded-xl p-6 mb-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Get a Free Quote</h3>
              <form className="space-y-3">
                <input type="text" placeholder="Name *" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400" required />
                <input type="tel" placeholder="Phone *" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400" required />
                <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400" required />
                <button type="submit" className="btn-primary w-full">Get Free Quote</button>
              </form>
            </div>

            {related.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-4">Related Services</h3>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}><Link href={`/services/${r.slug}`} className="text-gray-600 hover:text-primary-700 text-sm flex items-center gap-2"><ArrowRight className="w-4 h-4" /> {r.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="py-16 bg-primary-800 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-200 mb-8">Contact us for a free estimate on {service.name.toLowerCase()}.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Free Estimate</Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
