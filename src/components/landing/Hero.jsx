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
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
              </svg>
              Falar com a Rafa no WhatsApp
            </a>
            <a
              href="#planos"
              className="inline-flex items-center justify-center gap-2 bg-background border-2 border-secondary text-secondary font-semibold px-7 py-4 rounded-xl hover:bg-secondary hover:text-secondary-foreground transition"
            >
              Conhecer planos
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg border-t border-border pt-6">
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
