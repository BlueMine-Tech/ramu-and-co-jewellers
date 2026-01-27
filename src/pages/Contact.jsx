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

  const [submitStatus, setSubmitStatus] = useState(''); // '', 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For mobile field, only allow numbers and limit to 10 digits
    if (name === 'mobile') {
      const numericValue = value.replace(/\D/g, '');
      setFormData({
        ...formData,
        [name]: numericValue.slice(0, 10)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
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
      // Using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '5020b0bf-7511-48ac-9a56-76b41aa85545',
          from_name: 'Ramu & Co Jewellers Website',
          subject: `New Enquiry: ${formData.subject}`,
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
        🏆 RAMU & CO JEWELLERS 🏆
        NEW CUSTOMER ENQUIRY RECEIVED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📋 CUSTOMER INFORMATION:
────────────────────────────────────────────────

👤 Name:           ${formData.name}
📧 Email:          ${formData.email}
📱 Mobile:         +91 ${formData.mobile}
📝 Subject:        ${formData.subject}

────────────────────────────────────────────────

💬 CUSTOMER MESSAGE:

${formData.comments || 'No additional message provided'}

────────────────────────────────────────────────

⏰ RECEIVED ON:
${new Date().toLocaleString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 RAMU & CO JEWELLERS
   160, Big Bazaar Street, Singarathope
   Devathanam, Tiruchirappalli - 620 008
   Tamilnadu, India

📞 Contact: +91 99449 54450 | +91 94885 34450
📧 Email: manojramesh@ramuandcojewellers.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    This is an automated notification from
         www.ramuandcojewellers.com
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          `,
          to: 'priyamuthukumar1203@gmail.com',
          replyto: formData.email,
          // Auto-reply for customer
          autoresponse: true,
          autoresponse_subject: '✓ Thank You for Contacting Ramu & Co Jewellers',
          autoresponse_message: `Dear ${formData.name},

Thank you for reaching out to Ramu & Co Jewellers! 

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ YOUR MESSAGE HAS BEEN RECEIVED

We have successfully received your enquiry regarding:
"${formData.subject}"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Our team will carefully review your message and get back to you within 24-48 hours. We appreciate your interest in our exquisite jewelry collection and look forward to assisting you.

For any urgent queries, please feel free to contact us directly:

📞 Call Us:
   +91 99449 54450
   +91 94885 34450

📧 Email Us:
   manojramesh@ramuandcojewellers.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 VISIT OUR SHOWROOM:

Ramu & Co Jewellers
160, Big Bazaar Street, Singarathope
Devathanam, Tiruchirappalli - 620 008
Tamilnadu, India

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Warm Regards,
The Ramu & Co Jewellers Team

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This is an automated response. Please do not reply to this email.
For assistance, use the contact details provided above.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          subject: '',
          comments: ''
        });
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(''), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    }
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

            <div className="space-y-6">
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
                    placeholder="Enter 10-digit Mobile Number"
                    required
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all text-sm"
                  />
                  {formData.mobile && formData.mobile.length !== 10 && (
                    <p className="text-xs text-red-500 mt-1">Mobile number must be exactly 10 digits</p>
                  )}
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

              <div className="space-y-4">
                <button
                  onClick={handleSubmit}
                  disabled={submitStatus === 'sending'}
                  className="w-full md:w-auto px-10 py-3.5 bg-white border-2 border-gray-900 text-gray-900 text-xs sm:text-sm font-normal tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="text-green-600 text-sm font-medium">
                    ✓ Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm font-medium">
                    ✗ Failed to send message. Please try again or email us directly.
                  </div>
                )}
              </div>
            </div>
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