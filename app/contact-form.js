"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import { reachYandexGoal } from "./yandex-metrika";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/konstantin.orlov1985@icloud.com";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  function resetStatus() {
    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  }

  function handleInvalid() {
    resetStatus();

    track("form_validation_error", {
      form: "contact_form",
      path: window.location.pathname,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");
    const company = String(formData.get("company") || "");

    setStatus("loading");
    setStatusMessage("");

    const payload = new FormData();
    payload.append("name", name);
    payload.append("email", email);
    payload.append("_replyto", email);
    payload.append("message", message);
    payload.append("_subject", `Запрос с сайта от ${name}`);
    payload.append("_template", "table");
    payload.append("_honey", company);

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

      form.reset();
      setStatus("success");
      setStatusMessage("Сообщение отправлено. Я свяжусь с вами в ближайшее время.");
      track("form_submit_success", {
        form: "contact_form",
        path: window.location.pathname,
      });
      reachYandexGoal("contact_form_submit_success", {
        form: "contact_form",
        path: window.location.pathname,
      });
    } catch {
      setStatus("error");
      setStatusMessage(
        "Не удалось отправить сообщение. Попробуйте ещё раз или напишите напрямую в Telegram."
      );
      track("form_submit_error", {
        form: "contact_form",
        path: window.location.pathname,
      });
    }
  }

  return (
    <form
      className="space-y-4"
      data-analytics-form="contact_form"
      onInput={resetStatus}
      onInvalid={handleInvalid}
      onSubmit={handleSubmit}
    >
      <div>
        <label
          className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.22em] text-zinc-500"
          htmlFor="name"
        >
          Имя
        </label>
        <input
          autoComplete="name"
          className="ym-disable-keys w-full rounded-[1.15rem] border border-black/10 bg-[rgba(248,243,236,0.78)] px-4 py-3.5 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-[var(--accent)] focus:outline-none"
          id="name"
          maxLength={80}
          name="name"
          placeholder="Ваше имя"
          required
          type="text"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.22em] text-zinc-500"
          htmlFor="email"
        >
          Email
        </label>
        <input
          autoComplete="email"
          className="ym-disable-keys w-full rounded-[1.15rem] border border-black/10 bg-[rgba(248,243,236,0.78)] px-4 py-3.5 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-[var(--accent)] focus:outline-none"
          id="email"
          name="email"
          placeholder="Ваш e-mail"
          required
          type="email"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
      >
        <input
          autoComplete="off"
          className="ym-disable-keys"
          id="company"
          name="company"
          placeholder="Компания"
          tabIndex={-1}
          type="text"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-[0.72rem] font-medium uppercase tracking-[0.22em] text-zinc-500"
          htmlFor="message"
        >
          Сообщение
        </label>
        <textarea
          className="ym-disable-keys w-full resize-none rounded-[1.15rem] border border-black/10 bg-[rgba(248,243,236,0.78)] px-4 py-3.5 text-sm text-zinc-900 transition-colors placeholder:text-zinc-400 focus:border-[var(--accent)] focus:outline-none"
          id="message"
          maxLength={1200}
          name="message"
          placeholder="Расскажите о задаче, формате сотрудничества или процессе, который хотите улучшить..."
          required
          rows={5}
        ></textarea>
      </div>
      <button
        className="w-full rounded-full bg-zinc-950 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-deep)] disabled:cursor-not-allowed disabled:opacity-60"
        data-analytics-label="contact_form:submit"
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
      <p className="text-xs leading-relaxed text-zinc-500">
        Сообщение отправляется прямо с сайта. Если удобнее, можно сразу написать в{" "}
        <a
          className="text-zinc-700 underline underline-offset-2 hover:text-zinc-950"
          data-analytics-label="contact_form:telegram_link"
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
