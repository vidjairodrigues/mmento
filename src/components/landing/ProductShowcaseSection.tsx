import legacyBookImage from "@/assets/legacy-book.jpg";
import digitalTimelineImage from "@/assets/digital-timeline.jpg";
import podcastPhoneImage from "@/assets/podcast-phone.jpg";

const products = [
  {
    title: "Livro do Legado",
    description: "Lindos livros impressos com as histórias, fotos e memórias da sua família profissionalmente encadernados para gerações valorizarem.",
    image: legacyBookImage,
    features: ["Impressão premium", "Design personalizado", "Qualidade de arquivo"]
  },
  {
    title: "Linha do Tempo Digital",
    description: "Experiência digital interativa onde membros da família podem explorar histórias cronologicamente, adicionar novas memórias e conectar gerações.",
    image: digitalTimelineImage,
    features: ["Interface interativa", "Acesso seguro", "Atualizações contínuas"]
  },
  {
    title: "Podcast da Família",
    description: "Episódios de podcast gerados por IA com histórias familiares, perfeitos para compartilhar durante viagens de carro ou reuniões de família.",
    image: podcastPhoneImage,
    features: ["Vozes naturais", "Série de episódios", "Fácil compartilhamento"]
  }
];

const ProductShowcaseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Seu legado, do seu jeito
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme suas conversas familiares em formatos lindos e compartilháveis que todos vão adorar
          </p>
        </div>

        <div className="space-y-20">
          {products.map((product, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-glow">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;