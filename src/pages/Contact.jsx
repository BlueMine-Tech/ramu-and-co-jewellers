import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

// Contact Info Section
function ContactInfoSection() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Contact Us
          </h1>
          <div className="w-20 h-0.5 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <MapPin className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Ramu & Co Jewellers</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              160, Big Bazaar Street, Singarathope,<br />
              Devathanam, Tiruchirappalli - 620 008,<br />
              Tamilnadu, India.
            </p>
          </div>

          {/* Call us */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Phone className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Call us</h3>
            <div className="space-y-2">
              <a href="tel:+919944954450" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                +91 99449 54450
              </a>
              <a href="tel:+919488534450" className="block text-sm text-gray-600 hover:text-gray-900 transition-colors">
                +91 94885 34450
              </a>
            </div>
          </div>

          {/* Mail us */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-all text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-50 rounded-full mb-4">
              <Mail className="w-8 h-8 text-gray-700" />
            </div>
            <h3 className="text-base font-medium text-gray-900 mb-4">Mail us</h3>
            <a href="mailto:manojramesh@ramuandcojewellers.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors break-all">
              manojramesh@ramuandcojewellers.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

// Contact Form and Map Section
function ContactFormMapSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Google Map */}
      <div className="order-2 lg:order-1">
  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full min-h-[400px] lg:min-h-[600px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4824791891766!2d78.68409447484385!3d10.824167558628392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf503e9a6077b%3A0xd43f15b21a931b01!2sRamu%20%26%20Co%20Jewellers!5e0!3m2!1sen!2sin!4v1735820000000!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ramu & Co Jewellers Location"
    ></iframe>
  </div>
</div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4">
                Get In Touch With Us
              </h2>
              <div className="w-16 h-0.5 bg-gray-300 mb-4"></div>
              <p className="text-sm text-gray-600">
                If you wish to directly reach us, please fill out the form below
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name here"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Add email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter Mobile Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-normal text-gray-700 mb-2">
                  Comments
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all resize-none text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 py-3.5 bg-white border-2 border-gray-900 text-gray-900 text-xs sm:text-sm font-normal tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// Main Contact Page Component
export default function ContactPage() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <ContactInfoSection />
      <ContactFormMapSection />
    </div>
  );
}