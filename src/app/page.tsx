import Link from 'next/link';
import { Phone, CheckCircle, ArrowRight, Star, Shield, Clock, Award, ChevronRight } from 'lucide-react';
import { siteConfig, stats, testimonials } from '@/data/config';
import { services, categories } from '@/data/services';
import { locations } from '@/data/locations';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white py-20 md:py-28">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-6">
                <Shield className="w-4 h-4 text-secondary-400" /> Licensed & Insured NJ Contractor
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Basement Into <span className="text-secondary-400">Beautiful Living Space</span>
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Professional basement finishing and remodeling throughout New Jersey. From design to completion, we handle everything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" className="btn-primary text-lg">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
                <a href={`tel:${siteConfig.phone}`} className="btn-outline text-lg"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary-400" /> Free Estimates</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary-400" /> 25+ Years Experience</span>
                <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-secondary-400" /> Financing Available</span>
              </div>
            </div>
            
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-primary-900 mb-2">Get Your Free Estimate</h2>
              <p className="text-gray-600 mb-6">No obligation. Response within 24 hours.</p>
              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" className="input-field" required />
                  <input type="text" placeholder="Last Name *" className="input-field" required />
                </div>
                <input type="tel" placeholder="Phone *" className="input-field" required />
                <input type="email" placeholder="Email *" className="input-field" required />
                <select className="input-field text-gray-500">
                  <option value="">Project Type</option>
                  <option>Basement Finishing</option>
                  <option>Bathroom Addition</option>
                  <option>Waterproofing</option>
                  <option>Other</option>
                </select>
                <button type="submit" className="btn-primary w-full text-lg">Request Free Estimate</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-800 py-8">
        <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold text-secondary-400">{stat.value}</div>
              <div className="text-primary-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Complete Basement Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">From design to completion, we provide comprehensive basement services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/services#${cat.slug}`} className="card p-6 group">
                <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-primary-700">{cat.name}</h3>
                <ul className="space-y-2 mb-4">
                  {services.filter(s => s.category === cat.slug).slice(0, 3).map(s => (
                    <li key={s.slug} className="text-gray-600 text-sm flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-secondary-500" /> {s.name}
                    </li>
                  ))}
                </ul>
                <span className="text-primary-600 font-semibold text-sm">View Services →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary">View All Services <ArrowRight className="w-5 h-5 ml-2" /></Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Why New Jersey Homeowners Choose Us</h2>
              <p className="text-gray-600 text-lg mb-8">With over 25 years of experience and 2,500+ completed basements, we&apos;ve earned our reputation as New Jersey&apos;s trusted basement contractor.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: 'Licensed & Insured', desc: 'Full NJ contractor licensing' },
                  { icon: Clock, title: 'On-Time Delivery', desc: 'We respect your schedule' },
                  { icon: Award, title: 'Quality Work', desc: 'Premium materials & craftsmanship' },
                  { icon: CheckCircle, title: 'Warranty Backed', desc: 'Work guaranteed' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="bg-secondary-100 text-secondary-600 p-2 rounded-lg h-fit">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Process</h3>
              {['Free Consultation', 'Design & Planning', 'Expert Construction', 'Final Walkthrough'].map((step, i) => (
                <div key={i} className="flex gap-4 mb-4">
                  <div className="bg-secondary-500 text-primary-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                  <div>
                    <h4 className="font-semibold">{step}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Serving All of New Jersey</h2>
            <p className="text-gray-600 text-lg">We provide basement services throughout the Garden State.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {locations.slice(0, 24).map((loc) => (
              <Link key={loc.slug} href={`/locations/${loc.slug}`} className="bg-white px-4 py-3 rounded-lg text-center text-gray-700 hover:text-primary-700 hover:bg-primary-50 border hover:border-primary-300 transition-all text-sm font-medium">
                {loc.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/locations" className="text-primary-600 font-semibold">View All 75+ Service Areas →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-5 h-5 fill-secondary-400 text-secondary-400" />)}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="font-semibold text-primary-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.location}, NJ</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">Contact us today for a free, no-obligation estimate on your basement project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary text-lg">Get Free Estimate <ArrowRight className="w-5 h-5 ml-2" /></Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline text-lg"><Phone className="w-5 h-5 mr-2" /> {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
