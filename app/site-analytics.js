"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import {
  ensureYandexMetrikaQueue,
  hitYandexPageview,
  isYandexMetrikaEnabled,
  reachYandexGoal,
  YANDEX_METRIKA_ID,
} from "./yandex-metrika";

const VISITOR_ID_STORAGE_KEY = "portfolio_visitor_id";
const YANDEX_METRIKA_BOOTSTRAP = `
  window.ym = window.ym || function(){(window.ym.a = window.ym.a || []).push(arguments)};
  window.ym.l = window.ym.l || 1 * new Date();
`;

function generateVisitorId() {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }

  return `visitor_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

function getVisitorId() {
  try {
    const existingVisitorId = window.localStorage.getItem(VISITOR_ID_STORAGE_KEY);

    if (existingVisitorId) {
      return existingVisitorId;
    }

    const nextVisitorId = generateVisitorId();
    window.localStorage.setItem(VISITOR_ID_STORAGE_KEY, nextVisitorId);

    return nextVisitorId;
  } catch {
    return generateVisitorId();
  }
}

function cleanText(value) {
  return value?.replace(/\s+/g, " ").trim().slice(0, 120) || undefined;
}

function sendEvent(name, payload) {
  try {
    track(name, payload);
  } catch {
    // Analytics should never break the UI.
  }
}

function getSectionName(element) {
  const sectionRoot = element.closest("[data-analytics-section], section[id], nav, footer");

  if (!sectionRoot) {
    return "page";
  }

  if (sectionRoot instanceof HTMLElement) {
    return (
      sectionRoot.dataset.analyticsSection ||
      sectionRoot.getAttribute("id") ||
      sectionRoot.tagName.toLowerCase()
    );
  }

  return "page";
}

function getElementLabel(element) {
  return cleanText(
    element.getAttribute("data-analytics-label") ||
      element.getAttribute("aria-label") ||
      element.textContent ||
      element.getAttribute("name") ||
      element.getAttribute("id") ||
      element.tagName.toLowerCase()
  );
}

function getClickPayload(element, visitorId) {
  const label = getElementLabel(element);
  const href = element instanceof HTMLAnchorElement ? element.href : undefined;

  return {
    visitorId,
    path: window.location.pathname,
    label: label || "interaction",
    href,
    section: getSectionName(element),
    element: element.tagName.toLowerCase(),
    referrer: document.referrer || "direct",
  };
}

function getClickGoal(payload) {
  if (payload.label?.includes("telegram_link")) {
    return "telegram_click";
  }

  if (payload.label?.includes("email_link")) {
    return "email_click";
  }

  if (payload.label?.includes("github_link")) {
    return "github_click";
  }

  if (payload.label === "ai_hero:cases_cta") {
    return "ai_cases_cta_click";
  }

  if (payload.label?.includes("contact_cta")) {
    return "contact_cta_click";
  }

  return undefined;
}

function getCurrentUrl() {
  return `${window.location.pathname}${window.location.search}${window.location.hash}`;
}

export default function SiteAnalytics() {
  const pathname = usePathname();
  const metrikaEnabled = isYandexMetrikaEnabled();

  useEffect(() => {
    if (!metrikaEnabled) {
      return;
    }

    ensureYandexMetrikaQueue();
    window.ym?.(YANDEX_METRIKA_ID, "init", {
      accurateTrackBounce: true,
      clickmap: true,
      defer: true,
      trackLinks: true,
      webvisor: true,
    });
  }, [metrikaEnabled]);

  useEffect(() => {
    if (!metrikaEnabled) {
      return;
    }

    hitYandexPageview(getCurrentUrl(), {
      referer: document.referrer || undefined,
      title: document.title,
    });
  }, [metrikaEnabled, pathname]);

  useEffect(() => {
    const visitorId = getVisitorId();
    const query = new URLSearchParams(window.location.search);

    sendEvent("page_opened", {
      visitorId,
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || "direct",
      utmSource: query.get("utm_source") || undefined,
      utmMedium: query.get("utm_medium") || undefined,
      utmCampaign: query.get("utm_campaign") || undefined,
    });

    function handleClick(event) {
      if (!(event.target instanceof Element)) {
        return;
      }

      const element = event.target.closest(
        "a,button,summary,[role='button'],input[type='submit']"
      );

      if (!element) {
        return;
      }

      const payload = getClickPayload(element, visitorId);
      const yandexGoal = getClickGoal(payload);

      sendEvent("click", payload);

      if (yandexGoal) {
        reachYandexGoal(yandexGoal, {
          label: payload.label,
          path: payload.path,
          section: payload.section,
        });
      }
    }

    function handleSubmit(event) {
      if (!(event.target instanceof HTMLFormElement)) {
        return;
      }

      sendEvent("form_submit_attempt", {
        visitorId,
        path: window.location.pathname,
        section: getSectionName(event.target),
        form: event.target.getAttribute("data-analytics-form") || event.target.id || "form",
      });
    }

    function handleToggle(event) {
      if (!(event.target instanceof HTMLDetailsElement) || !event.target.open) {
        return;
      }

      const summary = event.target.querySelector("summary");

      sendEvent("faq_opened", {
        visitorId,
        path: window.location.pathname,
        section: getSectionName(event.target),
        question: summary ? getElementLabel(summary) : "faq",
      });
    }

    document.addEventListener("click", handleClick, true);
    document.addEventListener("submit", handleSubmit, true);
    document.addEventListener("toggle", handleToggle, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("submit", handleSubmit, true);
      document.removeEventListener("toggle", handleToggle, true);
    };
  }, []);

  return (
    <>
      <Analytics />
      {metrikaEnabled ? (
        <>
          <Script
            dangerouslySetInnerHTML={{ __html: YANDEX_METRIKA_BOOTSTRAP }}
            id="yandex-metrika-bootstrap"
            strategy="afterInteractive"
          />
          <Script
            id="yandex-metrika-tag"
            src="https://mc.yandex.ru/metrika/tag.js"
            strategy="afterInteractive"
          />
          <noscript>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
                style={{ position: "absolute", left: "-9999px" }}
              />
            </div>
          </noscript>
        </>
      ) : null}
    </>
  );
}
