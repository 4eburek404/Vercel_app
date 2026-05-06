"use client";

export const YANDEX_METRIKA_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "";

export function isYandexMetrikaEnabled() {
  return /^\d+$/.test(YANDEX_METRIKA_ID);
}

export function ensureYandexMetrikaQueue() {
  if (typeof window === "undefined") {
    return undefined;
  }

  window.ym =
    window.ym ||
    function ymQueue() {
      window.ym.a = window.ym.a || [];
      window.ym.a.push(arguments);
    };
  window.ym.l = window.ym.l || Number(new Date());

  return window.ym;
}

export function hitYandexPageview(url, options = {}) {
  if (!isYandexMetrikaEnabled()) {
    return;
  }

  try {
    const ym = ensureYandexMetrikaQueue();
    ym?.(YANDEX_METRIKA_ID, "hit", url, options);
  } catch {
    // Metrica must never affect the UI.
  }
}

export function reachYandexGoal(target, params = {}) {
  if (!isYandexMetrikaEnabled()) {
    return;
  }

  try {
    const ym = ensureYandexMetrikaQueue();
    ym?.(YANDEX_METRIKA_ID, "reachGoal", target, params);
  } catch {
    // Metrica must never affect the UI.
  }
}
