const { test, expect } = require('@playwright/test');

test.describe('E2E тести локальної сторінки', () => {
    test('1. Перевірка заголовка сторінки', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Локальна сторінка/);
    });

    test('2. Успішна авторизація користувача', async ({ page }) => {
        await page.goto('/');
        await page.fill('#username', 'test_user');
        await page.fill('#password', 'password123');
        await page.click('#loginButton');
        await expect(page.locator('#successMessage')).toBeVisible();
    });

    test('3. Валідація обов’язкових полів форми', async ({ page }) => {
        await page.goto('/');
        await page.click('#loginButton');
        const invalidInput = await page.evaluate(() => document.querySelector(':invalid'));
        expect(invalidInput).not.toBeNull();
    });

    test('4. Навігація на сторінку "Про нас"', async ({ page }) => {
        await page.goto('/');
        await page.click('#aboutLink');
        await expect(page).toHaveURL(/about\.html/);
    });
});
