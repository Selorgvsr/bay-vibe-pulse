import { MapPin, Building2, Zap, Wind, Leaf, Shield, Cpu, Target, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import buildingHero from '/lovable-uploads/8ce75b7a-cec9-451f-8bac-48e378819448.png';
const BuildingInfrastructure = () => {
  const navigate = useNavigate();
  const sections = [{
    id: 'location',
    title: 'Location & Accessibility',
    description: 'Strategic location advantages and accessibility features ensure optimal data center placement. Prime connectivity and infrastructure access for seamless operations.',
    icon: MapPin,
    route: '/location-accessibility',
    color: 'bg-blue-500'
  }, {
    id: 'structural',
    title: 'Structural Design & Layout',
    description: 'Advanced structural design and layout optimization maximize efficiency and scalability. Engineering excellence ensures robust foundation for critical infrastructure.',
    icon: Building2,
    route: '/structural-design',
    color: 'bg-green-500'
  }, {
    id: 'power',
    title: 'Power Redundancy & Backup',
    description: 'Comprehensive power redundancy and backup systems guarantee uninterrupted operations. Multiple power sources and UPS systems ensure maximum uptime.',
    icon: Zap,
    route: '/power-redundancy',
    color: 'bg-purple-500'
  }, {
    id: 'cooling',
    title: 'Cooling & Climate Control',
    description: 'Advanced cooling and climate control systems maintain optimal operating conditions. Efficient temperature management and airflow optimization throughout the facility.',
    icon: Wind,
    route: '/cooling-climate-control',
    color: 'bg-red-500'
  }, {
    id: 'sustainability',
    title: 'Sustainability & Energy Efficiency',
    description: 'Sustainable practices and energy efficiency measures reduce environmental impact. Green technologies and renewable energy integration for responsible operations.',
    icon: Leaf,
    route: '/sustainability-energy-efficiency',
    color: 'bg-cyan-500'
  }, {
    id: 'compliance',
    title: 'Compliance & Certification Standards',
    description: 'Strict compliance and certification standards ensure industry-leading security and reliability. Meeting international standards for data center operations.',
    icon: Shield,
    route: '/compliance-certification',
    color: 'bg-orange-500'
  }];
  const features = [{
    icon: Target,
    title: 'Precision Planning',
    description: 'Detailed architectural and engineering plans optimize space, cooling, and power distribution to maintain operational excellence.'
  }, {
    icon: Building2,
    title: 'Skyscraper',
    description: 'Our state-of-the-art buildings are engineered to withstand environmental challenges, ensuring maximum uptime and protection.'
  }, {
    icon: Layers,
    title: 'Scalable Construction',
    description: 'Built with future growth in mind, our infrastructure supports seamless expansion without disruption.'
  }];
  return <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src={buildingHero} alt="Modern data center infrastructure with glass walls and blue lighting" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/b474f183-a820-4ee0-8cf4-8827d1114708.png" alt="Glass-walled data center with servers and blue lighting" className="w-full h-full object-cover opacity-40" />
          </div>

          {/* Content */}
          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Building <span className="text-green-400">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Comprehensive infrastructure solutions designed for reliability, efficiency, and scalability
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {sections.map(section => {
              const IconComponent = section.icon;
              return <div key={section.id} className="bg-gray-800 rounded-xl p-8 cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:bg-gray-700" onClick={() => navigate(section.route)}>
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
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-900">
          <div className="section-container">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return <div key={feature.title} className="group bg-gray-700/30 rounded-2xl p-8 text-center hover:bg-gray-700/50 transition-all duration-300 hover:-translate-y-2">
                    <div className="w-16 h-16 bg-green-400/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-400/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>;
            })}
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
        
      </main>
      <Footer />
    </div>;
};
export default BuildingInfrastructure;