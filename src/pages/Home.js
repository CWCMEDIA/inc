import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Wifi, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import backgroundImage from '../assets/background.jpeg';

const Home = () => {
  const features = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Private Offices",
      description: "Modern office units from 69 sq ft to 3,569 sq ft with flexible lease terms."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Hot Desks",
      description: "Flexible coworking spaces with access to shared amenities and networking opportunities."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description: "Leased-line superfast broadband with 24/7 access to keep your business connected."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Access",
      description: "Round-the-clock access to your workspace with secure entry and CCTV monitoring."
    }
  ];

  const amenities = [
    "Manned reception and telephone-answer service",
    "Central Hub with bistro/café",
    "Meeting & training rooms",
    "Shared kitchenettes",
    "Breakout spaces",
    "Private gated parking with CCTV",
    "DDA compliant lift access",
    "50 parking spaces available"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Legal Consultancy",
      text: "The professional environment and networking opportunities have been invaluable for our growing practice.",
      rating: 5
    },
    {
      name: "Mike Chen",
      company: "Digital Marketing",
      text: "The flexible lease terms and modern facilities have allowed us to scale our business efficiently.",
      rating: 5
    },
    {
      name: "Emma Davis",
      company: "Beauty Services",
      text: "Perfect location with excellent amenities. The community here is fantastic for business growth.",
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-no-repeat text-white overflow-hidden" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Modern Workspace
                <span className="block text-primary-200">for Growing</span>
                <span className="block">Businesses</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                International House Business Centre offers flexible office solutions in Canvey Island, 
                Essex. Join our community of 22+ businesses in a modern, collaborative environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  View Available Spaces
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/about" className="btn-secondary inline-flex items-center">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">20,000 sq ft</h3>
                      <p className="text-primary-200">Total Workspace</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">22+ Businesses</h3>
                      <p className="text-primary-200">Active Community</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Canvey Island</h3>
                      <p className="text-primary-200">Prime Location</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose International House?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern facilities, flexible terms, and a supportive business community 
              designed to help your business thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Amenities
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to run your business efficiently, from professional 
                reception services to modern meeting facilities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Office Space Options
                    </h3>
                    <p className="text-gray-600">Flexible solutions for every business size</p>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">FF17 - Small Office</h4>
                      <p className="text-sm text-gray-600">586 sq ft • £950/month</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">FF18 - Medium Office</h4>
                      <p className="text-sm text-gray-600">2,508 sq ft • £1,800/month</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900">FF19 - Large Office</h4>
                      <p className="text-sm text-gray-600">Second floor • £3,000/month</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Tenants Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of satisfied businesses who have found their perfect workspace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Business Community?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to view available spaces and discover how International House 
              can support your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                View Available Spaces
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <div className="flex items-center space-x-4 text-lg">
                <Phone className="w-5 h-5" />
                <span>01268 916 030</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 