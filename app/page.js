"use client";

import { useState } from "react";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">
            Konstantin Orlov
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            <a href="#about" className="hover:text-gray-900 transition-colors">
              Обо мне
            </a>
            <a
              href="#services"
              className="hover:text-gray-900 transition-colors"
            >
              Экспертиза
            </a>
            <a
              href="#contact"
              className="hover:text-gray-900 transition-colors"
            >
              Контакты
            </a>
          </div>
          <button
            className="md:hidden text-gray-500 hover:text-gray-900"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 text-sm text-gray-500">
            <a href="#about" className="block hover:text-gray-900" onClick={() => setMenuOpen(false)}>Обо мне</a>
            <a href="#services" className="block hover:text-gray-900" onClick={() => setMenuOpen(false)}>Экспертиза</a>
            <a href="#contact" className="block hover:text-gray-900" onClick={() => setMenuOpen(false)}>Контакты</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <p className="text-sm text-gray-400 tracking-widest uppercase mb-4">
          Руководитель travel-функции
        </p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
          Привет, я
          <br />
          <span className="text-gray-400">Константин</span>
        </h1>
        {/* ✏️ ИЗМЕНИТЕ: Замените описание на своё */}
        <p className="text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
          Руководитель travel-функции с 2014 года. Организую VIP-поездки и системно
          улучшаю процессы через работу над ошибками.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="bg-gray-900 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Связаться со мной
          </a>
          <a
            href="#about"
            className="border border-gray-200 text-gray-700 px-7 py-3 rounded-full text-sm font-medium hover:border-gray-400 transition-colors"
          >
            Узнать больше
          </a>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
              Обо мне
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Немного о себе
            </h2>
          </div>
          <div className="text-gray-500 leading-relaxed space-y-4">
            <p>
              Руководитель функции организации деловых поездок с 2014 года.
              Управляю полным циклом корпоративных командировок: от поступления
              заявки до закрытия документов. Глубокая экспертиза в
              travel-процессах, сопровождении нестандартных кейсов и организации
              поездок VIP-руководителей по России и всему миру.
            </p>
            <p>
              В работе совмещаю управленческую и экспертную роль: выступаю
              наставником для команды, системно провожу работу над ошибками,
              разбираю сложные случаи и не допускаю повторения ошибок.
            </p>
            <p>
              Открыт к новым проектам и сотрудничеству — пишите, обсудим!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-5xl mx-auto">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
          Что я делаю
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-14">
          Экспертиза
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-semibold mb-3">
              VIP-поездки и сложные маршруты
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Организация деловых поездок руководителей по России и всему миру.
              Лично веду наиболее сложные и нестандартные запросы — максимальная
              скорость реакции, точность и полная ответственность за результат.
            </p>
          </div>
          <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-semibold mb-3">
              Наставничество и развитие команды
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Выступаю экспертной опорой: разбираю сложные кейсы, даю
              развивающую обратную связь, передаю практику. Системно провожу
              работу над ошибками и повышаю качество исполнения внутри функции.
            </p>
          </div>
          <div className="group p-8 border border-gray-100 rounded-2xl hover:border-gray-300 transition-colors">
            <h3 className="text-lg font-semibold mb-3">
              Оптимизация travel-процессов
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Выявляю узкие места, пересматриваю подходы, стандартизирую решения.
              Улучшаю процессы в комплексе — повышаю устойчивость и
              управляемость сервиса через анализ данных и GDS Amadeus.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
              Контакты
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Давайте поговорим
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Если у вас есть проект или просто хотите познакомиться — я всегда
              рад новым знакомствам.
            </p>
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <span className="text-gray-300">Email</span>
                <a
                  href="mailto:konstantin.orlov1985@icloud.com"
                  className="text-gray-900 hover:underline"
                >
                  konstantin.orlov1985@icloud.com
                </a>
              </div>
              {/* ✏️ ИЗМЕНИТЕ: Укажите свой Telegram */}
              <div className="flex items-center gap-3">
                <span className="text-gray-300">Telegram</span>
                <a
                  href="https://t.me/Konstantin_Orlov_404"
                  className="text-gray-900 hover:underline"
                >
                  @Konstantin_Orlov_404
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-semibold mb-6">Написать сообщение</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Ваш e-mail"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>&copy; {currentYear} Konstantin Orlov</span>
          <span>Сделано с ♥ на Next.js + Vercel</span>
        </div>
      </footer>
    </main>
  );
}
