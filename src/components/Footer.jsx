export default function Footer() {
  return (
    <footer className="bg-[#08080C] border-t border-white/5 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo-nextcode.png" alt="NextCode" className="h-16 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]" />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Automação de mensagens com inteligência artificial para WhatsApp e Instagram. Venda mais, trabalhe menos.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: '📷', href: 'https://instagram.com/nextcodeai', id: 'footer-instagram' },
                { label: '💬', href: 'https://wa.me/5500000000000', id: 'footer-whatsapp' },
                { label: '🎵', href: '#', id: 'footer-tiktok' },
              ].map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-full flex items-center justify-center text-base hover:bg-brand-purple/20 transition-colors border border-white/5"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white/70">Navegação</h4>
            <div className="flex flex-col gap-3">
              {[
                ['Como Funciona', '#como-funciona'],
                ['Casos de Sucesso', '#cases'],
                ['Preços', '#preco'],
              ].map(([label, href]) => (
                <a key={label} href={href} className="text-white/35 text-sm hover:text-white/70 transition-colors">{label}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white/70">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-white/70 transition-colors">💬 WhatsApp</a>
              <a href="mailto:nextcode626@gmail.com" className="text-white/35 text-sm hover:text-white/70 transition-colors">✉️ nextcode626@gmail.com</a>
              <a href="https://instagram.com/nextcodeai" target="_blank" rel="noopener noreferrer" className="text-white/35 text-sm hover:text-white/70 transition-colors">📷 @nextcodeai</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">© 2025 NextCode. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Termos de Uso</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
