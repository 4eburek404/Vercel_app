import { expect, test } from "@playwright/test";

async function collectRuntimeErrors(page) {
  const errors = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      errors.push(`console: ${message.text()}`);
    }
  });

  page.on("pageerror", (error) => {
    errors.push(`pageerror: ${error.message}`);
  });

  return errors;
}

async function expectNoRuntimeErrors(errors) {
  expect(errors, errors.join("\n")).toEqual([]);
}

async function openMobileMenu(page) {
  await page.getByRole("button", { name: "Open menu" }).click();
}

async function expectActiveRole(page, testInfo, roleName) {
  if (testInfo.project.name === "mobile-chromium") {
    await openMobileMenu(page);
  }

  await expect(page.getByRole("link", { name: roleName, exact: true }).first()).toHaveAttribute(
    "aria-current",
    "page"
  );
}

async function clickRoleLink(page, testInfo, roleName) {
  if (testInfo.project.name === "mobile-chromium") {
    const menuButton = page.getByRole("button", { name: "Open menu" });

    if (await menuButton.isVisible()) {
      await menuButton.click();
    }
  }

  await page.getByRole("link", { name: roleName, exact: true }).first().click();
}

test.describe("portfolio routes", () => {
  test("travel homepage renders, keeps SEO, and links to AI", async ({ page }, testInfo) => {
    const errors = await collectRuntimeErrors(page);

    await page.goto("/");
    await expect(page).toHaveTitle(
      "Константин Орлов — корпоративные командировки и travel-процессы"
    );
    await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
      "href",
      "https://konstantin-orlov.vercel.app"
    );
    await expect(
      page.getByRole("heading", {
        name: "Командировки работают — бизнес не ждёт",
      })
    ).toBeVisible();
    await expectActiveRole(page, testInfo, "Travel");

    await clickRoleLink(page, testInfo, "AI");
    await expect(page).toHaveURL("/ai");
    await expect(
      page.getByRole("heading", {
        name: "Инструменты, которые превращают ручную работу в систему",
      })
    ).toBeVisible();

    await expectNoRuntimeErrors(errors);
  });

  test("AI page renders, keeps SEO, and links back to travel", async ({ page }, testInfo) => {
    const errors = await collectRuntimeErrors(page);

    await page.goto("/ai");
    await expect(page).toHaveTitle("AI, автоматизация и разработка | Константин Орлов");
    await expect(page.locator("link[rel='canonical']")).toHaveAttribute(
      "href",
      "https://konstantin-orlov.vercel.app/ai"
    );
    await expect(
      page.getByRole("heading", {
        name: "Инструменты, которые превращают ручную работу в систему",
      })
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Server Monitor" })).toBeVisible();
    await expect(page.getByText("4eburek404/server_monitor_iOS_app")).toBeVisible();
    await expectActiveRole(page, testInfo, "AI");

    await clickRoleLink(page, testInfo, "Travel");
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", {
        name: "Командировки работают — бизнес не ждёт",
      })
    ).toBeVisible();

    await expectNoRuntimeErrors(errors);
  });

  test("mobile menu exposes navigation and role switcher", async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile-chromium", "mobile-only navigation check");

    const errors = await collectRuntimeErrors(page);

    await page.goto("/ai");
    await page.getByRole("button", { name: "Open menu" }).click();
    const mobileNavigation = page.locator("#mobile-navigation");
    await expect(
      mobileNavigation.getByRole("link", { name: "Travel", exact: true })
    ).toBeVisible();
    await expect(
      mobileNavigation.getByRole("link", { name: "AI", exact: true })
    ).toBeVisible();
    await expect(
      mobileNavigation.getByRole("link", { name: "Кейсы", exact: true })
    ).toBeVisible();
    await expect(
      mobileNavigation.getByRole("link", { name: "Обсудить проект", exact: true })
    ).toBeVisible();

    await mobileNavigation.getByRole("link", { name: "Travel", exact: true }).click();
    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", {
        name: "Командировки работают — бизнес не ждёт",
      })
    ).toBeVisible();

    await expectNoRuntimeErrors(errors);
  });

  test("sitemap and llms text include the AI route", async ({ page }) => {
    const sitemap = await page.request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    expect(await sitemap.text()).toContain("https://konstantin-orlov.vercel.app/ai");

    const llms = await page.request.get("/llms.txt");
    expect(llms.ok()).toBeTruthy();
    const llmsText = await llms.text();
    expect(llmsText).toContain("AI and Development Profile");
    expect(llmsText).toContain("Server Monitor");
  });
});
