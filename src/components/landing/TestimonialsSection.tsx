import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finalmente encontrei uma forma de organizar as histórias do meu pai. É o presente mais significativo que já dei.",
    author: "Nicole S.",
    role: "Filha e Guardiã de Memórias",
  },
  {
    quote: "Meus netos agora têm acesso às histórias da bisavó deles que teriam se perdido para sempre.",
    author: "Maria C.", 
    role: "Avó de 6 netos",
  },
  {
    quote: "O processo foi tão fácil pelo WhatsApp. Minha mãe compartilhou histórias que eu nunca soube que existiam.",
    author: "David L.",
    role: "Filho e Historiador da Família",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Histórias já sendo preservadas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Famílias ao redor do mundo estão criando legados duradouros com a Mmento
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="space-y-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/60" />
                
                {/* Quote */}
                <blockquote className="text-lg text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                
                {/* Author */}
                <div className="space-y-1">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;