//import { WHATSAPP_URL } from "@/lib/contact";

const PLANS = [
  {
    name: "Consultoria Online",
    tag: "Para quem tem autonomia",
    desc: "Treino montado e atualizado no aplicativo, com suporte online para tirar dúvidas e ajustar a evolução.",
    features: [
      "Treino personalizado no app MFIT",
      "Avaliação inicial e revisões periódicas",
      "Suporte por WhatsApp",
      "Atualização do treino a cada ciclo",
    ],
  },
  {
    name: "Semipresencial",
    tag: "O grande diferencial",
    desc: "Toda a estrutura da consultoria + encontros presenciais a cada 45 a 60 dias para correção técnica e troca de série.",
    features: [
      "Treino personalizado no app MFIT",
      "Encontros presenciais a cada 45–60 dias",
      "Correção técnica e ajustes de carga",
      "Suporte próximo no WhatsApp",
    ],
    highlight: true,
  },
  {
    name: "Presencial",
    tag: "Individual ou Dupla",
    desc: "Aulas de 50 minutos com foco total em execução, postura e progressão. Acompanhamento em tempo real, treino após treino.",
    features: [
      "Aulas de 50 minutos",
      "Modalidade individual ou em dupla",
      "Foco máximo em execução e técnica",
      "Periodização contínua",
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Planos</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-5xl leading-tight">
            Escolha o formato que <span className="text-primary">combina com você</span>.
          </h2>
          <p className="mt-4 text-secondary-foreground/70 text-lg">
            Três caminhos com a mesma essência: profissionalismo, atenção
            individual e foco em saúde de longo prazo.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {PLANS.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/30 lg:-translate-y-4"
                  : "bg-white/[0.04] border border-white/10 backdrop-blur-sm"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 bg-secondary text-primary text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-primary/40">
                  Mais procurado
                </span>
              )}
              <p className={`text-xs font-bold uppercase tracking-widest ${p.highlight ? "text-primary-foreground/80" : "text-primary"}`}>
                {p.tag}
              </p>
              <h3 className="mt-2 font-display font-extrabold text-2xl">{p.name}</h3>
              <p className={`mt-3 text-sm leading-relaxed ${p.highlight ? "text-primary-foreground/90" : "text-secondary-foreground/70"}`}>
                {p.desc}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`mt-0.5 shrink-0 ${p.highlight ? "text-primary-foreground" : "text-primary"}`}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className={p.highlight ? "text-primary-foreground" : "text-secondary-foreground/90"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={"google.com"}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center font-semibold px-5 py-3.5 rounded-xl transition ${
                  p.highlight
                    ? "bg-secondary text-secondary-foreground hover:brightness-125"
                    : "bg-primary text-primary-foreground hover:brightness-110"
                }`}
              >
                Consultar valores e horários
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
