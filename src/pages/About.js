import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  MapPin, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "20,000", label: "Square Feet", icon: <Building className="w-6 h-6" /> },
    { number: "22+", label: "Active Businesses", icon: <Users className="w-6 h-6" /> },
    { number: "50", label: "Parking Spaces", icon: <MapPin className="w-6 h-6" /> },
    { number: "24/7", label: "Access", icon: <Clock className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Community First",
      description: "We believe in fostering a collaborative environment where businesses can grow together, share resources, and create meaningful connections."
    },
    {
      title: "Flexibility",
      description: "Our flexible lease terms and diverse office solutions accommodate businesses at every stage of growth, from startups to established companies."
    },
    {
      title: "Professional Excellence",
      description: "We maintain the highest standards of service and facilities to ensure our tenants have everything they need to succeed."
    },
    {
      title: "Innovation",
      description: "We continuously invest in modern technology and amenities to provide cutting-edge workspace solutions for modern businesses."
    }
  ];

  const team = [
    {
      name: "Reception Team",
      role: "Professional Support",
      description: "Our manned reception provides telephone-answer service and professional support for all tenants."
    },
    {
      name: "Maintenance Team",
      role: "Facility Management",
      description: "Dedicated staff ensuring all facilities are maintained to the highest standards."
    },
    {
      name: "Management Team",
      role: "Business Support",
      description: "Experienced professionals helping businesses find their perfect workspace solution."
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
                About International House
              </h1>
              <p className="text-xl max-w-3xl mx-auto opacity-90">
                A modern business centre in the heart of Canvey Island, Essex, 
                providing flexible workspace solutions for growing businesses since our establishment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  International House Business Centre was established to provide modern, 
                  flexible workspace solutions for businesses in the Canvey Island area. 
                  Located on Charfleets Road, our facility has become a hub for innovation 
                  and collaboration.
                </p>
                <p>
                  With 20,000 square feet of modern office space, we accommodate a diverse 
                  community of 22+ businesses ranging from legal consultancies and digital 
                  marketing agencies to beauty services and creative workshops.
                </p>
                <p>
                  Our commitment to providing flexible lease terms, modern amenities, and 
                  a supportive business environment has made us the preferred choice for 
                  growing businesses in Essex.
                </p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Location & Accessibility
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Charfleets Road</p>
                      <p className="text-gray-600">Canvey Island, Essex SS8 0PQ</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">24/7 Access</p>
                      <p className="text-gray-600">Secure entry with CCTV monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Building className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Modern Facilities</p>
                      <p className="text-gray-600">DDA compliant with lift access</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at International House Business Centre.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to providing exceptional service and support 
              to our business community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Business Community
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join a diverse community of professionals and entrepreneurs who have chosen 
                International House as their business home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Legal & Professional Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Digital Marketing & Creative</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Beauty & Wellness Services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Training & Education</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Film Production & Media</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Community Highlights
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Networking Events</h4>
                      <p className="text-sm text-gray-600">Regular business networking opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Shared Resources</h4>
                      <p className="text-sm text-gray-600">Access to meeting rooms and facilities</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Environment</h4>
                      <p className="text-sm text-gray-600">Modern workspace designed for success</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Join Our Business Community
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Discover how International House can support your business growth 
              with flexible workspace solutions and a supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01268916030" 
                className="btn-primary inline-flex items-center"
              >
                Call Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="mailto:Space@Intlhouse.co.uk" 
                className="btn-secondary inline-flex items-center"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 