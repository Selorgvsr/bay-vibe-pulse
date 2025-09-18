import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Settings, Leaf, Zap, Layers, Shield, Building2, Network, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataCenter = () => {
  const dataCenterFeatures = [
    {
      title: "Location Advantage",
      description: "Strategic placement in Sirusiri IT Corridor ideal location from prime infrastructure, ensuring seamless areas of links.",
      icon: MapPin,
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Operations & Maintenance",
      description: "24/7 real-time monitoring and hands on system support enabling operations optimization and proactive maintenance.",
      icon: Settings,
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "Sustainable Land Utilization",
      description: "With open area land allocation, 2 of our energy solution certifies a plus for facility and solar to created a favorable designing environment foot-print.",
      icon: Leaf,
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Power & Cooling",
      description: "Redundant power supply 98-12kw tier capacity 18% and proper minimum cooling energy with physical and solar deployment.",
      icon: Zap,
      color: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Technology Stack",
      description: "Modern and future grade cloud platform architecture and scalable lower technology service providing deployment.",
      icon: Layers,
      color: "from-purple-500/20 to-violet-500/20"
    },
    {
      title: "Security",
      description: "24/7 round the confidence with biophysics and CCTV and access control system with trained security personnel.",
      icon: Shield,
      color: "from-red-500/20 to-pink-500/20"
    },
    {
      title: "Smart Structural Design",
      description: "Building optimized for efficient use of space and clean architectural design to store the facility more of efficient and ideally for future expansion.",
      icon: Building2,
      color: "from-indigo-500/20 to-blue-500/20"
    },
    {
      title: "IT Infrastructure",
      description: "Comprehensive backup, high-specification network redundant solutions more reinforced for countless traceable deployments.",
      icon: Network,
      color: "from-cyan-500/20 to-teal-500/20"
    },
    {
      title: "Standards-Driven Construction",
      description: "Built to meet ISO 27001, SOC 2 and other construction such as Uptime Institute Tier III certified process on constructional performance and security.",
      icon: Award,
      color: "from-yellow-500/20 to-orange-500/20"
    },
    {
      title: "Digital Connectivity",
      description: "Direct fiber backbone, multi-path messaging the high-end telecommunications with bandwidth to live regional data center.",
      icon: Globe,
      color: "from-pink-500/20 to-rose-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src="/lovable-uploads/glowing-skyscraper-hero.jpg" alt="Glowing Skyscraper Data Center at Dusk" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/10413a3f-a466-4a94-8fc4-6b10e9625660.png" alt="Next-Gen Data Center 3D Visualization" className="w-full h-full object-cover opacity-40" />
          </div>

          {/* Content */}
          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              Data <span className="text-green-400">Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Next-generation data center infrastructure designed for reliability, efficiency, and scalability
            </p>
          </div>
        </section>

        {/* Next-Gen Data Center Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-black">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Next-Gen Data Center @ Sirusiri IT Corridor
              </h2>
              <div className="relative mx-auto max-w-4xl">
                <img 
                  src="/lovable-uploads/10413a3f-a466-4a94-8fc4-6b10e9625660.png" 
                  alt="Next-Gen Data Center 3D Visualization" 
                  className="w-full h-[500px] object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gradient-to-br from-black to-slate-900">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {dataCenterFeatures.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="section-container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch with Us</h2>
              <p className="text-xl text-slate-400 mb-8">
                Have questions or need expert support? Our team is ready to help you with all 
                your data center needs—reach out today.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DataCenter;