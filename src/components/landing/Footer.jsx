//import { WHATSAPP_URL } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 lg:p-12 text-primary-foreground flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 -mt-32 mb-16 shadow-2xl">
          <div className="max-w-xl">
            <h3 className="font-display font-extrabold text-2xl lg:text-3xl leading-tight">
              Bora dar o primeiro passo da sua transformação?
            </h3>
            <p className="mt-2 text-primary-foreground/90">
              Me chama no WhatsApp. Sem compromisso, a gente conversa sobre o seu objetivo.
            </p>
          </div>
          <a
            href={"google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-7 py-4 rounded-xl hover:brightness-125 transition shrink-0"
          >
            Falar com a Rafa agora
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="font-display font-extrabold text-xl">
              Rafaella Souza <span className="text-primary uppercase text-sm tracking-widest">Personal</span>
            </p>
            <p className="mt-3 text-secondary-foreground/70 text-sm leading-relaxed max-w-xs">
              Personal trainer dedicada à saúde, qualidade de vida e ao
              combate à obesidade com método e cuidado.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Navegação</p>
            <ul className="mt-4 space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#metodo" className="hover:text-primary">Método</a></li>
              <li><a href="#resultados" className="hover:text-primary">Resultados</a></li>
              <li><a href="#planos" className="hover:text-primary">Planos</a></li>
              <li><a href="#faq" className="hover:text-primary">Dúvidas</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Contato & Redes</p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a
                href={"google.com"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-white/15 hover:bg-primary hover:border-primary transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.318l-.999 3.648 3.893-1.665z"/></svg>
              </a>
            </div>
            <div className="mt-5 inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>
              <span className="text-xs font-semibold tracking-wide">Profissional registrado(a) CREF / CONFEF</span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Rafaella Souza Personal. Todos os direitos reservados.</p>
          <p>O conteúdo deste site não substitui avaliação médica ou nutricional.</p>
        </div>
      </div>
    </footer>
  );
}