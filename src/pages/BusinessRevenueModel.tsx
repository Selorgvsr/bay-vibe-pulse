import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Building2, Cloud, Globe, Settings, Database } from 'lucide-react';
import { Button } from '../components/ui/button';

const BusinessRevenueModel = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'colocation',
      title: 'Colocation Services',
      description: 'Rent dedicated rack or floor space in our secure facility for your servers and IT equipment. Charges are based on the amount of space, power consumption, and network connectivity. This allows businesses to leverage advanced infrastructure without the cost of building their own data center.',
      icon: Building2,
      route: '/colocation-services',
      color: 'bg-blue-500'
    },
    {
      id: 'cloud',
      title: 'Cloud Operations',
      description: 'Comprehensive cloud computing services including virtual machines, storage, and networking resources. Our cloud platform offers scalable solutions with pay-as-you-use pricing, automated backup, and multi-region availability for enterprise-grade performance and reliability.',
      icon: Cloud,
      route: '/cloud-operations',
      color: 'bg-green-500'
    },
    {
      id: 'hosting',
      title: 'Hosting Services',
      description: 'Professional web and application hosting solutions with high-performance servers, content delivery networks, and managed databases. We provide shared, VPS, and dedicated hosting options with 99.9% uptime guarantee and 24/7 technical support for optimal performance.',
      icon: Globe,
      route: '/hosting-services',
      color: 'bg-purple-500'
    },
    {
      id: 'managed',
      title: 'Managed Solutions',
      description: 'Complete IT infrastructure management including server monitoring, security updates, backup management, and performance optimization. Our expert team handles all technical aspects, allowing you to focus on your core business while ensuring maximum system reliability.',
      icon: Settings,
      route: '/managed-solutions',
      color: 'bg-red-500'
    },
    {
      id: 'information',
      title: 'Information Services',
      description: 'Advanced data analytics, interconnectivity solutions, and digital transformation services. We provide real-time data processing, business intelligence tools, and seamless integration between different systems for enhanced operational efficiency and insights.',
      icon: Database,
      route: '/information-services',
      color: 'bg-cyan-500'
    }
  ];

  const features = [
    {
      icon: '🔄',
      title: 'High Availability & Reliability',
      description: 'Provides uninterrupted operations with redundant systems and seamless failover.'
    },
    {
      icon: '📊',
      title: 'Scalable Infrastructure',
      description: 'Easily accommodate scaling for businesses to build and grow their IT infrastructure.'
    },
    {
      icon: '🛡️',
      title: 'Advanced Security & Compliance',
      description: 'Protects data with encryption, AI threat detection, and industry compliance.'
    },
    {
      icon: '⚡',
      title: 'Optimized Performance',
      description: 'Accelerated workloads by caching analytics, faster networking and cost processing.'
    },
    {
      icon: '💰',
      title: 'Cost Efficiency',
      description: 'Lower operational costs with pay-as-you-go and efficient infrastructure.'
    },
    {
      icon: '🔒',
      title: 'Business Continuity & Disaster Recovery',
      description: 'Multi-region backup and digital services to reduce business continuity risk.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/business-revenue-model-hero.jpg" 
            alt="Futuristic city with 5G network technology representing business growth and digital transformation" 
            className="w-full h-full object-cover opacity-40" 
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Business Revenue <span className="text-green-400">Model</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Comprehensive business solutions designed for reliability, efficiency, and scalability
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={section.id} 
                  className="bg-gray-800 rounded-xl p-8 cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:bg-gray-700"
                  onClick={() => navigate(section.route)}
                >
                  <div className={`${section.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{section.description}</p>
                  <div className="mt-6">
                    <span className="text-green-400 font-medium hover:text-green-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg hover:border-primary/50 transition-colors">
                <div className="text-3xl mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch with Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or need expert support? Our team is ready to help you with all your data center needs—reach out today!
          </p>
          <Button 
            onClick={() => navigate('/contact')}
            size="lg"
            className="px-8 py-3"
          >
            Contact Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessRevenueModel;