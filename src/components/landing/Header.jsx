import { useEffect, useState } from "react";
//import { WHATSAPP_URL } from "@/lib/contact";

const NAV = [
  { href: "#metodo", label: "Método" },
  { href: "#resultados", label: "Resultados" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-1.5 group">
          <span className="font-display font-extrabold text-lg tracking-tight text-secondary">
            Rafaella Souza
          </span>
          <span className="font-display font-semibold text-sm text-primary uppercase tracking-widest">
            Personal
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <a
          href={"https://google.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-4 py-2.5 rounded-lg hover:brightness-110 transition shadow-sm"
        >
          Falar no WhatsApp
        </a>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-secondary"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-medium py-2"
              >
                {n.label}
              </a>
            ))}
            <a
              href={"https://google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center bg-primary text-primary-foreground font-semibold px-4 py-3 rounded-lg"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
