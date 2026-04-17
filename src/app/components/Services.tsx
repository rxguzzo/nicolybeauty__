import { motion } from "motion/react";
import { Sparkles, Eye, Palette, Wand2, Droplet, Smile } from "lucide-react";

interface ServicesProps {
  onBookClick: () => void;
}

export function Services({ onBookClick }: ServicesProps) {
  const services = [
    {
      icon: Eye,
      name: "Design de Sobrancelhas",
      description:
        "Técnica personalizada para realçar seu olhar de forma natural e harmoniosa",
      price: "A partir de R$ 60",
      image: "/img/design2.jpeg",
      imagePosition: "center 80%",
      imageScale: 1.0,
    },
    {
      icon: Palette,
      name: "Henna",
      description:
        "Coloração natural que preenche e define suas sobrancelhas com delicadeza",
      price: "A partir de R$ 70",
      image: "/img/hennanic2.jpeg",
      imagePosition: "left center 22%",
      imageScale: 1.45,
    },
    {
      icon: Wand2,
      name: "Coloração",
      description:
        "Tonalização profissional para sobrancelhas impecáveis e duradouras",
      price: "A partir de R$ 78",
      image: "/img/niolycolor.jpeg",
      imagePosition: "center 21%",
    },
    {
      icon: Eye,
      name: "Lash Lifting",
      description:
        "Curvatura e alongamento natural dos cílios, sem precisar de extensões",
      price: "A partir de R$ 130",
      image: "/img/nicolylashjo.jpeg",
      imagePosition: "center 71%",
    },
    {
      icon: Sparkles,
      name: "Brow Lamination",
      description:
        "Fios disciplinados e com efeito de sobrancelhas perfeitamente penteadas",
      price: "A partir de R$ 140",
      image: "/img/nicolybrow.jpeg",
      imagePosition: "center 75%",
      imageScale: 1.15,
    },
    {
      icon: Smile,
      name: "Spa Labial",
      description:
        "Hidratação profunda e esfoliação para lábios macios e saudáveis",
      price: "A partir de R$ 35",
      image: "/img/nicolyspa.jpeg",
      imagePosition: "20%",
      imageScale: 1.05,
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, var(--cream) 0%, var(--nude) 100%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 mb-4">
            <Sparkles
              className="w-4 h-4"
              style={{ color: "var(--rose-gold)" }}
            />
            <span
              className="text-sm tracking-wide"
              style={{ color: "var(--wine)" }}
            >
              Nossos Serviços
            </span>
          </div>
          <h2 className="mb-4" style={{ color: "var(--wine)" }}>
            Tratamentos Exclusivos
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--foreground)", opacity: 0.85 }}
          >
            Cada procedimento é pensado para realçar sua beleza natural com
            técnicas modernas e personalizadas
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div
                className="h-full rounded-3xl overflow-hidden backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "rgba(255, 255, 255, 0.5)",
                  border: "1px solid rgba(255, 255, 255, 0.8)",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{
                      objectPosition: service.imagePosition || "center center",
                      transform: `scale(${service.imageScale || 1})`,
                    }}
                  />
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md z-20"
                    style={{
                      background: "rgba(255, 255, 255, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    <service.icon
                      className="w-6 h-6"
                      style={{ color: "var(--rose-gold)" }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-3" style={{ color: "var(--wine)" }}>
                    {service.name}
                  </h3>
                  <p
                    className="text-sm mb-4 leading-relaxed"
                    style={{ color: "var(--foreground)", opacity: 0.85 }}
                  >
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-semibold"
                      style={{ color: "var(--rose-gold)" }}
                    >
                      {service.price}
                    </span>
                    <button
                      onClick={onBookClick}
                      className="px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--rose-gold), var(--dusty-rose))",
                        color: "white",
                      }}
                    >
                      Agendar
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
