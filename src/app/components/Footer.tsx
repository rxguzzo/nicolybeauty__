import { MapPin, Clock, Instagram, Mail } from "lucide-react";

export function Footer() {
  const whatsappNumber = "5519991979756"; // Placeholder number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um horário.`;

  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cream)] to-[var(--nude)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3
                className="mb-4"
                style={{ color: "var(--wine)", fontFamily: "Cormorant, serif" }}
              >
                Nicoly Espíndola
              </h3>
              <p
                className="text-sm mb-4"
                style={{ color: "var(--foreground)", opacity: 0.85 }}
              >
                Beauty Design especializado em realçar sua beleza natural com
                sofisticação e delicadeza.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/nicolybeauty__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                  }}
                  aria-label="Instagram"
                >
                  <Instagram
                    className="w-5 h-5"
                    style={{ color: "var(--rose-gold)" }}
                  />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255, 255, 255, 0.6)",
                    border: "1px solid rgba(255, 255, 255, 0.8)",
                  }}
                  aria-label="WhatsApp"
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "var(--rose-gold)" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4" style={{ color: "var(--wine)" }}>
                Contato
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/nicolybeauty__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm transition-opacity hover:opacity-70"
                  style={{ color: "var(--foreground)" }}
                >
                  <Instagram
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--rose-gold)" }}
                  />
                  <span>@nicolybeauty__</span>
                </a>
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  <Mail
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--rose-gold)" }}
                  />
                  <span>nicoly.gustavo20@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Hours & Location */}
            <div>
              <h4 className="mb-4" style={{ color: "var(--wine)" }}>
                Horário & Localização
              </h4>
              <div className="space-y-3">
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  <Clock
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--rose-gold)" }}
                  />
                  <div>
                    <div>Quarta a Sábado: 8h às 18h</div>
                  </div>
                </div>
                <div
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  <MapPin
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--rose-gold)" }}
                  />
                  <div>
                    R. Bernardino de Campos, 753
                    <br />
                    Centro, Indaiatuba - SP
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--rose-gold)]/30 to-transparent mb-6" />

          {/* Copyright */}
          <div
            className="text-center text-sm"
            style={{ color: "var(--foreground)", opacity: 0.7 }}
          >
            <p>
              © {new Date().getFullYear()} Nicoly Espíndola Beauty Design. Todos
              os direitos reservados.
            </p>
            <p className="mt-2">Feito com ♡ para realçar sua beleza natural</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
