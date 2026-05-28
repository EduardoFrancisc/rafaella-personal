const TESTIMONIALS = [
  {
    name: "Juliana M.",
    age: "42 anos",
    text: "Perdi 14kg em 9 meses, sem dietas malucas. O suporte da Rafa foi o que me fez não desistir nas semanas difíceis.",
  },
  {
    name: "Carlos R.",
    age: "37 anos",
    text: "Eu tinha vergonha de academia. Comecei semipresencial e hoje treino com prazer. A diferença é a atenção real.",
  },
  {
    name: "Patrícia L.",
    age: "51 anos",
    text: "Saí da pré-diabetes, voltei a dormir bem e tenho disposição pros meus filhos. Não é estética, é vida.",
  },
];

export function Results() {
  return (
    <section id="resultados" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Resultados Reais</span>
            <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-5xl text-secondary leading-tight">
              Histórias que falam por <span className="text-primary">si</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Transformações construídas com consistência, paciência e
              acompanhamento profissional. Sem milagre, com método.
            </p>
          </div>
        </div>

        {/* Antes e Depois - placeholders */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-2 gap-1 rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] bg-card">
              <Placeholder label="Antes" />
              <Placeholder label="Depois" highlight />
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-card border border-border rounded-2xl p-7 shadow-[var(--shadow-card)] flex flex-col"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
                <path d="M9.4 6C5.9 6 3 8.9 3 12.4V18h6v-6H6c0-1.7 1.4-3 3.4-3V6zm9 0c-3.5 0-6.4 2.9-6.4 6.4V18h6v-6h-3c0-1.7 1.4-3 3.4-3V6z" />
              </svg>
              <blockquote className="mt-4 text-foreground/90 leading-relaxed flex-1">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <p className="font-display font-bold text-secondary">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.age} • Aluna(o) Rafa</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Placeholder({ label, highlight = false }) {
  return (
    <div className={`aspect-[3/4] flex items-end p-3 ${highlight ? "bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" : "bg-muted"}`}>
      <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${highlight ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
        {label}
      </span>
    </div>
  );
}
