const PILLARS = [
  {
    n: "01",
    title: "Treino 100% individualizado",
    desc: "Sua frequência define o formato: Série única, A/B ou A/B/C. Tudo pensado para a sua rotina, condição física e objetivo real.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 640 512"><path fill="#f05a00" d="M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 256 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 16 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48c0 26.5-21.5 48-48 48l-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112-256 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0c-26.5 0-48-21.5-48-48l0-48c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-48c0-26.5 21.5-48 48-48l16 0 0-16z"/></svg>
    ),
  },
  {
    n: "02",
    title: "Tecnologia com app MFIT Personal",
    desc: "Você acessa cada treino com vídeos, séries, repetições e cargas direto no celular. Acompanhamento claro e organizado.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 384 512"><path fill="#f05a00" d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm72 416l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    ),
  },
  {
    n: "03",
    title: "Suporte próximo via WhatsApp",
    desc: "Tirar dúvida sobre execução, manter a motivação ou ajustar carga: a Rafa está a uma mensagem de distância.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 448 512"><path fill="#f05a00" d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
    ),
  },
];

export function Method() {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-secondary bg-muted/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">O Método</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-5xl text-secondary-foreground leading-tight">
            Um plano feito para o
            <span className="text-primary">seu corpo</span> e a sua rotina.
          </h2>
          <p className="mt-4 text-secondary-foreground/70 text-lg">
            Nada de treino genérico. O Método Rafa une avaliação cuidadosa,
            tecnologia e suporte humano para gerar resultados que duram.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article
              key={p.n}
              className="bg-card rounded-2xl p-7 border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                  {p.icon}
                </span>
                <span className="font-display font-extrabold text-2xl text-muted-foreground/40">
                  {p.n}
                </span>
              </div>
              <h3 className="mt-5 font-display font-bold text-xl text-secondary">{p.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
