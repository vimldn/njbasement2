import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowRight, Phone, CheckCircle, Award, Users, Shield, Clock } from 'lucide-react';
import { siteConfig, stats, whyChooseUs } from '@/data/config';

export const metadata: Metadata = {
  title: 'About Us | New Jersey Basement Contractors',
  description: 'Learn about New Jersey Basements - over 25 years of experience, 2,500+ completed basements, and a commitment to quality craftsmanship.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              About New Jersey Basements
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              For over 25 years, we&apos;ve been transforming New Jersey basements into beautiful, functional living spaces. Our commitment to quality and customer satisfaction has made us the region&apos;s most trusted basement contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary-800 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-primary-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                New Jersey Basements was founded with a simple mission: to help homeowners unlock the hidden potential in their basements. What started as a small family operation has grown into one of New Jersey&apos;s most respected basement finishing companies.
              </p>
              <p>
                Over the past 25+ years, we&apos;ve completed more than 2,500 basement projects across the state. From simple finishing jobs to complete transformations with custom home theaters, guest suites, and recreational spaces, we&apos;ve done it all.
              </p>
              <p>
                Our success is built on a foundation of quality craftsmanship, honest communication, and respect for our customers&apos; homes and budgets. We treat every project as if it were our own home, and it shows in the results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;re not just contractors – we&apos;re craftsmen dedicated to exceeding your expectations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-primary-100 text-primary-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-primary-900 mb-6">
                Our Values
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-accent-100 text-accent-600 p-3 rounded-lg h-fit">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">Quality First</h3>
                    <p className="text-gray-600">We never cut corners. Every project receives our full attention and best materials.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent-100 text-accent-600 p-3 rounded-lg h-fit">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">Customer Focus</h3>
                    <p className="text-gray-600">Your satisfaction is our priority. We listen, communicate, and deliver on our promises.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent-100 text-accent-600 p-3 rounded-lg h-fit">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">Integrity</h3>
                    <p className="text-gray-600">Honest pricing, transparent communication, and work we stand behind with warranties.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent-100 text-accent-600 p-3 rounded-lg h-fit">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary-900 mb-2">Respect</h3>
                    <p className="text-gray-600">We respect your home, your time, and your investment. Clean sites and on-time work.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary-900 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-6">Licensed & Insured</h3>
              <p className="text-primary-200 mb-6">
                We&apos;re fully licensed by the State of New Jersey and carry comprehensive insurance for your protection.
              </p>
              <div className="bg-primary-800 rounded-lg p-4 mb-6">
                <p className="text-accent-400 font-semibold">{siteConfig.license}</p>
                <p className="text-primary-400 text-sm">NJ Home Improvement Contractor</p>
              </div>
              <p className="text-primary-200 text-sm">
                Our insurance coverage protects you and your property throughout the project. Ask for proof of insurance during your consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your basement project. Contact us for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <a href={`tel:${siteConfig.phone}`} className="btn-outline">
              <Phone className="w-5 h-5 mr-2" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
