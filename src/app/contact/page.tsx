import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { siteConfig } from '@/data/config';

export const metadata: Metadata = {
  title: 'Contact Us | Free Basement Estimate',
  description: 'Contact New Jersey Basements for a free estimate on your basement project. Call us or fill out our form for a no-obligation consultation.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-primary text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get Your Free Estimate
            </h1>
            <p className="text-xl text-primary-100 mb-6">
              Ready to transform your basement? Contact us for a free, no-obligation consultation and estimate.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                Free In-Home Consultation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                Detailed Written Estimate
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent-400" />
                No Obligation
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                Request Your Free Estimate
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input type="text" id="firstName" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input type="text" id="lastName" className="input-field" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input type="tel" id="phone" className="input-field" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" id="email" className="input-field" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">City/Town</label>
                    <input type="text" id="city" className="input-field" />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select id="project" className="input-field text-gray-500">
                      <option value="">Select...</option>
                      <option value="finishing">Basement Finishing</option>
                      <option value="remodeling">Basement Remodeling</option>
                      <option value="bathroom">Bathroom Addition</option>
                      <option value="waterproofing">Waterproofing</option>
                      <option value="theater">Home Theater</option>
                      <option value="gym">Home Gym</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Project</label>
                  <textarea id="message" rows={5} className="input-field resize-none" placeholder="Describe your basement project, goals, timeline, etc."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  Submit Request
                </button>
                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive communications about your project.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="bg-primary-900 text-white rounded-xl p-8 mb-8">
                <h3 className="font-heading text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href={`tel:${siteConfig.phone}`} className="text-accent-400 text-xl font-bold hover:underline">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-primary-200 hover:text-accent-400 transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Service Area</div>
                      <p className="text-primary-200">All of New Jersey</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-800 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-accent-400" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Hours</div>
                      <p className="text-primary-200">{siteConfig.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-r-xl">
                <h3 className="font-heading text-lg font-bold text-primary-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    'Response within 24 hours',
                    'Free in-home consultation',
                    'Detailed written estimate',
                    'Design recommendations',
                    'Timeline and process overview',
                    'Financing options available',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-accent-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
