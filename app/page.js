import ContactForm from "./contact-form";
import MobileNav from "./mobile-nav";
import { navLinks } from "./nav-links";

const expertiseAreas = [
  "Корпоративные командировки",
  "Travel policy",
  "Контроль затрат",
  "VIP- и executive-поездки",
  "Форс-мажоры и срочные изменения",
  "Автоматизация travel-процессов",
];

const heroStats = [
  {
    value: "12+",
    label: "лет опыта в организации корпоративных поездок",
  },
  {
    value: "RU / INTL",
    label: "маршруты по России и за рубежом, включая нестандартную логистику",
  },
  {
    value: "VIP",
    label: "поездки первых лиц, где важны скорость, точность и тишина",
  },
];

const supportScenarios = [
  {
    title: "Когда поездок становится слишком много",
    description:
      "Строю понятную систему: заявки, согласования, бронирования, изменения и закрывающие документы работают как единый процесс, а не набор ручных действий.",
  },
  {
    title: "Когда ошибки уже стоят бизнесу времени",
    description:
      "Помогаю увидеть потери в согласованиях, исключениях и сорванных маршрутах, а затем перевожу их в правила, контрольные точки и рабочую travel policy.",
  },
  {
    title: "Когда маршрут не имеет права рассыпаться",
    description:
      "Берусь за VIP-запросы, срочные переносы и сложные маршруты, где важны не презентации, а спокойное исполнение до финального результата.",
  },
];

const businessTasks = [
  {
    title: "Управление travel-функцией",
    description:
      "Выстраиваю понятный и управляемый контур командировок: от входящей заявки до документов, контроля качества и разбора ошибок.",
  },
  {
    title: "Контроль затрат",
    description:
      "Смотрю не только на тарифы, но и на скрытые издержки: задержки согласований, повторные брони, ошибки в маршрутах и перегруз команды.",
  },
  {
    title: "Правила, которые работают",
    description:
      "Перевожу хаос в ясные договорённости: кто и на каких условиях ездит, где допустимы исключения и как их согласовывать без потери темпа.",
  },
  {
    title: "VIP и сложные маршруты",
    description:
      "Веду кейсы, где особенно важны приватность, точность деталей и короткий цикл принятия решений без права на лишнюю суету.",
  },
  {
    title: "Форс-мажоры и срочные изменения",
    description:
      "Подключаюсь, когда всё меняется в последний момент: пересобираю маршрут, удерживаю контроль и довожу поездку до рабочего состояния.",
  },
  {
    title: "Выбор модели работы",
    description:
      "Помогаю понять, что выгоднее бизнесу на практике: in-house, агентство, self-booking или гибридный подход с понятным разделением ответственности.",
  },
];

const proofPoints = [
  "С 2014 года управляю деловыми поездками и корпоративным travel-сервисом.",
  "Закрываю полный цикл командировки: заявка, бронирование, сопровождение, изменения, документы.",
  "Работаю с маршрутами по России и международными поездками, включая нестандартные кейсы.",
  "Поддерживаю executive- и VIP-запросы, где критичны точность, конфиденциальность и личная вовлечённость.",
];

const responsibilityAreas = [
  {
    title: "Операционный контур",
    items:
      "Заявки, бронирования, маршруты, изменения, поддержка в поездке и закрывающие документы без лишней ручной суеты.",
  },
  {
    title: "Управленческий контур",
    items:
      "Качество сервиса, разбор ошибок, развитие команды, стандартизация решений и понятная ответственность на каждом участке.",
  },
  {
    title: "Процессный контур",
    items:
      "Регламенты, travel policy, точки контроля, снижение ручной нагрузки и устойчивость сервиса при росте объёма.",
  },
  {
    title: "Инструменты и экспертиза",
    items:
      "GDS Amadeus, практика сложных маршрутов, работа с нестандартными запросами и быстрая перенастройка плана при сбоях.",
  },
];

const faqItems = [
  {
    question: "Когда компании нужен внутренний travel-эксперт?",
    answer:
      "Когда командировок становится много, растёт число исключений, а ошибки начинают стоить времени, денег и репутации. В этот момент бизнесу нужен не просто исполнитель, а человек, который держит всю функцию в рабочем состоянии.",
  },
  {
    question: "Что выгоднее: своя travel-функция или аутсорсинг?",
    answer:
      "Это зависит от объёма поездок, доли VIP-запросов, требований к скорости и уровня внутреннего контроля. На практике часто лучше работает гибридная модель, где критичные участки остаются внутри, а часть задач уходит внешнему партнёру.",
  },
  {
    question: "Как снижать расходы без просадки по сервису?",
    answer:
      "Через понятную policy, прозрачные исключения, контроль точек согласования и разбор повторяющихся сбоев. Экономия появляется не только на тарифах, но и на уменьшении числа переделок, переносов и потерянного времени.",
  },
  {
    question: "Что делать с VIP-поездками и срочными изменениями маршрута?",
    answer:
      "Для этого нужен отдельный режим работы: быстрые решения, заранее продуманные сценарии замены и персональная ответственность за маршрут до самого финала.",
  },
  {
    question: "Где помогает автоматизация travel-процессов?",
    answer:
      "Там, где много повторяющихся действий: заявки, согласования, статусы, напоминания, контроль документов. Автоматизация снимает рутину, но работает только тогда, когда сама логика процесса уже собрана правильно.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const siteUrl = "https://konstantin-orlov.vercel.app";
  const personId = `${siteUrl}/#person`;
  const websiteId = `${siteUrl}/#website`;
  const pageId = `${siteUrl}/#webpage`;

  const personStructuredData = {
    "@type": "Person",
    "@id": personId,
    name: "Константин Орлов",
    url: siteUrl,
    jobTitle: "Руководитель функции организации деловых поездок",
    description:
      "Эксперт по корпоративным командировкам, travel policy, контролю затрат, VIP-поездкам и оптимизации travel-процессов.",
    email: "konstantin.orlov1985@icloud.com",
    sameAs: ["https://t.me/Konstantin_Orlov_404"],
    knowsAbout: expertiseAreas,
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": websiteId,
      url: siteUrl,
      name: "Константин Орлов",
      inLanguage: "ru-RU",
      description:
        "Профиль эксперта по корпоративным командировкам, VIP-поездкам и travel-процессам.",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      url: siteUrl,
      name: "Константин Орлов — эксперт по корпоративным командировкам и travel-процессам",
      description:
        "Одностраничный сайт Константина Орлова: управление travel-функцией, travel policy, контроль затрат, VIP-поездки и автоматизация travel-процессов.",
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
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: "Профиль эксперта Константина Орлова",
      description:
        "Профиль руководителя функции организации деловых поездок: корпоративные командировки, travel policy, контроль затрат, VIP-поездки и операционная устойчивость.",
      inLanguage: "ru-RU",
      isPartOf: {
        "@id": websiteId,
      },
      mainEntity: personStructuredData,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
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

      <nav
        className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[rgba(250,245,238,0.78)] backdrop-blur-xl"
        data-analytics-section="header_nav"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-editorial text-2xl tracking-tight text-[var(--ink)]">
            Konstantin Orlov
          </span>
          <div className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-zinc-950"
                data-analytics-label={`desktop_nav:${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex rounded-full border border-black/10 bg-[rgba(255,251,245,0.7)] px-5 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:border-black/20 hover:bg-white hover:text-zinc-950"
              data-analytics-label="desktop_nav:contact_cta"
            >
              Написать
            </a>
          </div>
          <MobileNav links={navLinks} />
        </div>
      </nav>

      <section
        className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:pb-24"
        data-analytics-section="hero"
      >
        <div className="fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.34em] text-[var(--accent)]">
            Корпоративный travel
          </p>
          <h1 className="font-editorial mt-5 max-w-4xl text-5xl leading-[0.96] tracking-[-0.05em] text-[var(--ink)] sm:text-6xl lg:text-7xl xl:text-[6.35rem]">
            Командировки работают — бизнес не ждёт
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[color:var(--muted)] md:text-xl">
            Собираю travel-функцию так, чтобы заявки, маршруты, VIP-запросы
            и документы шли без сбоев. Когда бизнесу нужны точность и темп —
            поездки не должны быть источником хаоса.
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
              data-analytics-label="hero:contact_cta"
            >
              Обсудить задачу
            </a>
            <a
              href="#about"
              className="inline-flex rounded-full border border-black/10 bg-[rgba(255,251,245,0.72)] px-7 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-black/20 hover:bg-white hover:text-zinc-950"
              data-analytics-label="hero:about_cta"
            >
              Посмотреть подход
            </a>
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.value}
                className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,245,0.74)] p-5 shadow-[0_20px_45px_-35px_rgba(31,26,21,0.45)]"
              >
                <p className="font-editorial text-3xl tracking-[-0.05em] text-[var(--ink)]">
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
          <span className="absolute right-6 top-6 rounded-full border border-black/10 bg-white/75 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
            С 2014
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Когда я особенно полезен
          </p>
          <div className="mt-7 space-y-6">
            {supportScenarios.map((item) => (
              <div
                key={item.title}
                className="border-b border-black/10 pb-6 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl font-semibold tracking-tight text-[var(--ink)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[1.7rem] bg-zinc-950 p-6 text-stone-100">
            <p className="font-editorial text-3xl leading-tight tracking-[-0.04em]">
              Travel начинает выглядеть красиво только тогда, когда перестаёт
              быть хрупким.
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              Поэтому я смотрю на поездки не как на витрину сервиса, а как на
              рабочую систему с реальной нагрузкой и дедлайнами.
            </p>
          </div>
        </aside>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 border-t border-black/10 pt-20 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Подход
            </p>
            <h2 className="font-editorial mt-4 text-4xl leading-[1.02] tracking-[-0.045em] text-[var(--ink)] md:text-5xl lg:text-[3.6rem]">
              Не витрина сервиса, а рабочая система, которая выдерживает
              реальную нагрузку.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[color:var(--muted)]">
            <p>
              Командировка — это не билеты и отель. Это сроки, согласования,
              бюджет, исключения и ожидания от сервиса в одном флаконе. Когда
              связок много, travel начинает буксовать.
            </p>
            <p>
              Я работаю на стыке сервиса и операционного контроля: собираю
              понятную логику, помогаю команде держать стандарт, а руководителям —
              видеть, где функция помогает бизнесу, а где создаёт скрытые потери.
            </p>
            <p>
              Мой фокус — корпоративные командировки, VIP-поездки, сложные
              маршруты, travel policy и системное улучшение качества сервиса.
            </p>
          </div>
        </div>
      </section>

      <section id="value" className="mx-auto max-w-6xl px-6 py-20">
        <div className="border-t border-black/10 pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
            Задачи
          </p>
          <h2 className="font-editorial mt-4 max-w-4xl text-4xl leading-[1.02] tracking-[-0.045em] text-[var(--ink)] md:text-5xl lg:text-[3.4rem]">
            Не набор услуг, а участки, где travel чаще всего начинает мешать
            работе.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {businessTasks.map((task, index) => {
              const highlighted = index % 3 === 0;

              return (
                <article
                  key={task.title}
                  className={`card-lift rounded-[1.8rem] border p-7 shadow-[0_20px_50px_-38px_rgba(31,26,21,0.42)] ${
                    highlighted
                      ? "border-black/10 bg-[rgba(168,82,50,0.08)]"
                      : "border-black/10 bg-[rgba(255,251,245,0.76)]"
                  }`}
                >
                  <div className="flex gap-5">
                    <span className="font-editorial text-5xl leading-none tracking-[-0.06em] text-[var(--accent)]">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
                        {task.title}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">
                        {task.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 border-t border-black/10 pt-20 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Практика
            </p>
            <h2 className="font-editorial mt-4 text-4xl leading-[1.02] tracking-[-0.045em] text-[var(--ink)] md:text-5xl lg:text-[3.35rem]">
              Опора не на обещания, а на длинную операционную дистанцию.
            </h2>
            <div className="mt-10 space-y-5">
              {proofPoints.map((point) => (
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
              Контуры ответственности
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {responsibilityAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-white">
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
          <h2 className="font-editorial mt-4 max-w-4xl text-4xl leading-[1.02] tracking-[-0.045em] text-[var(--ink)] md:text-5xl lg:text-[3.25rem]">
            Частые вопросы о travel-функции и корпоративных поездках.
          </h2>
          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[1.7rem] border border-black/10 bg-[rgba(255,251,245,0.78)] p-6 shadow-[0_20px_50px_-42px_rgba(31,26,21,0.42)] open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-lg font-semibold tracking-tight text-[var(--ink)] md:text-xl">
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
            <h2 className="font-editorial mt-4 text-4xl leading-[1.02] tracking-[-0.045em] text-[var(--ink)] md:text-5xl lg:text-[3.2rem]">
              Давайте обсудим, как сделать ваши поездки управляемыми.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[color:var(--muted)]">
              Можно написать, если нужен взгляд на текущий процесс, поддержка в
              сложных маршрутах, разбор travel policy или просто спокойный
              профессиональный разговор о том, как сделать поездки управляемыми.
            </p>
            <div className="mt-10 space-y-4 text-sm text-zinc-700">
              <div className="rounded-[1.5rem] border border-black/10 bg-[rgba(255,251,245,0.76)] px-5 py-4 shadow-[0_20px_45px_-40px_rgba(31,26,21,0.4)]">
                <span className="block text-[0.72rem] uppercase tracking-[0.22em] text-zinc-500">
                  Email
                </span>
                <a
                  href="mailto:konstantin.orlov1985@icloud.com"
                  className="mt-2 inline-block text-base font-medium text-zinc-950 hover:underline"
                  data-analytics-label="contact:email_link"
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
                  data-analytics-label="contact:telegram_link"
                  rel="noreferrer"
                  target="_blank"
                >
                  @Konstantin_Orlov_404
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2.1rem] border border-black/10 bg-[rgba(255,251,245,0.84)] p-8 shadow-[0_36px_90px_-52px_rgba(31,26,21,0.56)]">
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--ink)]">
              Написать сообщение
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-7 text-[color:var(--muted)]">
              Опишите задачу, текущий процесс или формат сотрудничества. Чем
              конкретнее контекст, тем быстрее сможем перейти к рабочему
              решению.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8" data-analytics-section="footer">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <span>&copy; {currentYear} Konstantin Orlov</span>
          <span>Travel, который работает как система</span>
        </div>
      </footer>
    </main>
  );
}
