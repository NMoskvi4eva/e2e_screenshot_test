// tests/screenshots/local.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Screenshot тести', () => {
    test('1. Порівняння скріншота всієї сторінки', async ({ page }) => {
        await page.goto('/');
        expect(await page.screenshot()).toMatchSnapshot('index-page.png', {
            maxDiffPixelRatio: 0.15,
        });
    });

    test('2. Порівняння скріншота елемента h1', async ({ page }) => {
        await page.goto('/');
        const h1 = page.locator('h1');
        expect(await h1.screenshot()).toMatchSnapshot('index-page-h1.png', {
            maxDiffPixelRatio: 0.15,
        });
    });
});