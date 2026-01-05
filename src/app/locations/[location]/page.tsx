import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, ChevronRight, MapPin, CheckCircle } from 'lucide-react';
import { locations, getLocationBySlug, getLocationsByCounty } from '@/data/locations';
import { services, categories } from '@/data/services';
import { siteConfig } from '@/data/config';

interface Props { params: Promise<{ location: string }> }

export async function generateStaticParams() {
  return locations.map((l) => ({ location: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: 'Not Found' };
  return {
    title: `Basement Finishing in ${location.name}, NJ`,
    description: `Professional basement finishing and remodeling in ${location.name}, ${location.county} County NJ. Licensed contractor. Free estimates. Call ${siteConfig.phone}.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { location: slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const nearby = getLocationsByCounty(location.county).filter(l => l.slug !== slug).slice(0, 8);

  return (
    <>
      <div className="bg-gray-100 py-3">
        <div className="container-main flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary-700">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/locations" className="text-gray-500 hover:text-primary-700">Locations</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary-700 font-medium">{location.name}</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-main">
          <div className="flex items-center gap-2 text-secondary-400 font-medium mb-2">
            <MapPin className="w-4 h-4" /> {location.county} County
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Basement Finishing in {location.name}, NJ</h1>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl">Expert basement finishing and remodeling services for {location.name} homeowners.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container-main grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">Basement Services in {location.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-8">Looking for professional basement contractors in {location.name}? We&apos;ve been serving {location.county} County homeowners for over 25 years, transforming unfinished basements into beautiful living spaces.</p>

            {categories.map((cat) => (
              <div key={cat.slug} className="mb-8">
                <h3 className="font-bold text-primary-800 mb-4">{cat.name} in {location.name}</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {services.filter(s => s.category === cat.slug).map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}/${location.slug}`} className="flex items-center gap-2 text-gray-600 hover:text-primary-700 py-1.5 text-sm">
                      <CheckCircle className="w-4 h-4 text-secondary-500" /> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {nearby.length > 0 && (
              <div className="mt-10 pt-8 border-t">
                <h3 className="font-bold text-primary-900 mb-4">Also Serving Nearby {location.county} County Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {nearby.map((n) => (
                    <Link key={n.slug} href={`/locations/${n.slug}`} className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-4 py-2 rounded-lg text-sm transition-colors">{n.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-primary-900 text-white rounded-xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-2">Free {location.name} Estimate</h3>
              <p className="text-primary-200 text-sm mb-4">Get a free consultation from a local basement expert.</p>
              <form className="space-y-3">
                <input type="text" placeholder="Name *" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400" required />
                <input type="tel" placeholder="Phone *" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400" required />
                <input type="email" placeholder="Email *" className="w-full px-4 py-3 rounded-lg bg-primary-800 border border-primary-700 text-white placeholder-gray-400" required />
                <button type="submit" className="btn-primary w-full">Get Free Quote</button>
              </form>
              <div className="flex items-center justify-center gap-2 mt-4 text-secondary-400">
                <Phone className="w-4 h-4" /><a href={`tel:${siteConfig.phone}`} className="font-semibold hover:underline">{siteConfig.phone}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-primary-800 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your {location.name} Basement?</h2>
          <p className="text-primary-200 mb-8">Contact us today for a free, no-obligation estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Get Free Estimate</Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
