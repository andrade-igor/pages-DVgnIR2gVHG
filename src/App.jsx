import feiraNegocios from "../assets/lp/feira-negocios.jpg";
import heroPareDeViajar from "../assets/lp/hero-pare-de-viajar.jpg";
import logoDsx from "../assets/lp/logo-dsx.png";
import provaSocial from "../assets/lp/prova-social-evolucao-estrategica.jpg";

const LINKS = {
  vip: "https://pay.hub.la/jheGgipTScsnmNqGZElQ",
  standard: "https://hub.la/r/EREq9bO1fsVKl6sG7Axo",
  grupo5: "https://hub.la/r/ArwmMqmV9aBZkI33UYfF",
  grupo10: "https://hub.la/r/MrAx1UDpvEnhGdAfYESX",
};
const HERO_YOUTUBE_ID = "bjtQ0WLcmjY";
const HERO_YOUTUBE_EMBED = `https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_YOUTUBE_ID}&controls=0&rel=0&modestbranding=1&playsinline=1`;

const CHECKPOINTS = [
  "Como transformar insights de palco em plano de acao de 7 dias",
  "Como usar IA e automacao sem perder foco em resultado",
  "Como ajustar oferta e posicionamento para vender com margem",
  "Como organizar rotina comercial com follow-up previsivel",
  "Como usar networking do DSX para abrir oportunidades reais",
  "Como decidir prioridades de marketing sem achismo",
];

const APLICACOES = [
  {
    titulo: "Passagem",
    icone: "passagem",
    resumo: "Norte x Sul/Sudeste: reduza custo de viagem e mantenha mais caixa no negocio.",
  },
  {
    titulo: "Hospedagem",
    icone: "hospedagem",
    resumo: "Sem diaria de hotel fora de casa para buscar conhecimento de alto nivel.",
  },
  {
    titulo: "Transporte / alimentacao",
    icone: "alimentacao",
    resumo: "Menos gasto no deslocamento e nas refeicoes durante a imersao.",
  },
];

const AUDIENCIA = [
  "Empresario que quer destravar crescimento com previsibilidade",
  "Gestor que precisa tomar decisao com mais clareza e menos achismo",
  "Profissional de marketing e vendas focado em performance",
  "Time comercial que precisa vender com processo",
];

const ENTREGAS = [
  {
    titulo: "Acesso aos 2 dias de evento",
    desc: "Conteudo estrategico em 23 e 24 de julho de 2026.",
  },
  {
    titulo: "Acesso a trilhas e palcos",
    desc: "Programacao com foco em negocios, vendas e performance.",
  },
  {
    titulo: "Feira de negocios e networking",
    desc: "Conexoes e solucoes em um unico ambiente.",
  },
  {
    titulo: "Direcao pratica para execucao",
    desc: "Voce sai com prioridades claras para aplicar no negocio.",
  },
];

const BONUS = [
  {
    titulo: "Roteiro de Networking DSX",
    desc: "PDF com perguntas e metas para gerar conexoes de alto valor.",
    pontos: ["Metas objetivas por dia", "Perguntas prontas para conexao", "Foco em oportunidade real"],
  },
  {
    titulo: "Checklist Pos-Evento",
    desc: "Plano de execucao em 7 dias para nao deixar o aprendizado esfriar.",
    pontos: ["Prioridades por impacto", "Plano de acao enxuto", "Execucao sem perder tempo"],
  },
  {
    titulo: "Grupo de aquecimento",
    desc: "Canal oficial para avisos, alinhamento e troca antes da imersao.",
    pontos: ["Avisos oficiais em primeira mao", "Alinhamento antes do evento", "Networking antecipado"],
  },
];

const TESTEMUNHOS = [
  {
    foto: provaSocial,
    nome: "Aline Costa",
    cargo: "Empresaria",
    fala: "Sai com um plano claro para os proximos 90 dias. So isso ja pagou o ingresso.",
  },
  {
    foto: provaSocial,
    nome: "Bruno Almeida",
    cargo: "Gestor comercial",
    fala: "O networking foi surreal. Fiz conexoes que eu nao faria em meses.",
  },
  {
    foto: feiraNegocios,
    nome: "Carla Menezes",
    cargo: "Lider de marketing",
    fala: "Nao foi so palestra. Voltei com direcao pratica para executar no dia seguinte.",
  },
  {
    foto: provaSocial,
    nome: "Diego Rocha",
    cargo: "Empreendedor",
    fala: "Trouxe meu time e voltamos alinhados em marketing, vendas e meta.",
  },
];

function GroupCard({ title, price, note, href }) {
  return (
    <article className="group-pass-card">
      <p className="group-pass-kicker">{title}</p>
      <p className="group-pass-price">
        {price}
      </p>
      <p className="group-pass-note">{note}</p>
      <a href={href} target="_blank" rel="noreferrer" className="btn-primary mt-2">
        Comprar agora
      </a>
    </article>
  );
}

function EconomyIcon({ type }) {
  if (type === "passagem") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M11 38h28a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V41a3 3 0 0 1 3-3z" />
        <path d="M8 46h6M36 46h6" />
        <path d="M16 45h8M16 49h6M27 45h7M27 49h7" />
        <path d="M20 31l9-16 3 1-3 12h13l6-5 4 2-5 7H31l-2 9-3-1 1-8-7 2z" className="eco-accent" />
      </svg>
    );
  }

  if (type === "hospedagem") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 55V14h40v41" />
        <path d="M24 55V41h16v14" />
        <path d="M20 23h6M20 31h6M20 39h6M38 23h6M38 31h6M38 39h6" />
        <path d="M32 9l1.8 3.8 4.2.6-3 3 .7 4.3-3.7-2-3.7 2 .7-4.3-3-3 4.2-.6z" className="eco-accent" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M12 14v10M16 14v10M14 24v26" />
      <path d="M24 14v12a3 3 0 0 0 3 3h1v21" />
      <path d="M42 18a10 10 0 1 1 0 20 10 10 0 0 1 0-20z" />
      <path d="M42 24a4 4 0 1 1 0 8 4 4 0 0 1 0-8" className="eco-accent" />
      <path d="M32 46h20" />
      <path d="M38 46c-2 4-6 7-11 7" />
      <path d="M29 51l-3 2 3 2" className="eco-accent" />
    </svg>
  );
}

function App() {
  const bonusVisuals = [provaSocial, feiraNegocios, heroPareDeViajar];
  const scrollToPassaporte = (event) => {
    event.preventDefault();
    const target = document.getElementById("escolha-passaporte-anchor");
    if (!target) return;

    const offset = window.innerWidth >= 1024 ? 24 : 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <main className="lp-shell">
      <section className="section pt-7 hero-section">
        <div className="wrap hero-wrap">
          <img src={logoDsx} alt="Logo DSX" className="hero-logo-centered" />

          <div className="hero-kicker-wrap">
            <span className="kicker">
              <span>23 e 24 de julho de 2026</span>
              <span className="h-1 w-1 rounded-full bg-white/70" />
              <span>Vasco Vasques - Manaus</span>
            </span>
          </div>

          <h1 className="display hero-headline">
            <span>
              O <span className="hero-accent">Norte</span> nao assiste mais de longe.
            </span>
            <span>
              O <span className="hero-accent">jogo</span> dos <span className="hero-accent">negocios</span> acontece{" "}
              aqui.
            </span>
          </h1>

          <p className="hero-subtitle">
            Depois de lotar Manaus em 2025, o DSX 2026 abre o lote mais estrategico. O evento
            que todo mundo comentou em 2025 esta de volta.
          </p>

          <article className="hero-frame hero-main-visual hero-video-frame mt-6">
            <iframe
              className="hero-video"
              src={HERO_YOUTUBE_EMBED}
              title="DSX 2026 video principal"
              loading="eager"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="hero-overlay" />
          </article>
        </div>

        <article className="price-slice">
          <div className="wrap">
            <p className="slice-kicker">1º lote ativo</p>
            <p className="slice-old">de R$ 697,00</p>
            <p className="slice-label">por apenas</p>
            <p className="slice-price">
              <span className="slice-currency">R$</span>
              <span className="slice-value">297,00</span>
            </p>
            <p className="slice-guarantee">nunca mais voltará para esse preço</p>
            <a href="#escolha-passaporte-anchor" onClick={scrollToPassaporte} className="btn-primary slice-cta">
              garanta seu passaporte agora
            </a>
            <p className="slice-note slice-note-highlight">Menor preço da história</p>
            <p className="slice-note muted">Adquira antes que o valor chegue em R$ 697,00.</p>
          </div>
        </article>
      </section>

      <section className="section checkpoint-section">
        <div className="wrap checkpoint-shell">
          <h2 className="display text-4xl sm:text-6xl">Checkpoints do que voce leva para o negocio</h2>

          <div className="checkpoint-top-v2">
            <div className="checkpoint-list-v2">
              {CHECKPOINTS.map((item) => (
                <article key={item} className="checkpoint-item-v2">
                  <span className="checkpoint-icon-v2">✓</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>

            <figure className="checkpoint-product-v2" aria-hidden="true">
              <div className="credential-v2">
                <div className="credential-lanyard-v2">
                  <span className="credential-hole-v2" />
                  <span className="credential-strap-v2" />
                </div>

                <div className="credential-card-v2">
                  <p className="credential-top-v2">DSX 2026</p>
                  <p className="credential-city-v2">MANAUS • AM</p>

                  <div className="credential-photo-v2">
                    <img src={logoDsx} alt="" className="credential-logo-v2" />
                    <span className="credential-year-v2">2026</span>
                  </div>

                  <p className="credential-name-v2">PARTICIPANTE</p>
                  <p className="credential-role-v2">Acesso 2 dias • 23 e 24 Jul</p>

                  <div className="credential-footer-v2">
                    <div className="credential-qr-v2" />
                    <p className="credential-code-v2">DSX-STANDARD-2026</p>
                  </div>
                </div>
              </div>
            </figure>
          </div>

          <article className="checkpoint-bottom-v2">
            <div className="checkpoint-copy-v2">
              <p className="checkpoint-copy-title">
                Em 2 dias voce sai com direcao clara para marketing, vendas e execucao no seu negocio.
              </p>
              <p className="checkpoint-copy-objection">
                Sem precisar viajar para o Sul/Sudeste para acessar estrategia de alto nivel.
              </p>
            </div>
          </article>

        </div>
      </section>

      <section className="section application-section">
        <div className="wrap">
          <h2 className="display text-4xl sm:text-6xl">Economize em:</h2>
          <div className="apps">
            {APLICACOES.map((card, index) => (
              <article key={card.titulo} className={`app-card app-card-economy ${index === 1 ? "app-card-alt" : ""}`}>
                <div className="app-economy-top">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#12db98]">Economia {index + 1}</p>
                  <span className="app-economy-icon" aria-hidden="true">
                    <EconomyIcon type={card.icone} />
                  </span>
                </div>
                <h3 className="app-economy-title">{card.titulo}</h3>
                <p className="app-economy-summary">{card.resumo}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="section testimonial-section">
        <div className="wrap">
          <p className="section-tag section-tag-violet">Prova social</p>
          <h2 className="display text-4xl sm:text-6xl">Depoimentos de quem viveu o DSX 2025</h2>
          <p className="mt-3 text-sm text-white/80">
            Nao e promessa vazia. E experiencia real de quem participou e aplicou.
          </p>

          <div className="testimonial-grid">
            {TESTEMUNHOS.map((item, idx) => (
              <article key={`${item.nome}-${idx}`} className="testimonial-card">
                <img className="testimonial-photo" src={item.foto} alt={`Foto de ${item.nome}`} loading="lazy" />
                <div className="testimonial-content">
                  <p className="testimonial-name">{item.nome}</p>
                  <p className="testimonial-role">{item.cargo}</p>
                  <blockquote className="testimonial-quote">"{item.fala}"</blockquote>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display text-4xl sm:text-6xl">2025 validou. 2026 esta carregando.</h2>
          <div className="before-after-stack">
            <div className="before-after-row">
              <figure className="duo-item duo-small">
                <img src={heroPareDeViajar} alt="Antes 1" loading="lazy" />
                <span className="tag tag-before">2025</span>
              </figure>
              <figure className="duo-item duo-large duo-loading" aria-label="2026 em carregamento">
                <img src={provaSocial} alt="Depois 1" loading="lazy" className="duo-loading-image" />
                <span className="tag tag-after">2026</span>
                <span className="loading-center" aria-hidden="true">
                  <span className="loading-spinner-lg" />
                  <span className="loading-center-text">loading...</span>
                </span>
              </figure>
            </div>
            <div className="before-after-row">
              <figure className="duo-item duo-small">
                <img src={feiraNegocios} alt="Antes 2" loading="lazy" />
                <span className="tag tag-before">2025</span>
              </figure>
              <figure className="duo-item duo-large duo-loading" aria-label="2026 em carregamento">
                <img src={provaSocial} alt="Depois 2" loading="lazy" className="duo-loading-image" />
                <span className="tag tag-after">2026</span>
                <span className="loading-center" aria-hidden="true">
                  <span className="loading-spinner-lg" />
                  <span className="loading-center-text">loading...</span>
                </span>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap audience">
          <h2 className="display text-center text-4xl sm:text-6xl">Pra quem e:</h2>
          <div className="audience-list">
            {AUDIENCIA.map((item) => (
              <article key={item} className="aud-card">
                <span className="aud-icon">✓</span>
                <p className="text-sm font-semibold leading-relaxed">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="display text-4xl sm:text-6xl">O que voce vai receber</h2>
          <div className="deliveries timeline-style">
            {ENTREGAS.map((entrega, idx) => (
              <article key={entrega.titulo} className="delivery timeline-item-v2">
                <span className="delivery-num delivery-dot">{String(idx + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-2xl font-extrabold uppercase">{entrega.titulo}</h3>
                  <p className="mt-1 text-sm text-white/80">{entrega.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap bonus-wrap bonus-wrap-v2">
          <h2 className="display text-center text-4xl text-black sm:text-6xl">
            Comprando agora, voce leva bonus
          </h2>
          <div className="bonus-list bonus-list-v2">
            {BONUS.map((bonus, idx) => (
              <article key={bonus.titulo} className="bonus-item-v2">
                <div className="bonus-copy">
                  <p className="bonus-index">Bonus {String(idx + 1).padStart(2, "0")}</p>
                  <h3>{bonus.titulo}</h3>
                  <p>{bonus.desc}</p>
                  <ul className="bonus-points">
                    {bonus.pontos.map((ponto) => (
                      <li key={ponto}>{ponto}</li>
                    ))}
                  </ul>
                </div>
                <figure className="bonus-visual">
                  <img src={bonusVisuals[idx % bonusVisuals.length]} alt={bonus.titulo} loading="lazy" />
                </figure>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div id="escolha-passaporte-anchor" aria-hidden="true" />
          <article id="escolha-passaporte" className="plan-wrap">
            <div className="plan-head">
              <p className="display text-center text-5xl sm:text-6xl">Escolha seu passaporte</p>
              <p className="mt-1 text-center text-sm text-white/75">Passaporte DSX 2026</p>
            </div>
            <div className="plan-body">
              <div className="plan-includes">
                <div className="plan-row">
                  <span className="check-pill">✓</span>
                  <span>Acesso aos 2 dias de evento</span>
                </div>
                <div className="plan-row">
                  <span className="check-pill">✓</span>
                  <span>Conteudos e trilhas estrategicas</span>
                </div>
                <div className="plan-row">
                  <span className="check-pill">✓</span>
                  <span>Feira de negocios e networking</span>
                </div>
                <div className="plan-row">
                  <span className="check-pill">✓</span>
                  <span>Bonus confirmados do lote atual</span>
                </div>
              </div>

              <div className="plan-prices">
                <a href={LINKS.standard} target="_blank" rel="noreferrer" className="plan-price-row is-standard">
                  <div>
                    <p className="plan-price-label">Standard • 1º lote</p>
                    <p className="plan-price-value">R$ 297,00</p>
                  </div>
                  <span>Comprar agora</span>
                </a>

                <a href={LINKS.vip} target="_blank" rel="noreferrer" className="plan-price-row is-vip">
                  <div>
                    <p className="plan-price-label">VIP • 1º lote</p>
                    <p className="plan-price-value">R$ 997,00</p>
                  </div>
                  <span>Comprar agora</span>
                </a>
              </div>

              <p className="group-pass-title mt-5 text-xs uppercase tracking-[0.16em] text-white/65">
                Passaporte em grupo
              </p>
              <div className="group-pass-grid">
                <GroupCard title="Grupo 5 pessoas" price="R$ 282,15" note="Por pessoa • 5% OFF" href={LINKS.grupo5} />
                <GroupCard title="Grupo 10 pessoas" price="R$ 267,30" note="Por pessoa • 10% OFF" href={LINKS.grupo10} />
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <article className="brand-footer">
            <img src={logoDsx} alt="DSX" className="brand-footer-logo" />
            <p className="brand-footer-line">CNPJ 10.279.661/0001-51</p>
            <p className="brand-footer-line">Digital Comunicacao</p>
            <p className="brand-footer-line">Todos os direitos reservados.</p>
            <p className="brand-footer-powered">
              PORB <span>Digital Hub Experience</span>
            </p>
          </article>
        </div>
      </section>

    </main>
  );
}

export default App;
