import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    interest: 'office-space'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        interest: 'office-space'
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "01268 916 030",
      link: "tel:01268916030"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "Space@Intlhouse.co.uk",
      link: "mailto:Space@Intlhouse.co.uk"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Charfleets Road, Canvey Island, Essex SS8 0PQ",
      link: "https://maps.google.com/?q=Charfleets+Road+Canvey+Island+Essex+SS8+0PQ"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Access",
      details: "24/7 building access with secure entry",
      link: null
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "24/7 access for tenants" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="container-custom">
          <div className="py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Ready to find your perfect workspace? Contact us today to schedule 
                a viewing or discuss your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.link ? (
                  <a 
                    href={info.link}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours 
                to discuss your workspace requirements.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-xl p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-800">
                      Message Sent Successfully!
                    </h3>
                  </div>
                  <p className="text-green-700">
                    Thank you for your enquiry. We'll get back to you within 24 hours 
                    to discuss your workspace requirements.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="office-space">Office Space</option>
                      <option value="meeting-room">Meeting Room Hire</option>
                      <option value="virtual-office">Virtual Office Services</option>
                      <option value="training-room">Training Room Hire</option>
                      <option value="general-enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your workspace requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full inline-flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Visit Us
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="w-6 h-6 text-primary-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">International House</h3>
                      <p className="text-gray-600">
                        Charfleets Road<br />
                        Canvey Island, Essex<br />
                        SS8 0PQ
                      </p>
                    </div>
                  </div>
                  <a 
                    href="https://maps.google.com/?q=Charfleets+Road+Canvey+Island+Essex+SS8+0PQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Opening Hours
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:01268916030"
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Phone className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Call Us</p>
                      <p className="text-gray-600">01268 916 030</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:Space@Intlhouse.co.uk"
                    className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Mail className="w-6 h-6 text-primary-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Us</p>
                      <p className="text-gray-600">Space@Intlhouse.co.uk</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in Canvey Island, Essex, with easy access to major 
              transport links and local amenities.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.1234567890123!2d0.12345678901234567!3d51.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDA3JzM0LjQiTiAwcCcwNycyMy40IkU!5e0!3m2!1sen!2suk!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="International House Business Centre Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-400 to-primary-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule a Viewing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to arrange a personal tour of our facilities and 
              discover the perfect workspace for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01268916030" 
                className="btn-primary inline-flex items-center"
              >
                Call Now
                <Phone className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="mailto:Space@Intlhouse.co.uk" 
                className="btn-secondary inline-flex items-center"
              >
                Send Email
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 