import { motion } from "motion/react";
import { Star, Users, Award, Heart } from "lucide-react";

export function SocialProof() {
  const stats = [
    { 
      icon: Users, 
      value: "+200", 
      label: "Atendimentos",
      color: "var(--rose-gold)"
    },
    { 
      icon: Star, 
      value: "5.0", 
      label: "Avaliação média",
      color: "var(--dusty-rose)"
    },
    { 
      icon: Award, 
      value: "100%", 
      label: "Satisfação",
      color: "var(--rose-gold)"
    },
    { 
      icon: Heart, 
      value: "Natural", 
      label: "Resultado",
      color: "var(--dusty-rose)"
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--nude)]/30 to-[var(--cream)]/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div 
                className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                style={{ 
                  background: 'rgba(255, 255, 255, 0.5)',
                  border: '1px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>
              <div className="font-semibold mb-1" style={{ 
                fontSize: '1.75rem',
                color: 'var(--wine)',
                fontFamily: 'Cormorant, serif'
              }}>
                {stat.value}
              </div>
              <div className="text-sm opacity-75" style={{ color: 'var(--foreground)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div 
            className="p-8 rounded-3xl backdrop-blur-md shadow-xl"
            style={{ 
              background: 'rgba(255, 255, 255, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.6)'
            }}
          >
            <div className="flex gap-1 justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" style={{ color: 'var(--rose-gold)' }} />
              ))}
            </div>
            <p className="text-center text-lg italic mb-4" style={{ color: 'var(--wine)' }}>
              "Atendimento impecável! A Nicoly é super atenciosa e o resultado ficou perfeito. Minhas sobrancelhas nunca estiveram tão lindas e naturais!"
            </p>
            <div className="text-center opacity-75" style={{ color: 'var(--foreground)' }}>
              — Manuella Santos
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
