import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  Wifi, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Coffee,
  Car,
  Shield
} from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('offices');

  const officeSpaces = [
    {
      name: "FF17 - Small Office",
      size: "586 sq ft",
      price: "£950/month",
      features: [
        "2 parking spaces included",
        "1 hour complimentary meeting room use weekly",
        "24/7 access",
        "High-speed internet",
        "Professional reception service"
      ],
      ideal: "Perfect for small businesses and startups"
    },
    {
      name: "FF18 - Medium Office",
      size: "2,508 sq ft",
      price: "£1,800/month",
      features: [
        "Leased-line broadband",
        "Access to shared amenities",
        "Minimum 12-month lease",
        "24/7 access",
        "Professional reception service"
      ],
      ideal: "Ideal for growing businesses and teams"
    },
    {
      name: "FF19 - Large Office",
      size: "Second floor unit",
      price: "£3,000/month",
      features: [
        "Larger space options available",
        "Custom fit-out options",
        "Premium location",
        "24/7 access",
        "Professional reception service"
      ],
      ideal: "Perfect for established companies"
    }
  ];

  const amenities = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Central Hub & Bistro",
      description: "Modern café and bistro area for networking and casual meetings."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Meeting & Training Rooms",
      description: "Professional meeting rooms available for booking with modern AV equipment."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Private Gated Parking",
      description: "50 parking spaces with CCTV monitoring for secure vehicle storage."
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description: "Leased-line superfast broadband with 24/7 connectivity."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Security",
      description: "Secure entry with CCTV monitoring and professional security."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Manned Reception",
      description: "Professional reception and telephone-answer service for all tenants."
    }
  ];

  const additionalServices = [
    {
      title: "Virtual Office Services",
      description: "Professional business address and mail handling services.",
      price: "From £50/month"
    },
    {
      title: "Meeting Room Hire",
      description: "Flexible meeting room booking for presentations and client meetings.",
      price: "From £25/hour"
    },
    {
      title: "Training Room Hire",
      description: "Large training rooms equipped with modern presentation facilities.",
      price: "From £40/hour"
    },
    {
      title: "Telephone Answering",
      description: "Professional call handling and message forwarding service.",
      price: "From £30/month"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                Flexible workspace solutions designed to support businesses at every stage 
                of growth. From private offices to shared amenities, we have everything 
                you need to succeed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'offices', label: 'Office Spaces' },
              { id: 'amenities', label: 'Amenities' },
              { id: 'services', label: 'Additional Services' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Office Spaces Tab */}
          {activeTab === 'offices' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Office Space Options
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose from our range of flexible office solutions designed to meet 
                  the needs of businesses at every stage of growth.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {officeSpaces.map((space, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">{space.name}</h3>
                      <p className="text-primary-100">{space.size}</p>
                    </div>
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-gray-900 mb-2">
                          {space.price}
                        </div>
                        <p className="text-gray-600">{space.ideal}</p>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {space.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="w-full btn-primary">
                        Enquire Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Amenities Tab */}
          {activeTab === 'amenities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Premium Amenities
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access to world-class facilities and services designed to enhance 
                  your business productivity and professional image.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {amenities.map((amenity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg card-hover"
                  >
                    <div className="text-primary-600 mb-4">{amenity.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600">
                      {amenity.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Additional Services Tab */}
          {activeTab === 'services' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Additional Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Enhance your business operations with our range of professional 
                  services and support options.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <span className="text-primary-600 font-semibold">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <button className="btn-secondary text-sm">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. Our pricing is clear and competitive, with flexible 
              terms to suit your business needs.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-primary-600 text-white p-6">
              <h3 className="text-2xl font-bold text-center">What's Included</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Basic Package</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">24/7 building access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">High-speed internet</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">Reception service</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Standard Package</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">All basic features</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">Meeting room access</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">Parking spaces</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Premium Package</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">All standard features</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">Custom fit-out options</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary-600" />
                      <span className="text-sm text-gray-600">Priority support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Perfect Workspace?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today to schedule a viewing and discover how International House 
              can support your business growth with flexible workspace solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01268916030" 
                className="btn-primary inline-flex items-center"
              >
                Call 01268 916 030
                <Phone className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="mailto:Space@Intlhouse.co.uk" 
                className="btn-secondary inline-flex items-center"
              >
                Email Us
                <Mail className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 