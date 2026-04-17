import { motion } from "motion/react";
import { Award, Heart, Sparkles, CheckCircle2 } from "lucide-react";

export function About() {
  const features = [
    "Técnicas modernas e personalizadas",
    "Produtos de alta qualidade",
    "Atendimento humanizado",
    "Ambiente acolhedor e sofisticado",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBsdXh1cnklMjBiZWF1dHklMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NjE5NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          filter: 'blur(4px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--cream)]/95 to-[var(--nude)]/90" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/img/nicolywork.jpeg"
                alt="Nicoly Espíndola - Profissional"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--rose-gold)]/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-28 h-28 rounded-full flex items-center justify-center shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, var(--rose-gold), var(--dusty-rose))'
              }}
            >
              <div className="text-center text-white">
                <Award className="w-8 h-8 mx-auto mb-1" />
                <div className="text-xs font-semibold">Certificada</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 mb-6">
              <Heart className="w-4 h-4" style={{ color: 'var(--rose-gold)' }} />
              <span className="text-sm tracking-wide" style={{ color: 'var(--wine)' }}>
                Sobre Mim
              </span>
            </div>

            <h2 className="mb-6" style={{ color: 'var(--wine)' }}>
              Conheça Nicoly Espíndola
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
                Sou apaixonada por realçar a beleza natural de cada cliente. Com anos de experiência e especialização em design de estética e técnicas avançadas, meu objetivo é proporcionar resultados que harmonizem com suas características únicas.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
                Cada atendimento é único e personalizado, pensado especialmente para você. Trabalho com produtos de alta qualidade e técnicas modernas para garantir não apenas um resultado impecável, mas também uma experiência relaxante e memorável.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, var(--rose-gold), var(--dusty-rose))' }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <span style={{ color: 'var(--foreground)' }}>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4">
              <div 
                className="px-4 py-3 rounded-2xl backdrop-blur-md flex items-center gap-2"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <Sparkles className="w-5 h-5" style={{ color: 'var(--rose-gold)' }} />
                <span className="text-sm" style={{ color: 'var(--wine)' }}>Profissional Certificada</span>
              </div>
              <div 
                className="px-4 py-3 rounded-2xl backdrop-blur-md flex items-center gap-2"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <Award className="w-5 h-5" style={{ color: 'var(--rose-gold)' }} />
                <span className="text-sm" style={{ color: 'var(--wine)' }}>Técnicas Avançadas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
