import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "Quantas vezes por semana eu preciso treinar?",
    a: "Depende do seu objetivo, rotina e condicionamento. Trabalhamos com formatos de série única (1x semana), A/B (2x) e A/B/C (3x ou mais). Na avaliação inicial definimos juntas o melhor formato pra realidade da sua vida — sem cobrança irreal.",
  },
  {
    q: "De quanto em quanto tempo o treino é trocado?",
    a: "A periodização padrão é de 45 a 60 dias. Esse é o tempo ideal para o seu corpo se adaptar, evoluir cargas e colher resultados antes de mudar o estímulo. No plano semipresencial, essa troca acontece presencialmente, com correção técnica.",
  },
  {
    q: "Sou totalmente iniciante. Tem suporte pra mim?",
    a: "Sim — boa parte dos meus alunos começa do zero, muitas vezes voltando após anos parados ou tratando obesidade. O início é progressivo, com foco em consistência, prevenção de lesões e construção de confiança.",
  },
  {
    q: "Como funciona o acompanhamento via WhatsApp?",
    a: "Você tem acesso direto ao meu contato para tirar dúvidas sobre execução, ajustar cargas, registrar como foi o treino e manter a motivação. Não é um robô — sou eu respondendo, dentro de horário comercial.",
  },
  {
    q: "Preciso de academia ou posso treinar em casa?",
    a: "Os dois caminhos são possíveis. O treino é montado a partir do que você tem disponível: academia completa, espaço em casa com poucos equipamentos, ou ambiente externo. O método se adapta a você, não o contrário.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Dúvidas Frequentes</span>
          <h2 className="mt-3 font-display font-extrabold text-3xl lg:text-5xl text-secondary leading-tight">
            Antes de começar, talvez você queira saber…
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`bg-card border rounded-xl transition-all ${isOpen ? "border-primary shadow-[var(--shadow-card)]" : "border-border"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-secondary text-base lg:text-lg">{item.q}</span>
                  <span className={`shrink-0 w-8 h-8 inline-flex items-center justify-center rounded-full transition ${isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-muted text-secondary"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-6 -mt-1 text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
