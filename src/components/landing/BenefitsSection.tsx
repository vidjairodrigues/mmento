import { Archive, Heart, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Archive,
    title: "Do Caos Digital",
    description: "Pare de perder memórias preciosas em pastas infinitas de fotos e conversas esquecidas."
  },
  {
    icon: Heart,
    title: "Para um Tesouro Familiar",
    description: "Crie conexões significativas entre gerações com histórias lindamente organizadas."
  },
  {
    icon: Clock,
    title: "Tranquilidade",
    description: "Tenha a certeza de que os momentos mais importantes da sua família estão seguros e acessíveis para sempre."
  },
  {
    icon: Shield,
    title: "Seguro e Privado",
    description: "Suas histórias familiares são criptografadas e protegidas com segurança de nível empresarial."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Do "Caos Digital" para um Tesouro Familiar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme a bagunça digital avassaladora em memórias organizadas e significativas que unem gerações
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="text-center space-y-4 group">
                <div className="mx-auto w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-lg md:text-xl font-serif italic text-foreground max-w-3xl mx-auto">
            "A dor do caos digital hoje se transforma no arrependimento de perder todo um legado familiar amanhã."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;