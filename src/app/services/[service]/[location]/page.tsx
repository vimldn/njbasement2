import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, Phone, CheckCircle, ChevronRight, MapPin, Shield, Clock, Award, Star } from 'lucide-react';
import { services, getServiceBySlug, getServicesByCategory } from '@/data/services';
import { locations, getLocationBySlug, getLocationsByCounty } from '@/data/locations';
import { siteConfig, testimonials } from '@/data/config';

interface Props { params: Promise<{ service: string; location: string }> }

export async function generateStaticParams() {
  const params: { service: string; location: string }[] = [];
  for (const s of services) {
    for (const l of locations) {
      params.push({ service: s.slug, location: l.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: sSlug, location: lSlug } = await params;
  const service = getServiceBySlug(sSlug);
  const location = getLocationBySlug(lSlug);
  if (!service || !location) return { title: 'Not Found' };
  return {
    title: `${service.name} in ${location.name}, NJ`,
    description: `Professional ${service.name.toLowerCase()} services in ${location.name}, ${location.county} County NJ. Licensed contractor. Free estimates. Call ${siteConfig.phone}.`,
  };
}

export default async function ServiceLocationPage({ params }: Props) {
  const { service: sSlug, location: lSlug } = await params;
  const service = getServiceBySlug(sSlug);
  const location = getLocationBySlug(lSlug);
  if (!service || !location) notFound();

  const related = getServicesByCategory(service.category).filter(s => s.slug !== sSlug).slice(0, 4);
  const nearby = getLocationsByCounty(location.county).filter(l => l.slug !== lSlug).slice(0, 6);
  const testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.name} - ${location.name}`,
    description: `${service.name} services in ${location.name}, NJ`,
    telephone: siteConfig.phone,
    areaServed: { '@type': 'City', name: location.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="bg-gray-100 py-3">
        <div className="container-main flex flex-wrap items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-primary-700">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href="/services" className="text-gray-500 hover:text-primary-700">Services</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <Link href={`/services/${service.slug}`} className="text-gray-500 hover:text-primary-700">{service.name}</Link>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          <span className="text-primary-700 font-medium">{location.name}</span>
        </div>
      </div>

      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-14">
        <div className="container-main">
          <div className="flex items-center gap-2 text-secondary-400 font-medium mb-2">
            <MapPin className="w-4 h-4" /> {location.name}, {location.county} County
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{service.name} in {location.name}, NJ</h1>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl">Professional {service.name.toLowerCase()} services for {location.name} homeowners. Licensed, insured, quality guaranteed.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link href="/contact" className="btn-primary">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2"><Shield className="w-4 h-4 text-secondary-400" /> Licensed & Insured</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-secondary-400" /> Free Estimates</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-secondary-400" /> 25+ Years Experience</span>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="container-main grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">{service.name} Services in {location.name}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">Looking for professional {service.name.toLowerCase()} services in {location.name}? Our experienced team has been serving {location.county} County homeowners for over 25 years.</p>
            <p className="text-gray-700 leading-relaxed mb-8">{service.description}</p>

            <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 rounded-r-lg mb-8">
              <h3 className="font-bold text-primary-900 mb-4">Why {location.name} Homeowners Choose Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5" /> Local knowledge of {location.name} building codes</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5" /> Trusted by {location.county} County families for 25+ years</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5" /> Free in-home consultations in {location.name}</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary-600 mt-0.5" /> Quality craftsmanship with warranty protection</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary-400 text-secondary-400" />)}</div>
              <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="font-semibold text-primary-900">{testimonial.name}</div>
              <div className="text-sm text-gray-500">{testimonial.location}, NJ</div>
            </div>

            {nearby.length > 0 && (
              <div>
                <h3 className="font-bold text-primary-900 mb-4">Also Serving Nearby {location.county} County Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {nearby.map((n) => (
                    <Link key={n.slug} href={`/services/${service.slug}/${n.slug}`} className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-4 py-2 rounded-lg text-sm transition-colors">{n.name}</Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="bg-primary-900 text-white rounded-xl p-6 mb-6 sticky top-24">
              <h3 className="text-xl font-bold mb-2">Free {location.name} Estimate</h3>
              <p className="text-primary-200 text-sm mb-4">Get a free quote for {service.name.toLowerCase()} in {location.name}.</p>
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

            {related.length > 0 && (
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-primary-900 mb-4">More Services in {location.name}</h3>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}><Link href={`/services/${r.slug}/${location.slug}`} className="text-gray-600 hover:text-primary-700 text-sm flex items-center gap-2"><ArrowRight className="w-4 h-4" /> {r.name}</Link></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="py-16 bg-primary-800 text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for {service.name} in {location.name}?</h2>
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
