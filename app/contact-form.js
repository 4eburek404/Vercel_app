"use client";

import { useState } from "react";

const INITIAL_FORM = {
  name: "",
  email: "",
  message: "",
  company: "",
};
const FORM_ENDPOINT = "https://formsubmit.co/ajax/konstantin.orlov1985@icloud.com";

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");
    setStatusMessage("");

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("_replyto", formData.email);
    payload.append("message", formData.message);
    payload.append("_subject", `Запрос с сайта от ${formData.name}`);
    payload.append("_template", "table");
    payload.append("_honey", formData.company);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("request_failed");
      }

      setFormData(INITIAL_FORM);
      setStatus("success");
      setStatusMessage(
        "Сообщение отправлено. Если форма ещё не была активирована в FormSubmit, проверьте ваш email и подтвердите первый запрос."
      );
    } catch {
      setStatus("error");
      setStatusMessage(
        "Не удалось отправить сообщение. Попробуйте ещё раз или напишите напрямую в Telegram."
      );
    }
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
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Компания</label>
        <input
          autoComplete="off"
          id="company"
          name="company"
          onChange={handleChange}
          tabIndex={-1}
          type="text"
          value={formData.company}
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
        className="w-full bg-gray-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={status === "loading"}
        type="submit"
      >
        {status === "loading" ? "Отправка..." : "Отправить сообщение"}
      </button>
      {statusMessage ? (
        <p
          className={`text-sm leading-relaxed ${
            status === "success" ? "text-green-700" : "text-red-600"
          }`}
        >
          {statusMessage}
        </p>
      ) : null}
      <p className="text-xs text-gray-400 leading-relaxed">
        Сообщение отправляется прямо с сайта. Если удобнее, можно сразу написать в{" "}
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
