import ContactForm from "../contact-form";
import SiteHeader from "../site-header";

export const metadata = {
  title: "AI, автоматизация и разработка",
  description:
    "Константин Орлов — разработка внутренних инструментов, AI-автоматизация, Python/Flask, WebSocket, SwiftUI и практические решения на стыке операций и кода.",
  keywords: [
    "Константин Орлов AI",
    "AI автоматизация",
    "разработка внутренних инструментов",
    "Python Flask",
    "WebSocket",
    "SwiftUI",
    "iOS разработка",
    "Tailscale",
    "операционная автоматизация",
    "server monitor",
  ],
  alternates: {
    canonical: "/ai",
  },
  openGraph: {
    type: "profile",
    locale: "ru_RU",
    url: "https://konstantin-orlov.vercel.app/ai",
    siteName: "Константин Орлов",
    title: "Константин Орлов — AI, автоматизация и разработка",
    description:
      "Практический профиль разработки: внутренние инструменты, AI-автоматизация, Flask, WebSocket, SwiftUI и приватная инфраструктура через Tailscale.",
  },
  twitter: {
    card: "summary",
    title: "Константин Орлов — AI, автоматизация и разработка",
    description:
      "Внутренние инструменты, AI-автоматизация, Python/Flask, WebSocket, SwiftUI и системный подход к операционным задачам.",
  },
};

const aiNavLinks = [
  { href: "#approach", label: "Подход" },
  { href: "#cases", label: "Кейсы" },
  { href: "#practice", label: "Практика" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Контакты" },
];

const expertiseAreas = [
  "AI-инструменты",
  "Внутренние приложения",
  "Python / Flask",
  "WebSocket-транспорт",
  "SwiftUI",
  "Операционная автоматизация",
];

const heroStats = [
  {
    value: "Flask + WS",
    label: "backend и live-обновления для мониторинга без ручного refresh",
  },
  {
    value: "SwiftUI",
    label: "нативный iOS-клиент для быстрых проверок и мобильного доступа",
  },
  {
    value: "Tailscale",
    label: "приватный контур доступа вместо публичной панели управления",
  },
];

const supportScenarios = [
  {
    title: "Когда нужен не слайд, а рабочий инструмент",
    description:
      "Собираю небольшие приложения и автоматизации вокруг реального процесса: входные данные, статусы, ошибки, уведомления и понятный интерфейс для пользователя.",
  },
  {
    title: "Когда AI должен встроиться в операционную работу",
    description:
      "Помогаю перевести повторяющиеся текстовые, аналитические и контрольные задачи в аккуратный workflow, где AI ускоряет работу, но не заменяет ответственность.",
  },
  {
    title: "Когда важно соединить backend, интерфейс и доступ",
    description:
      "Думаю не только о коде, но и о том, как приложение будет жить: кто им пользуется, где оно развёрнуто, как приходят данные и как ограничен доступ.",
  },
];

const caseStudies = [
  {
    title: "Server Monitor",
    eyebrow: "Флагманский кейс",
    description:
      "Flask-дашборд и нативный iOS-клиент для наблюдения за сервером в приватном сетевом контуре.",
    problem:
      "Нужен был быстрый способ видеть состояние сервера без публичной административной панели и без постоянного подключения к рабочей машине.",
    architecture:
      "Flask отвечает за dashboard и серверную логику, WebSocket передаёт live-состояние, SwiftUI даёт нативный мобильный интерфейс, а Tailscale держит доступ внутри приватной сети.",
    result:
      "Получился компактный мониторинг, который можно открыть с телефона и использовать как инженерный инструмент, а не как демонстрационный макет.",
    tags: ["Flask", "WebSocket", "SwiftUI", "Tailscale", "iOS"],
    repository: "Приватный GitHub-репозиторий: 4eburek404/server_monitor_iOS_app",
  },
  {
    title: "AI-помощники для рабочих процессов",
    eyebrow: "Автоматизация",
    description:
      "Проектирование сценариев, где AI помогает разбирать входящие задачи, формировать черновики, проверять структуру и сокращать ручную рутину.",
    problem:
      "В операционной работе много повторяющихся текстов, уточнений и проверок, но прямое копирование в чат не даёт управляемого процесса.",
    architecture:
      "Сначала фиксируется бизнес-логика, затем собираются шаблоны, правила, контрольные вопросы и точки, где человек принимает финальное решение.",
    result:
      "AI становится частью процесса: быстрее готовит черновик, но оставляет прозрачный контроль качества и ответственность за итог.",
    tags: ["AI workflow", "Prompt design", "Операции", "Контроль качества"],
  },
  {
    title: "Портфолио как управляемый продукт",
    eyebrow: "Web",
    description:
      "Next.js-сайт с отдельными смысловыми маршрутами, SEO-структурой, structured data, аналитикой и формой обратной связи.",
    problem:
      "Один человек совмещает travel-экспертизу и инженерную практику, но разным аудиториям нужны разные входные страницы.",
    architecture:
      "Next.js App Router, route-level metadata, schema.org, sitemap, Vercel Analytics и общие компоненты для повторяющихся участков интерфейса.",
    result:
      "Travel-профиль остаётся на главной странице, а dev/AI-профиль получает отдельный URL и собственный SEO-сигнал.",
    tags: ["Next.js", "SEO", "schema.org", "Vercel"],
  },
];

const practicePoints = [
  "Пишу небольшие прикладные системы вокруг конкретной боли, а не вокруг модного стека.",
  "Сначала разбираю поток данных, роли пользователей и ограничения доступа, затем выбираю технологию.",
  "Использую AI там, где он ускоряет подготовку, анализ или контроль, но оставляю человеку финальное решение.",
  "Могу говорить с бизнесом на языке процесса и с разработкой на языке интерфейсов, данных и отказов.",
];

const responsibilityAreas = [
  {
    title: "Backend и интеграции",
    items:
      "Python, Flask, API, WebSocket-сценарии, обработка состояний и практичная серверная логика для внутренних инструментов.",
  },
  {
    title: "Интерфейсы",
    items:
      "Next.js, SwiftUI, понятные панели, формы, статусы и интерфейсы, которые можно использовать в рабочем ритме.",
  },
  {
    title: "AI-слой",
    items:
      "Структурирование задач, prompt-паттерны, проверка качества ответов и встраивание AI в повторяемые процессы.",
  },
  {
    title: "Эксплуатация",
    items:
      "Приватный доступ, наблюдаемость, простая поддержка, аккуратные ограничения и устойчивость к сбоям.",
  },
];

const faqItems = [
  {
    question: "Это отдельная роль или продолжение travel-экспертизы?",
    answer:
      "Это отдельная инженерная роль, но она выросла из практики операций. Поэтому фокус не на абстрактной разработке, а на инструментах, которые снимают ручную нагрузку и улучшают управляемость процессов.",
  },
  {
    question: "С какими задачами лучше обращаться?",
    answer:
      "С внутренними инструментами, небольшими web-приложениями, AI-автоматизацией, прототипами, dashboard-задачами, интеграциями и ситуациями, где нужно быстро собрать рабочий контур.",
  },
  {
    question: "Можно ли посмотреть код Server Monitor?",
    answer:
      "Репозиторий сейчас приватный. Код и архитектуру можно обсудить точечно: что было сделано, почему выбран такой стек и какие решения можно перенести в похожую задачу.",
  },
  {
    question: "AI здесь про чат-ботов?",
    answer:
      "Не только. В первую очередь это про прикладные workflow: подготовку черновиков, классификацию, контроль полноты, помощь в анализе и уменьшение ручной рутины.",
  },
  {
    question: "Можно ли совместить это с travel-процессами?",
    answer:
      "Да. Именно на стыке travel-операций и автоматизации появляются полезные сценарии: заявки, согласования, статусы, документы, исключения и контроль качества сервиса.",
  },
];

export default function AiPage() {
  const currentYear = new Date().getFullYear();
  const siteUrl = "https://konstantin-orlov.vercel.app";
  const pageUrl = `${siteUrl}/ai`;
  const personId = `${pageUrl}#person`;
  const websiteId = `${siteUrl}/#website`;
  const pageId = `${pageUrl}#webpage`;

  const personStructuredData = {
    "@type": "Person",
    "@id": personId,
    name: "Константин Орлов",
    url: pageUrl,
    jobTitle: "Разработчик внутренних инструментов и AI-автоматизации",
    description:
      "Практический профиль разработки: AI-автоматизация, Python/Flask, WebSocket, SwiftUI, Next.js и внутренние инструменты для операционных задач.",
    email: "konstantin.orlov1985@icloud.com",
    sameAs: [
      "https://t.me/Konstantin_Orlov_404",
      "https://github.com/4eburek404",
    ],
    knowsAbout: expertiseAreas,
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: "Константин Орлов — AI, автоматизация и разработка",
      description:
        "Профиль Константина Орлова о разработке внутренних инструментов, AI-автоматизации, Flask, WebSocket, SwiftUI и практических инженерных задачах.",
      inLanguage: "ru-RU",
      isPartOf: {
        "@id": websiteId,
      },
      about: {
        "@id": personId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${pageUrl}#profile`,
      url: pageUrl,
      name: "AI и инженерный профиль Константина Орлова",
      description:
        "Профиль разработчика внутренних инструментов и AI-автоматизации: Python/Flask, WebSocket, SwiftUI, Next.js и операционные workflow.",
      inLanguage: "ru-RU",
      isPartOf: {
        "@id": websiteId,
      },
      mainEntity: personStructuredData,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "@id": `${pageUrl}#server-monitor`,
      name: "Server Monitor",
      description:
        "Приватный Flask-дашборд с WebSocket-транспортом и нативным SwiftUI iOS-клиентом для мониторинга сервера через Tailscale.",
      programmingLanguage: ["Python", "Swift", "JavaScript"],
      runtimePlatform: ["Flask", "iOS", "Tailscale"],
      author: {
        "@id": personId,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-[var(--ink)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[linear-gradient(180deg,rgba(255,250,244,0.9),rgba(255,250,244,0))]" />
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-10 hidden w-px bg-black/5 xl:block" />

      <SiteHeader
        activeRole="ai"
        ctaLabel="Связаться"
        mobileCtaLabel="Обсудить проект"
        navLinks={aiNavLinks}
      />

      <section
        className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-32 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:pb-24"
        data-analytics-section="ai_hero"
      >
        <div className="fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[var(--accent)]">
            AI и разработка
          </p>
          <h1 className="font-editorial mt-5 max-w-4xl text-5xl leading-[0.96] text-[var(--ink)] sm:text-6xl lg:text-7xl xl:text-[6.15rem]">
            Инструменты, которые превращают ручную работу в систему
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            Проектирую и собираю прикладные AI- и web-инструменты для задач,
            где важны данные, скорость реакции, контроль доступа и понятный
            рабочий интерфейс.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {expertiseAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-black/10 bg-[rgba(255,251,245,0.72)] px-4 py-2 text-sm text-zinc-700 shadow-[0_12px_30px_-24px_rgba(31,26,21,0.45)]"
              >
                {area}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex rounded-full bg-zinc-950 px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-deep)]"
              data-analytics-label="ai_hero:contact_cta"
            >
              Обсудить проект
            </a>
            <a
              href="#cases"
              className="inline-flex rounded-full border border-black/10 bg-[rgba(255,251,245,0.72)] px-7 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-black/20 hover:bg-white hover:text-zinc-950"
              data-analytics-label="ai_hero:cases_cta"
            >
              Посмотреть кейсы
            </a>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.value}
                className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,245,0.74)] p-5 shadow-[0_20px_45px_-35px_rgba(31,26,21,0.45)]"
              >
                <p className="font-editorial text-3xl text-[var(--ink)]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="fade-up-delay relative rounded-[2.2rem] border border-black/10 bg-[rgba(255,251,245,0.8)] p-8 shadow-[0_32px_80px_-48px_rgba(31,26,21,0.5)]">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Когда я особенно полезен
            </p>
            <span className="shrink-0 rounded-full border border-black/10 bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              Build
            </span>
          </div>
          <div className="mt-7 space-y-6">
            {supportScenarios.map((item) => (
              <div
                key={item.title}
                className="border-b border-black/10 pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl font-semibold text-[var(--ink)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.7rem] bg-zinc-950 p-6 text-stone-100">
            <p className="font-editorial text-3xl leading-tight">
              Хорошая автоматизация не выглядит магией. Она просто убирает
              лишние ручные шаги.
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Поэтому я начинаю с процесса, ограничений и сценариев отказа, а
              уже потом выбираю стек, AI-модель или интерфейс.
            </p>
          </div>
        </aside>
      </section>

      <section id="approach" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 border-t border-black/10 pt-20 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Подход
            </p>
            <h2 className="font-editorial mt-4 text-4xl leading-[1.02] text-[var(--ink)] md:text-5xl lg:text-[3.6rem]">
              Сначала рабочая логика, затем код, интерфейс и AI-слой.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[color:var(--muted)]">
            <p>
              Для меня разработка начинается не с выбора библиотеки, а с
              понимания того, где у пользователя ломается процесс: что он
              проверяет руками, где теряет статус, какие решения принимает
              вслепую и какие ошибки повторяются.
            </p>
            <p>
              После этого можно собирать инструмент: backend, интерфейс,
              WebSocket-обновления, приватный доступ, AI-помощника или простой
              dashboard. Главное — чтобы решение было применимо каждый день.
            </p>
            <p>
              Такой подход особенно хорошо работает на стыке операций и
              инженерии: там, где нужно быстро превратить хаос в управляемый
              контур.
            </p>
          </div>
        </div>
      </section>

      <section id="cases" className="mx-auto max-w-6xl px-6 py-20">
        <div className="border-t border-black/10 pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Кейсы
          </p>
          <h2 className="font-editorial mt-4 max-w-4xl text-4xl leading-[1.02] text-[var(--ink)] md:text-5xl lg:text-[3.4rem]">
            Не список технологий, а задачи, где код должен держать реальную
            нагрузку.
          </h2>
          <div className="mt-12 space-y-5">
            {caseStudies.map((item, index) => (
              <article
                key={item.title}
                className={`card-lift rounded-[1.8rem] border p-7 shadow-[0_20px_50px_-38px_rgba(31,26,21,0.42)] ${
                  index === 0
                    ? "border-black/10 bg-zinc-950 text-stone-100"
                    : "border-black/10 bg-[rgba(255,251,245,0.76)]"
                }`}
              >
                <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
                  <div>
                    <p
                      className={`text-xs font-medium uppercase tracking-[0.3em] ${
                        index === 0 ? "text-stone-400" : "text-zinc-500"
                      }`}
                    >
                      {item.eyebrow}
                    </p>
                    <h3
                      className={`font-editorial mt-4 text-4xl leading-tight ${
                        index === 0 ? "text-white" : "text-[var(--ink)]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-7 ${
                        index === 0 ? "text-stone-300" : "text-[color:var(--muted)]"
                      }`}
                    >
                      {item.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full border px-3 py-1 text-xs ${
                            index === 0
                              ? "border-white/10 bg-white/5 text-stone-200"
                              : "border-black/10 bg-white/55 text-zinc-700"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {item.repository ? (
                      <p className="mt-6 text-xs leading-6 text-stone-400">
                        {item.repository}
                      </p>
                    ) : null}
                  </div>

                  <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
                    {[
                      ["Задача", item.problem],
                      ["Архитектура", item.architecture],
                      ["Результат", item.result],
                    ].map(([label, text]) => (
                      <div
                        key={label}
                        className={`rounded-[1.4rem] border p-5 ${
                          index === 0
                            ? "border-white/10 bg-white/5"
                            : "border-black/10 bg-white/55"
                        }`}
                      >
                        <p
                          className={`text-xs font-medium uppercase tracking-[0.22em] ${
                            index === 0 ? "text-stone-400" : "text-zinc-500"
                          }`}
                        >
                          {label}
                        </p>
                        <p
                          className={`mt-3 text-sm leading-7 ${
                            index === 0
                              ? "text-stone-300"
                              : "text-[color:var(--muted)]"
                          }`}
                        >
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 border-t border-black/10 pt-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Практика
            </p>
            <h2 className="font-editorial mt-4 text-4xl leading-[1.02] text-[var(--ink)] md:text-5xl lg:text-[3.35rem]">
              Инженерия с операционным взглядом на результат.
            </h2>
            <div className="mt-10 space-y-5">
              {practicePoints.map((point) => (
                <div
                  key={point}
                  className="flex gap-4 border-b border-black/10 pb-5 last:border-b-0 last:pb-0"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <p className="text-base leading-7 text-[color:var(--muted)]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-zinc-950 p-8 text-stone-100 shadow-[0_34px_90px_-48px_rgba(15,11,8,0.8)]">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-stone-400">
              Зоны ответственности
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {responsibilityAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-300">
                    {area.items}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-6 py-20">
        <div className="border-t border-black/10 pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            FAQ
          </p>
          <h2 className="font-editorial mt-4 max-w-4xl text-4xl leading-[1.02] text-[var(--ink)] md:text-5xl lg:text-[3.25rem]">
            Частые вопросы про AI, код и рабочие инструменты.
          </h2>
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.7rem] border border-black/10 bg-[rgba(255,251,245,0.78)] p-6 shadow-[0_20px_50px_-42px_rgba(31,26,21,0.42)] open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-lg font-semibold text-[var(--ink)] md:text-xl">
                    {item.question}
                  </span>
                  <span className="font-editorial text-3xl leading-none text-[var(--accent)] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-4xl pt-4 text-sm leading-7 text-[color:var(--muted)]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 border-t border-black/10 pt-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Контакты
            </p>
            <h2 className="font-editorial mt-4 text-4xl leading-[1.02] text-[var(--ink)] md:text-5xl lg:text-[3.2rem]">
              Давайте обсудим инструмент, который должен работать в реальности.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
              Можно написать про AI-автоматизацию, внутренний dashboard,
              интеграцию, прототип или задачу, где нужно связать процесс,
              интерфейс и данные.
            </p>
            <div className="mt-10 space-y-4 text-sm text-zinc-700">
              <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,245,0.76)] px-5 py-4 shadow-[0_20px_45px_-40px_rgba(31,26,21,0.4)]">
                <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </span>
                <a
                  href="mailto:konstantin.orlov1985@icloud.com"
                  className="mt-2 inline-block text-base font-medium text-zinc-950 hover:underline"
                  data-analytics-label="ai_contact:email_link"
                >
                  konstantin.orlov1985@icloud.com
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,245,0.76)] px-5 py-4 shadow-[0_20px_45px_-40px_rgba(31,26,21,0.4)]">
                <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500">
                  Telegram
                </span>
                <a
                  href="https://t.me/Konstantin_Orlov_404"
                  className="mt-2 inline-block text-base font-medium text-zinc-950 hover:underline"
                  data-analytics-label="ai_contact:telegram_link"
                  rel="noreferrer"
                  target="_blank"
                >
                  @Konstantin_Orlov_404
                </a>
              </div>
              <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,245,0.76)] px-5 py-4 shadow-[0_20px_45px_-40px_rgba(31,26,21,0.4)]">
                <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500">
                  GitHub
                </span>
                <a
                  href="https://github.com/4eburek404"
                  className="mt-2 inline-block text-base font-medium text-zinc-950 hover:underline"
                  data-analytics-label="ai_contact:github_link"
                  rel="noreferrer"
                  target="_blank"
                >
                  github.com/4eburek404
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2.1rem] border border-black/10 bg-[rgba(255,251,245,0.84)] p-8 shadow-[0_36px_90px_-52px_rgba(31,26,21,0.56)]">
            <h3 className="text-2xl font-semibold text-[var(--ink)]">
              Написать сообщение
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-[color:var(--muted)]">
              Опишите задачу, текущий процесс, данные, ограничения доступа или
              формат прототипа. Чем конкретнее контекст, тем быстрее можно
              перейти к рабочей архитектуре.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8" data-analytics-section="ai_footer">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>&copy; {currentYear} Konstantin Orlov</span>
          <span>AI и код, которые работают внутри процесса</span>
        </div>
      </footer>
    </main>
  );
}
