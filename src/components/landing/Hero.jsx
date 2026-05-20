//import rafaImg from "@/assets/rafa-hero.jpg";
//import { WHATSAPP_URL } from "@/lib/contact";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* subtle background accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-accent border border-primary/20 text-secondary text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Personal Trainer • CREF Ativo
          </span>

          <h1 className="mt-6 font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-secondary">
            Sua transformação real começa aqui:{" "}
            <span className="text-primary">Saúde</span> e{" "}
            <span className="underline decoration-primary decoration-4 underline-offset-4">
              Qualidade de Vida
            </span>
            .
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Acompanhamento personalizado focado em resultados sustentáveis e no
            combate à obesidade. Treinos montados para a sua rotina, com suporte
            próximo do início ao fim.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={"google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-base px-7 py-4 rounded-xl hover:brightness-110 transition shadow-[var(--shadow-cta)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.595 5.318l-.999 3.648 3.893-1.665z"/></svg>
              Falar com a Rafa no WhatsApp
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-background border-2 border-secondary text-secondary font-semibold px-7 py-4 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Conhecer planos
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md border-t border-border pt-6">
            <Stat value="+8" label="anos de experiência" />
            <Stat value="500+" label="alunos atendidos" />
            <Stat value="100%" label="planos individuais" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/10 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border-4 border-background shadow-[var(--shadow-card)] bg-muted">
            <img
              src='src/assets/rafa-hero.jpg'
              alt="Rafaella Souza, personal trainer especialista em emagrecimento"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-secondary text-secondary-foreground px-5 py-3 rounded-xl shadow-lg max-w-[14rem]">
            <p className="text-xs uppercase tracking-wider text-primary font-bold">Método Rafa</p>
            <p className="text-sm font-medium mt-1 leading-snug">Treino, suporte e tecnologia trabalhando por você.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display font-extrabold text-2xl text-primary">{value}</p>
      <p className="text-xs text-muted-foreground leading-tight mt-1">{label}</p>
    </div>
  );
}
