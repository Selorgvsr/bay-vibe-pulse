import { Button } from "@/components/ui/button";
import { NeonText } from "@/components/NeonText";
import { GlowCard } from "@/components/GlowCard";
import heroImage from "@/assets/bay-neon-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-bay">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-neon-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-neon-pulse animation-delay-1000" />
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-neon-pulse animation-delay-2000" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <NeonText variant="primary" glow pulse>
              BAY
            </NeonText>
            <span className="text-foreground mx-4">×</span>
            <NeonText variant="secondary" glow pulse>
              VIBE
            </NeonText>
          </h1>
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              <NeonText variant="accent" glow>
                Neon Pulse
              </NeonText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the electric energy of the Bay Area through a cyberpunk lens. 
              Where coastal vibes meet neon dreams.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="neon" size="lg" className="px-8 py-6 text-lg">
              Enter the Grid
            </Button>
            <Button variant="cyber" size="lg" className="px-8 py-6 text-lg">
              Explore Vibes
            </Button>
          </div>
        </div>

        {/* Scrolling Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-neon-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold mb-4">
            <NeonText variant="primary" glow>
              Digital Atmosphere
            </NeonText>
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the intersection of technology and coastal culture
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <GlowCard variant="primary" className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-pulse rounded-full mx-auto flex items-center justify-center animate-gradient-pulse">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">
              <NeonText variant="primary">Electric Energy</NeonText>
            </h4>
            <p className="text-muted-foreground">
              Feel the pulse of the city through electrifying visual experiences
            </p>
          </GlowCard>

          <GlowCard variant="secondary" className="p-8 text-center" pulse>
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-neon rounded-full mx-auto flex items-center justify-center animate-gradient-pulse">
                <span className="text-2xl">🌊</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">
              <NeonText variant="secondary">Bay Vibes</NeonText>
            </h4>
            <p className="text-muted-foreground">
              Coastal atmosphere enhanced with futuristic neon aesthetics
            </p>
          </GlowCard>

          <GlowCard variant="accent" className="p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-pulse rounded-full mx-auto flex items-center justify-center animate-gradient-pulse">
                <span className="text-2xl">🎵</span>
              </div>
            </div>
            <h4 className="text-xl font-bold mb-4">
              <NeonText variant="accent">Rhythmic Pulse</NeonText>
            </h4>
            <p className="text-muted-foreground">
              Synchronized animations that move to the beat of the digital age
            </p>
          </GlowCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-neon p-1 rounded-2xl">
            <div className="bg-background rounded-xl p-12">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                <NeonText variant="primary" glow pulse>
                  Ready to Vibe?
                </NeonText>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the neon revolution and experience the Bay Area like never before
              </p>
              <Button variant="pulse" size="lg" className="px-12 py-6 text-xl">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
