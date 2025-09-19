import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Zap, TrendingUp, Cpu } from 'lucide-react';
import { Button } from '../components/ui/button';

const MaintenanceFutureInnovations = () => {
  const navigate = useNavigate();

  const sections = [
    {
      id: 'expansion',
      title: 'Expansion Plans & New Technologies',
      description: 'We are scaling our data center footprint with next-gen infrastructure, including liquid cooling, modular designs, and renewable energy integration. Our expansion focuses on high-density computing environments to support AI-driven workloads. Future upgrades will enhance efficiency, security, and sustainability.',
      icon: Zap,
      route: '/expansion-plans-new-technologies',
      color: 'bg-green-500'
    },
    {
      id: 'trends',
      title: 'Emerging Trends in Data Center Infrastructure',
      description: 'The industry is shifting toward hyperscale data centers, energy-efficient cooling, and cloud repatriation strategies. Innovations like two-phase liquid cooling and AI-powered automation are redefining performance and sustainability. We are adopting cutting-edge solutions to stay ahead of evolving demands.',
      icon: TrendingUp,
      route: '/emerging-trends-data-center-infrastructure',
      color: 'bg-blue-500'
    },
    {
      id: 'ai-edge',
      title: 'AI & Edge Computing Integration',
      description: 'AI-driven data processing and edge computing are transforming real-time analytics and decentralized infrastructure. Our roadmap includes low-latency edge deployments to support AI inferencing and high-speed data transmission. These advancements ensure scalability, security, and optimized performance.',
      icon: Cpu,
      route: '/ai-edge-computing-integration',
      color: 'bg-purple-500'
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
            src="/lovable-uploads/maintenance-future-hero.png" 
            alt="Modern data center corridor with blue server racks and lighting" 
            className="w-full h-full object-cover opacity-30" 
          />
          <div className="absolute inset-0 bg-gray-900/20"></div>
        </div>


        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Maintenance & Future <span className="text-green-400">Innovations</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Comprehensive innovation solutions designed for reliability, efficiency, and scalability
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Data Center Maintenance Activities Section */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Data Center Maintenance Activities</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Regular Infrastructure Inspections:</h4>
                <p className="text-gray-300 text-sm">
                  Routine checks ensure all systems maintain optimal standards and performance.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Predictive Monitoring:</h4>
                <p className="text-gray-300 text-sm">
                  Monitoring systems help detect potential issues early to prevent downtime.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Scheduled Servicing:</h4>
                <p className="text-gray-300 text-sm">
                  Systematic maintenance keeps equipment running smoothly and efficiently.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Optimized Cooling Systems:</h4>
                <p className="text-gray-300 text-sm">
                  Climate and temperature control to maintain ideal temperature and prevent overheating.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Power Redundancy Management:</h4>
                <p className="text-gray-300 text-sm">
                  Backup systems ensure continuous power to prevent outages and uptime options.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Enhanced Cybersecurity:</h4>
                <p className="text-gray-300 text-sm">
                  24/7 threat monitoring to maintain digital assets and network vulnerabilities.
                </p>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                <h4 className="text-primary font-semibold mb-2">Standards Compliance:</h4>
                <p className="text-gray-300 text-sm">
                  Adherence to industry regulations ensures security efficiency and long-term viability.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-6 rounded-lg">
              <img 
                src="/lovable-uploads/maintenance-technician.png" 
                alt="Data center maintenance - technician working with servers" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
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

export default MaintenanceFutureInnovations;