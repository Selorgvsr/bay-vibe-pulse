import { Target, TrendingDown, Sun, Droplets, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';

const Sustainability = () => {
  const navigate = useNavigate();
  
  const sustainabilitySections = [
    {
      icon: Target,
      title: 'Net Zero Commitment',
      description: 'Our comprehensive roadmap to achieving net-zero emissions through science-based targets and innovative solutions.',
      path: '/net-zero-commitment',
      color: 'bg-green-500'
    },
    {
      icon: TrendingDown,
      title: 'Carbon Footprint Reduction',
      description: 'Advanced strategies and technologies delivering measurable carbon emission reductions across all operations.',
      path: '/carbon-footprint-reduction',
      color: 'bg-blue-500'
    },
    {
      icon: Sun,
      title: 'Solar Energy Utilization',
      description: 'Comprehensive solar infrastructure powering our facilities with clean, renewable energy systems.',
      path: '/solar-energy-utilization',
      color: 'bg-yellow-500'
    },
    {
      icon: Droplets,
      title: 'Advanced Cooling & Water Recycling',
      description: 'Revolutionary cooling technology with closed-loop water recycling systems for maximum efficiency.',
      path: '/advanced-cooling-water-recycling',
      color: 'bg-cyan-500'
    },
    {
      icon: Shield,
      title: 'Sustainable Infrastructure & Compliance',
      description: 'LEED-certified sustainable building practices meeting the highest environmental standards.',
      path: '/sustainable-infrastructure-compliance',
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
          <img src="/lovable-uploads/sustainability-hero-green-datacenter.jpg" alt="Green sustainable data center with plants and eco-friendly technology" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gray-900/20"></div>
        </div>


        {/* Content */}
        <div className="relative z-10 section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
            <span className="text-green-400">Sustainability</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
            Comprehensive sustainability solutions designed for reliability, efficiency, and scalability
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sustainabilitySections.map(section => {
              const IconComponent = section.icon;
              return (
                <div 
                  key={section.title} 
                  className="bg-gray-800 rounded-xl p-8 cursor-pointer hover:transform hover:scale-105 transition-all duration-300 hover:bg-gray-700" 
                  onClick={() => navigate(section.path)}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Get in Touch with Us</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Have questions or need expert support? Our team is ready to help you with all your sustainability initiatives—reach out today!
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

export default Sustainability;