import { motion } from "motion/react";
import { Calendar, Clock, MapPin, Sparkles } from "lucide-react";

interface CTASectionProps {
  onBookClick: () => void;
}

export function CTASection({ onBookClick }: CTASectionProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1665824249476-a7951ab0aaaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjBsdXh1cnklMjBiZWF1dHklMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3NjE5NDQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
          filter: "blur(6px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--rose-gold)]/80 via-[var(--dusty-rose)]/70 to-[var(--wine)]/80" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-2xl"
            style={{ background: "white" }}
          >
            <Sparkles
              className="w-10 h-10"
              style={{ color: "var(--rose-gold)" }}
            />
          </motion.div>

          <h2 className="text-white mb-6 text-4xl md:text-5xl">
            Pronta para se sentir ainda mais linda?
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Agende seu horário e experimente um atendimento personalizado que
            valoriza sua beleza única
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBookClick}
            className="group px-10 py-5 rounded-full text-lg shadow-2xl transition-all duration-300 mb-12"
            style={{
              background: "white",
              color: "var(--wine)",
            }}
          >
            <span className="flex items-center justify-center gap-3">
              <svg
                className="w-6 h-6"
                style={{ color: "var(--rose-gold)" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar pelo WhatsApp
            </span>
          </motion.button>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="backdrop-blur-md rounded-2xl p-6"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="text-white mb-2">Horário</h4>
              <p className="text-white/80 text-sm">
                Qua - Sáb: 8h às 18h
                <br />
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="backdrop-blur-md rounded-2xl p-6"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="text-white mb-2">Localização</h4>
              <p className="text-white/80 text-sm">
                Centro, Indaiatuba
                <br />
                Fácil acesso
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="backdrop-blur-md rounded-2xl p-6"
              style={{
                background: "rgba(255, 255, 255, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="text-white mb-2">Agendamento</h4>
              <p className="text-white/80 text-sm">
                Online pelo WhatsApp
                <br />
                Resposta rápida
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
