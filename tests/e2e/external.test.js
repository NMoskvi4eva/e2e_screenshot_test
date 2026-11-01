const { test, expect } = require('@playwright/test');

test.describe('E2E тести для зовнішніх веб-сайтів', () => {
    test('5. Перевірка заголовка Playwright.dev', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('6. Перевірка меню навігації', async ({ page }) => {
        await page.goto('https://playwright.dev/');
        const nav = page.locator('nav');
        await expect(nav).toBeVisible();
    });
});
