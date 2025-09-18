import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      phone: '',
      company: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img src="/lovable-uploads/8ce75b7a-cec9-451f-8bac-48e378819448.png" alt="Modern data center infrastructure" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          {/* Transparent Overlay Image */}
          <div className="absolute inset-0 z-5">
            <img src="/lovable-uploads/b474f183-a820-4ee0-8cf4-8827d1114708.png" alt="Glass-walled data center with servers and blue lighting" className="w-full h-full object-cover opacity-40" />
          </div>

          {/* Content */}
          <div className="relative z-10 section-container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white">
              <span className="text-green-400">Contact</span> Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-16">
              Comprehensive support solutions designed for reliability, efficiency, and scalability
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <input
                            type="text"
                            name="company"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <input
                            type="email"
                            name="email"
                            placeholder="Email id"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          placeholder="Your Message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Contact Info */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Our Location</h4>
                        <p className="text-foreground/70 leading-relaxed">
                          No.63,Third Floor,L.B.Road,<br />
                          Adyar,Chennai-600020
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Phone Number</h4>
                        <p className="text-foreground/70 leading-relaxed">
                          9444126240<br />
                          Available 24/7 for support
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Email Address</h4>
                        <p className="text-foreground/70 leading-relaxed">
                          shekar@marvel100logisticspark.com<br />
                          Available for all inquiries
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;