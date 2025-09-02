import { MessageCircle, Sparkles, Gift } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Conversar",
    description: "Tudo começa com uma conversa natural no WhatsApp. Nós enviamos as perguntas, você responde com áudio, texto ou fotos."
  },
  {
    icon: Sparkles,
    title: "Construir", 
    description: "Nossa IA organiza tudo em uma linha do tempo digital, criando um legado vivo e seguro."
  },
  {
    icon: Gift,
    title: "Celebrar",
    description: "Transforme as memórias em um livro, podcast ou explore a linha do tempo digital. Um tesouro para toda a família."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Preservar um legado nunca foi tão fácil
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Três passos simples para transformar suas conversas familiares em memórias preciosas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-border z-0 transform translate-x-4" />
                )}
                
                <div className="relative z-10 space-y-6">
                  {/* Icon */}
                  <div className="mx-auto w-24 h-24 bg-gradient-card rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Step number */}
                  <div className="text-sm font-medium text-primary">
                    Passo {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;