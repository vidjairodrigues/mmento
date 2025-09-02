import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Coleta de memórias via WhatsApp",
  "Organização de histórias por IA",
  "Linha do tempo digital privada",
  "Armazenamento seguro na nuvem",
  "Acesso para membros da família",
  "Suporte 24/7 ao cliente"
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Comece a jornada hoje
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comece a preservar as memórias mais preciosas da sua família com nossa assinatura anual
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto">
          <div className="bg-gradient-card rounded-3xl p-8 shadow-glow border-2 border-primary/20 relative overflow-hidden">
            {/* Popular badge */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-hero text-primary-foreground px-6 py-2 rounded-full text-sm font-medium">
                Mais Popular
              </div>
            </div>

            <div className="text-center space-y-6 mt-4">
              {/* Price */}
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                  R$ 349
                  <span className="text-xl text-muted-foreground font-sans">/ano</span>
                </div>
                <p className="text-muted-foreground">
                  Serviço completo de preservação de legado
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full group">
                Presenteie um Legado
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              {/* Additional info */}
              <div className="text-center space-y-2 text-sm text-muted-foreground">
                <p>Produtos físicos (livros, impressões) disponíveis como extras</p>
                <p>Cancele a qualquer momento • Sem taxas de configuração • Pagamento seguro</p>
              </div>
            </div>
          </div>
        </div>

        {/* Value proposition */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground italic">
            "O investimento mais significativo que você pode fazer é preservar as histórias que definem sua família."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
