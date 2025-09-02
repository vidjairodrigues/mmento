import { Heart, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-2xl font-serif font-bold">Mmento</span>
            </div>
            <p className="text-background/80 max-w-md leading-relaxed">
              Transformando conversas familiares em legados duradouros. Preserve suas memórias mais preciosas para as próximas gerações.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:hello@mmento.com" 
                className="flex items-center gap-2 text-background/80 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hello@mmento.com</span>
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Produto</h3>
            <div className="space-y-2 text-sm">
              <a href="#how-it-works" className="block text-background/80 hover:text-primary transition-colors">
                Como Funciona
              </a>
              <a href="#pricing" className="block text-background/80 hover:text-primary transition-colors">
                Preços
              </a>
              <a href="#examples" className="block text-background/80 hover:text-primary transition-colors">
                Exemplos
              </a>
              <a href="#faq" className="block text-background/80 hover:text-primary transition-colors">
                FAQ
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-background">Empresa</h3>
            <div className="space-y-2 text-sm">
              <a href="#about" className="block text-background/80 hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="#privacy" className="block text-background/80 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#terms" className="block text-background/80 hover:text-primary transition-colors">
                Termos de Serviço
              </a>
              <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © 2025 Mmento. Todos os direitos reservados. Feito com amor para famílias em todos os lugares.
            </p>
            
            <div className="flex items-center gap-6">
              <a 
                href="https://wa.me/your-whatsapp-number" 
                className="flex items-center gap-2 text-sm text-background/80 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Comece no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;