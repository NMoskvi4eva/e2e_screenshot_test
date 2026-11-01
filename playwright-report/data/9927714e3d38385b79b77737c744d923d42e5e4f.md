# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e/local.test.js >> E2E тести локальної сторінки >> 2. Успішна авторизація користувача
- Location: tests/e2e/local.test.js:9:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('#successMessage')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" locator('#successMessage') with timeout 5000ms
  - waiting for locator('#successMessage')
    14 × locator resolved to <p id="successMessage"></p>
       - unexpected value "hidden"

```

```yaml
- heading "Вітаємо на зміненій локальній сторінці" [level=1]
- textbox "Ім'я користувача": test_user
- textbox "Пароль": password123
- button "Увійти"
- paragraph
- link "Перейти на сторінку \"Про нас\"":
  - /url: /about.html
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe('E2E тести локальної сторінки', () => {
  4  |     test('1. Перевірка заголовка сторінки', async ({ page }) => {
  5  |         await page.goto('/');
  6  |         await expect(page).toHaveTitle(/Локальна сторінка/);
  7  |     });
  8  | 
  9  |     test('2. Успішна авторизація користувача', async ({ page }) => {
  10 |         await page.goto('/');
  11 |         await page.fill('#username', 'test_user');
  12 |         await page.fill('#password', 'password123');
  13 |         await page.click('#loginButton');
> 14 |         await expect(page.locator('#successMessage')).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  15 |     });
  16 | 
  17 |     test('3. Валідація обов’язкових полів форми', async ({ page }) => {
  18 |         await page.goto('/');
  19 |         await page.click('#loginButton');
  20 |         const invalidInput = await page.evaluate(() => document.querySelector(':invalid'));
  21 |         expect(invalidInput).not.toBeNull();
  22 |     });
  23 | 
  24 |     test('4. Навігація на сторінку "Про нас"', async ({ page }) => {
  25 |         await page.goto('/');
  26 |         await page.click('#aboutLink');
  27 |         await expect(page).toHaveURL(/about\.html/);
  28 |     });
  29 | });
  30 | 
```