"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/next";

const VISITOR_ID_STORAGE_KEY = "portfolio_visitor_id";

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

export default function SiteAnalytics() {
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

      sendEvent("click", getClickPayload(element, visitorId));
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

  return <Analytics />;
}
