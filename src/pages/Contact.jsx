import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

// Contact Info Section
function ContactInfoSection() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Contact Us
        </h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Address */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
            <p className="text-gray-600">
              Ramu & Co Jewellers<br />
              160, Big Bazaar Street, Singarathope,<br />
              Devathanam, Tiruchirappalli - 620 008,<br />
              Tamilnadu, India.
            </p>
          </div>

          {/* Call us */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="font-semibold text-lg mb-2">Call us</h3>
            <p className="text-gray-600">
              +91 99449 54450<br />
              +91 94885 34450
            </p>
          </div>

          {/* Mail us */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="w-12 h-12 mx-auto mb-4 text-amber-600" />
            <h3 className="font-semibold text-lg mb-2">Mail us</h3>
            <p className="text-gray-600">
              manojramesh@ramuandcojewellers.com
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
From: www.ramuandcojewellers.com
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
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d78.69!3d10.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ5JzEyLjAiTiA3OMKwNDEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ramu & Co Jewellers Location"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-800">Get In Touch With Us</h2>
          <p className="text-gray-600 mb-6">
            If you wish to directly reach us, please fill out the form below
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile *
              </label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                pattern="[0-9]{10}"
                placeholder="10 digit mobile number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              {formData.mobile && formData.mobile.length !== 10 && (
                <p className="text-red-500 text-sm mt-1">
                  Mobile number must be exactly 10 digits
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'sending'}
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-amber-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {submitStatus === 'sending' ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
            </button>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-md">
                ✓ WhatsApp opened! Please send the message to complete your enquiry.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-md">
                ✗ Failed to open WhatsApp. Please try again or contact us directly at +91 99449 54450
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

// Main Contact Page Component
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactInfoSection />
      <ContactFormMapSection />
    </div>
  );
}