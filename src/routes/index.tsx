import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Check,
  Scissors,
  Rocket,
  Clock,
  Heart,
  ShoppingBag,
  Megaphone,
  Lightbulb,
  Shield,
  ChevronDown,
  
  Star,
} from "lucide-react";
import mockup1 from "@/assets/mockup-1.jpeg";
import mockup2 from "@/assets/mockup-2.jpeg";
import mentora from "@/assets/mentora.jpeg";
import dep1 from "@/assets/depoimento-1.jpeg";
import dep2 from "@/assets/depoimento-2.jpeg";
import dep3 from "@/assets/depoimento-3.jpeg";
import isa from "@/assets/isa.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rota da Primeira Venda — Joice Emiliano | Para Profissionais da Beleza" },
      {
        name: "description",
        content:
          "Venda seu primeiro produto digital da beleza em até 7 dias, mesmo sem muitos seguidores. Método validado por mais de 700 mulheres.",
      },
      { property: "og:title", content: "Rota da Primeira Venda — Joice Emiliano" },
      {
        property: "og:description",
        content:
          "Transforme o que você já faz na beleza em um produto digital que vende. Método Joice Emiliano.",
      },
      { property: "og:image", content: mockup2 },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: mockup2 },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
});

const CHECKOUT_URL = "https://pay.kiwify.com.br/VstmIem";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5522996197544&text=Ol%C3%A1%2C+vim+pelo+site+e+tenho+algumas+duvidas&type=phone_number&app_absent=0";

function CTA({ children, className = "", href = CHECKOUT_URL }: { children: React.ReactNode; className?: string; href?: string }) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`cta-btn inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-[var(--shadow-soft)] transition-all hover:scale-[1.02] hover:shadow-[var(--shadow-premium)] ${className}`}
    >
      {children}
      <Sparkles className="h-4 w-4" />
    </a>
  );
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Preciso ter muitos seguidores para começar?",
      a: "Não. O método foi desenhado justamente para quem está começando do zero ou tem poucos seguidores. Você vai aprender a vender com o que tem hoje.",
    },
    {
      q: "Funciona mesmo se eu nunca vendi nada digital?",
      a: "Sim. Mais de 700 mulheres começaram do zero usando o método. Você é guiada passo a passo, do produto à primeira venda.",
    },
    {
      q: "Em quanto tempo posso fazer minha primeira venda?",
      a: "Muitas alunas fazem a primeira venda em até 7 dias após aplicar o método. O ritmo depende da sua dedicação.",
    },
    {
      q: "Por quanto tempo tenho acesso ao conteúdo?",
      a: "Acesso vitalício a todo o material, atualizações e bônus inclusos.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* HERO */}
      <header
        className="relative px-6 pt-16 pb-24 md:pt-24 md:pb-32"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--olive)]/30 bg-white/60 px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--olive-dark)] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            ROTA DA PRIMEIRA VENDA
          </div>
          <h1 className="animate-fade-up text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
            Venda seu primeiro produto digital da beleza em até{" "}
            <span className="italic text-[var(--olive-dark)]">7 dias</span> — mesmo sem muitos seguidores
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Se você é profissional da beleza e sente que trabalha muito mas não cresce, aqui você vai aprender a transformar o que já faz em um produto digital que vende.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTA>Quero vender meu primeiro produto digital</CTA>
            <p className="text-xs text-muted-foreground">✓ Acesso imediato • ✓ 7 dias de garantia</p>
          </div>

          <div className="mt-16 animate-float">
            <img
              src={mockup1}
              alt="Mockup do produto Rota da Primeira Venda — livro, tablet e notebook"
              className="mx-auto w-full max-w-3xl drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </header>

      {/* O QUE VOCÊ VAI DESCOBRIR */}
      <Section className="bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl">O que você vai descobrir</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Como transformar o que você já faz na beleza em um produto digital que vende
          </p>
          <div className="mt-10"><CTA>Quero descobrir o método</CTA></div>
        </div>
      </Section>

      {/* PROVA SOCIAL */}
      <Section className="bg-[var(--cream)]">
        <div className="text-center">
          <div className="mb-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[var(--olive)] text-[var(--olive)]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl">Mais de 700 mulheres formadas</h2>
          <p className="mt-4 text-muted-foreground">Histórias reais de quem aplicou o método</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[dep1, dep2, dep3].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl bg-white p-3 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <img src={src} alt={`Depoimento de aluna ${i + 1}`} className="w-full rounded-xl" loading="lazy" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <CTA>Quero fazer parte dessa transformação</CTA>
        </div>
      </Section>

      {/* PARA QUEM É */}
      <Section className="bg-[var(--cream)]">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl">Para quem é a RPV</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Scissors, t: "Profissionais da beleza", d: "Cabeleireiras, maquiadoras, manicures, designers e mais." },
            { icon: Rocket, t: "Quem quer sair do zero", d: "Mesmo sem audiência, sem produto e sem experiência digital." },
            { icon: Clock, t: "Quem trabalha muito e ganha pouco", d: "Hora de escalar com produto digital, não trocar tempo por dinheiro." },
            { icon: Heart, t: "Quem quer liberdade", d: "Trabalhar de qualquer lugar e construir uma renda que não para." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--olive)]/10 text-[var(--olive-dark)]">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><CTA>Quero entrar para a RPV</CTA></div>
      </Section>
      <Section className="bg-background">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">Conteúdo</span>
            <h2 className="mt-3 text-3xl md:text-5xl">O que você vai receber</h2>
            <ul className="mt-8 space-y-5">
              {[
                { icon: ShoppingBag, t: "Como criar seu produto digital", d: "Passo a passo do zero, mesmo sem experiência." },
                { icon: Megaphone, t: "Como atrair as pessoas certas", d: "Posicionamento e conteúdo que gera desejo." },
                { icon: Sparkles, t: "Como vender com confiança", d: "Conversas, ofertas e fechamentos sem enrolação." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--olive)]/10 text-[var(--olive-dark)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-sans)" }}>{t}</h3>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={mockup2} alt="Mockup completo do produto com bônus" className="w-full drop-shadow-2xl" loading="lazy" />
          </div>
        </div>
        <div className="mt-12 text-center"><CTA>Quero receber tudo isso</CTA></div>
      </Section>

      {/* DIFERENCIAL — IA */}
      <Section className="bg-[var(--cream)]">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--olive)] to-[var(--olive-dark)] blur-2xl opacity-30" />
              <img
                src={isa}
                alt="ISA — sua assistente de IA exclusiva"
                className="relative w-full rounded-3xl shadow-[var(--shadow-premium)]"
                loading="lazy"
              />
              <p className="mt-4 text-center text-sm font-semibold uppercase tracking-widest text-[var(--olive-dark)]">
                Sua mentora digital
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">Nosso diferencial</span>
            <h2 className="mt-3 text-3xl md:text-5xl">
              O que torna a <span className="italic">Rota da Primeira Venda</span> única
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sua assistente de IA para criar seu produto digital da beleza
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Ideias de produtos baseados no que você já faz na beleza",
                "Estruture seu método",
                "Aprenda como gerar ofertas irresistíveis",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--olive)] text-white">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8"><CTA>Quero acesso à ISA</CTA></div>
          </div>
        </div>
      </Section>

      {/* BÔNUS */}
      <Section className="bg-background">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">Bônus exclusivos</span>
          <h2 className="mt-3 text-3xl md:text-5xl">Você ainda leva</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              n: "Bônus 01",
              t: "Guia Prático de Venda",
              sub: "com aplicação passo a passo",
              items: [
                "O que falar para gerar interesse",
                "Como levar sem travar",
                "Como fechar com naturalidade",
              ],
              icon: Lightbulb,
            },
            {
              n: "Bônus 02",
              t: "Scripts de Conversão",
              sub: "",
              items: [
                "Frases prontas para atrair clientes no Instagram",
                "Conversas que conduzem para o fechamento no WhatsApp",
                "Estrutura simples para transformar interesse em venda",
              ],
              icon: Megaphone,
            },
          ].map(({ n, t, sub, items, icon: Icon }) => (
            <div key={t} className="group relative overflow-hidden rounded-3xl border border-border bg-[var(--cream)] p-8 transition-all hover:shadow-[var(--shadow-soft)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--olive)]/10 transition-transform group-hover:scale-125" />
              <div className="relative">
                <Icon className="mb-4 h-8 w-8 text-[var(--olive-dark)]" />
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">{n}</p>
                <h3 className="mt-2 text-2xl">{t}</h3>
                {sub && <p className="mt-1 text-sm italic text-muted-foreground">{sub}</p>}
                <ul className="mt-4 space-y-2">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--olive-dark)]" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><CTA>Quero garantir os bônus</CTA></div>
      </Section>
      <Section id="oferta" className="bg-gradient-to-b from-[var(--cream)] to-background">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-[var(--olive)]/30 bg-white p-8 text-center shadow-[var(--shadow-premium)] md:p-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--olive)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">
            Oferta de lançamento
          </div>
          <h2 className="text-3xl md:text-5xl">Rota da Primeira Venda</h2>
          <p className="mt-2 text-muted-foreground">Acesso completo + ISA + bônus</p>

          <div className="my-8">
            <p className="text-sm text-muted-foreground line-through">De R$ 297</p>
            <p className="mt-1 text-5xl font-bold text-[var(--olive-dark)] md:text-6xl" style={{ fontFamily: "var(--font-sans)" }}>
              12x R$ 6,93
            </p>
            <p className="mt-2 text-base text-muted-foreground">ou <span className="font-semibold text-foreground">R$ 67</span> à vista</p>
          </div>

          <CTA className="w-full md:w-auto">Quero garantir meu acesso agora</CTA>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-5 w-5 text-[var(--olive-dark)]" />
            7 dias de garantia incondicional
          </div>
        </div>
      </Section>

      {/* MENTORA */}
      <Section className="bg-background">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <img
              src={mentora}
              alt="Joice Emiliano — Mentora e estrategista digital"
              className="mx-auto w-full max-w-md rounded-3xl shadow-[var(--shadow-premium)]"
              loading="lazy"
            />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">Sua mentora</span>
            <h2 className="mt-3 text-3xl md:text-5xl">Joice Emiliano</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Estrategista digital especializada em ajudar profissionais da beleza a criarem seus primeiros produtos digitais.
              Já conduziu mais de 700 mulheres do zero à primeira venda — com método, leveza e estratégia.
            </p>
            <div className="mt-6 flex gap-6">
              <div>
                <p className="text-3xl text-[var(--olive-dark)]">700+</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Alunas</p>
              </div>
              <div>
                <p className="text-3xl text-[var(--olive-dark)]">7 dias</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Para a 1ª venda</p>
              </div>
            </div>
            <div className="mt-8"><CTA>Quero ser aluna da Joice</CTA></div>
          </div>
        </div>
      </Section>
      <Section className="bg-[var(--cream)]">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--olive-dark)]">FAQ</span>
            <h2 className="mt-3 text-3xl md:text-5xl">Perguntas frequentes</h2>
          </div>
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--cream)]"
                >
                  <span className="font-medium">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[var(--olive-dark)] transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTA>Quero começar agora</CTA>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background px-6 py-10 text-center text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Joice Emiliano · Rota da Primeira Venda</p>
        <p className="mt-2">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-premium)] transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.704.244-1.06 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.456c0-5.958-4.842-10.8-10.802-10.8z"/>
        </svg>
      </a>
    </main>
  );
}
