import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ai.jpg";

const Hero = () => {
  const scrollToPlans = () => {
    document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/20 to-background" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-glow-pulse" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider border border-accent/30 px-4 py-2 rounded-full bg-accent/10">
                Inovação Digital
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-glow">ISVICREATIVE:</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Transformando Ideias
              </span>
              <br />
              em Presença Digital Poderosa
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Criação de Sites Profissionais, Otimizados e Escaláveis. Comece sua jornada digital conosco.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 border-glow group text-lg px-8"
                onClick={scrollToPlans}
              >
                Ver Nossos Planos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="AI Technology - Transformação Digital" 
              className="relative rounded-2xl shadow-2xl border border-primary/20 animate-fade-in"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
