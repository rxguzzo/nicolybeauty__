import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Gallery() {
  const galleryImages = [
    {
      url: "/img/nicolymasc.jpeg",
      alt: "Design de Sobrancelhas",
    },
    {
      url: "/img/lash2.jpeg",
      alt: "Lash Lifting - Resultado"
    },
    {
      url: "/img/spa2.jpeg",
      alt: "Spa Labial"
    },
    {
      url: "/img/itens2.jpeg",
      alt: "Tratamento de Beleza"
    },
    {
      url: "/img/local2.jpeg",
      alt: "Ambiente Sofisticado"
    },
    {
      url: "/img/manu2.jpeg",
      alt: "Profissional Beauty Design"
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--nude)] to-[var(--cream)]" />
      
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
            <Sparkles className="w-4 h-4" style={{ color: 'var(--rose-gold)' }} />
            <span className="text-sm tracking-wide" style={{ color: 'var(--wine)' }}>
              Portfólio
            </span>
          </div>
          <h2 className="mb-4" style={{ color: 'var(--wine)' }}>
            Resultados que Encantam
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--foreground)', opacity: 0.85 }}>
            Cada trabalho é único e feito com dedicação para realçar a beleza natural
          </p>
        </motion.div>

        {/* Gallery Grid - Instagram Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <div className="text-sm font-light">{image.alt}</div>
                </div>
              </div>

              {/* Glass Effect Border */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{ 
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg mb-4" style={{ color: 'var(--foreground)', opacity: 0.85 }}>
            Veja mais no Instagram
          </p>
          <a
            href="https://www.instagram.com/nicolybeauty__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 border-2"
            style={{ 
              background: 'rgba(255, 255, 255, 0.5)',
              borderColor: 'var(--rose-gold)',
              color: 'var(--wine)'
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @nicolybeauty__
          </a>
        </motion.div>
      </div>
    </section>
  );
}
