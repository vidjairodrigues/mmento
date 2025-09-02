import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Meus dados estão seguros?",
    answer: "Absolutamente. Usamos protocolos de criptografia e segurança de nível empresarial. Suas histórias familiares são armazenadas com segurança na nuvem com múltiplos sistemas de backup. Apenas você e os membros da família que você convidar têm acesso à sua linha do tempo."
  },
  {
    question: "Meus pais/avós não são experientes com tecnologia. Isso vai funcionar para eles?",
    answer: "Sim! Escolhemos o WhatsApp porque é familiar e fácil de usar. Nós os guiamos através de mensagens de voz ou textos simples. Nossas perguntas são conversacionais e naturais - como conversar com um membro da família."
  },
  {
    question: "O que acontece após o primeiro ano?",
    answer: "Você pode renovar sua assinatura para continuar adicionando novas memórias e acessando todos os recursos. Sua linha do tempo e histórias existentes permanecem seguras e acessíveis. Você sempre possui seus dados e pode exportá-los a qualquer momento."
  },
  {
    question: "Quanto tempo leva o processo de coleta?",
    answer: "Varia por família, mas a maioria completa sua coleta inicial em 2-3 meses. A beleza é que é contínuo - você sempre pode adicionar novas histórias e memórias durante o ano."
  },
  {
    question: "Vários membros da família podem participar?",
    answer: "Sim! Podemos trabalhar com múltiplos membros da família simultaneamente. Cada um tem sua própria conversa no WhatsApp conosco, e entrelaçamos todas as histórias em uma linda linha do tempo."
  },
  {
    question: "E se eu quiser cancelar?",
    answer: "Você pode cancelar a qualquer momento sem penalidades. Você manterá acesso a todas as histórias coletadas até sua assinatura expirar, e sempre pode exportar seus dados da linha do tempo."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa saber sobre preservar o legado da sua família
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card rounded-xl shadow-card overflow-hidden">
              <button
                className="w-full text-left p-6 flex items-center justify-between hover:bg-muted/30 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 p-8 bg-card rounded-2xl shadow-card">
          <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground mb-4">
            Estamos aqui para ajudá-lo a começar a jornada do legado da sua família
          </p>
          <a 
            href="mailto:support@mmento.com" 
            className="text-primary hover:text-primary-glow transition-colors font-medium"
          >
            Entre em contato com nossa equipe →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;