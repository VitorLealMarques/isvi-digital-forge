import { Sparkles, HeadphonesIcon, DollarSign, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Design Inovador",
    description: "Sites modernos, rápidos e focados na experiência do usuário.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte Dedicado",
    description: "Ajuda sempre que você precisar, com agilidade e clareza.",
  },
  {
    icon: DollarSign,
    title: "Preços Transparentes",
    description: "Planos acessíveis com clareza nos custos de criação e mensalidade.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description: "Seu site é construído para converter visitantes em clientes.",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Por Que{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              a Isvicreative?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Tecnologia que Impulsiona Seu Crescimento
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
