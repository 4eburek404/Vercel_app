"use client";

import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
};

function buildMailtoUrl({ name, email, message }) {
  const subject = encodeURIComponent(`Запрос с сайта от ${name}`);
  const body = encodeURIComponent(
    [
      `Имя: ${name}`,
      `Email: ${email}`,
      "",
      "Сообщение:",
      message,
    ].join("\n")
  );

  return `mailto:konstantin.orlov1985@icloud.com?subject=${subject}&body=${body}`;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    window.location.href = buildMailtoUrl(formData);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm text-gray-500 mb-1" htmlFor="name">
          Имя
        </label>
        <input
          autoComplete="name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white"
          id="name"
          maxLength={80}
          name="name"
          onChange={handleChange}
          placeholder="Ваше имя"
          required
          type="text"
          value={formData.name}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-500 mb-1" htmlFor="email">
          Email
        </label>
        <input
          autoComplete="email"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white"
          id="email"
          name="email"
          onChange={handleChange}
          placeholder="Ваш e-mail"
          required
          type="email"
          value={formData.email}
        />
      </div>
      <div>
        <label className="block text-sm text-gray-500 mb-1" htmlFor="message">
          Сообщение
        </label>
        <textarea
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gray-400 transition-colors bg-white resize-none"
          id="message"
          maxLength={1200}
          name="message"
          onChange={handleChange}
          placeholder="Расскажите о задаче, формате сотрудничества или процессе, который хотите улучшить..."
          required
          rows={5}
          value={formData.message}
        ></textarea>
      </div>
      <button
        className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors"
        type="submit"
      >
        Отправить на email
      </button>
      <p className="text-xs text-gray-400 leading-relaxed">
        После отправки откроется ваш почтовый клиент с готовым письмом. Если
        удобнее, можно сразу написать в{" "}
        <a
          className="text-gray-700 hover:text-gray-900 underline underline-offset-2"
          href="https://t.me/Konstantin_Orlov_404"
          target="_blank"
          rel="noreferrer"
        >
          Telegram
        </a>
        .
      </p>
    </form>
  );
}
