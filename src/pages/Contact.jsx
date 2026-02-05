import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

// Contact Info Section
function ContactInfoSection() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Address */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Visit Us</h3>
            <p className="text-gray-600 leading-relaxed">
              <strong>Ramu & Co Jewellers</strong><br />
              160, Big Bazaar Street,<br />
              Singarathope, Devathanam,<br />
              Tiruchirappalli - 620 008,<br />
              Tamilnadu, India.
            </p>
          </div>

          {/* Call us */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Call us</h3>
            <p className="text-gray-600">
              <a href="tel:+919944954450" className="block hover:text-amber-600 transition-colors mb-2">
                +91 99449 54450
              </a>
              <a href="tel:+919488534450" className="block hover:text-amber-600 transition-colors">
                +91 94885 34450
              </a>
            </p>
          </div>

          {/* Mail us */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Mail us</h3>
            <p className="text-gray-600">
              <a 
                href="mailto:manojramesh@ramuandcojewellers.com" 
                className="hover:text-amber-600 transition-colors break-all"
              >
                manojramesh@ramuandcojewellers.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
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

  const [submitStatus, setSubmitStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For mobile field, only allow numbers and limit to 10 digits
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({ ...formData, [name]: numericValue.slice(0, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate mobile number
    if (formData.mobile.length !== 10 || !/^[0-9]{10}$/.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }

    setSubmitStatus('sending');

    try {
      // Create WhatsApp message
      const whatsappMessage = `
🏆 *RAMU & CO JEWELLERS*
*NEW CUSTOMER ENQUIRY*

━━━━━━━━━━━━━━━━━━━━━━

📋 *CUSTOMER INFORMATION:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Mobile: +91 ${formData.mobile}
📝 Subject: ${formData.subject}

💬 *MESSAGE:*
${formData.comments || 'No additional message provided'}

⏰ *RECEIVED ON:*
${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

━━━━━━━━━━━━━━━━━━━━━━
From: www.ramuandcojewellerstrichy.com
      `.trim();

      // Encode message for WhatsApp URL
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // WhatsApp number (remove the + and any spaces)
      const whatsappNumber = '919944954450';

      // Create WhatsApp URL
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in a new window
      window.open(whatsappURL, '_blank');

      // Mark as success and reset form
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        comments: ''
      });

      setTimeout(() => setSubmitStatus(''), 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2!2d78.6869!3d10.8271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzM3LjYiTiA3OMKwNDEnMTIuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ramu & Co Jewellers Location"
            />
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-6">If you wish to directly reach us, please fill out the form below</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="10-digit mobile number"
                />
                {formData.mobile && formData.mobile.length !== 10 && (
                  <p className="text-red-500 text-xs mt-1">Mobile number must be exactly 10 digits</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                  Comments
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Additional details..."
                />
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'sending'}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitStatus === 'sending' ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-sm">
                  ✓ WhatsApp opened! Please send the message to complete your enquiry.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                  ✗ Failed to open WhatsApp. Please try again or contact us directly at +91 99449 54450
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Contact Page Component
export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactInfoSection />
      <ContactFormMapSection />
    </div>
  );
}