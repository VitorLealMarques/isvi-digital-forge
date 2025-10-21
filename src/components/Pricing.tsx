import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Básico",
    creation: "R$ 50",
    monthly: "R$ 37,90/mês",
    changes: "1/mês",
    domain: "Não incluso",
    features: [
      "Site padrão",
      "Textos e contatos",
      "Design responsivo",
      "Suporte por email",
    ],
    recommended: false,
  },
  {
    name: "Padrão",
    creation: "R$ 100",
    monthly: "R$ 47,90/mês",
    changes: "Até 3/mês",
    domain: "Incluso (.com.br)",
    features: [
      "Tudo do plano Básico",
      "Domínio .com.br incluso",
      "SSL Gratuito",
      "Suporte prioritário",
      "Adaptações personalizadas",
    ],
    recommended: true,
  },
  {
    name: "Premium",
    creation: "R$ 200",
    monthly: "R$ 69,90/mês",
    changes: "Ilimitadas",
    domain: "Incluso (.com.br)",
    features: [
      "Tudo do plano Padrão",
      "Alterações ilimitadas",
      "Personalização visual extra",
      "Suporte prioritário 24/7",
      "Otimização SEO avançada",
      "Analytics integrado",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <section id="plans" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-950/10 to-background" />
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Escolha o Plano{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfeito
            </span>
            <br />
            para o Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparência e qualidade em todos os nossos serviços
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`p-8 relative ${
                plan.recommended 
                  ? 'bg-gradient-to-br from-card via-purple-950/20 to-card border-primary shadow-2xl shadow-primary/20 scale-105' 
                  : 'bg-card/50 backdrop-blur-sm border-primary/20'
              } hover:border-primary/50 transition-all duration-300`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                  <Star className="h-4 w-4 fill-current" />
                  RECOMENDADO
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="space-y-1">
                  <div>
                    <span className="text-3xl font-bold text-accent">{plan.creation}</span>
                    <span className="text-muted-foreground ml-2">criação</span>
                  </div>
                  <div className="text-lg">
                    <span className="font-semibold">{plan.monthly}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Alterações:</span>
                  <span className="font-semibold">{plan.changes}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Domínio:</span>
                  <span className="font-semibold">{plan.domain}</span>
                </div>
              </div>
              
              <div className="border-t border-border pt-6 mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full ${
                  plan.recommended 
                    ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' 
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
                size="lg"
              >
                Escolher Plano
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            Fale Conosco para Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
