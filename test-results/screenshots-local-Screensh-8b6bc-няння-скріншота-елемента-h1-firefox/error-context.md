# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots/local.spec.js >> Screenshot тести >> 2. Порівняння скріншота елемента h1
- Location: tests/screenshots/local.spec.js:9:5

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected) failed

  2558 pixels (ratio 0.06 of all image pixels) are different.

  Snapshot: index-page-h1.png

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Вітаємо на зміненій локальній сторінці" [level=1] [ref=e2]
  - generic [ref=e3]:
    - textbox "Ім'я користувача" [ref=e4]
    - textbox "Пароль" [ref=e5]
    - button "Увійти" [ref=e6] [cursor=pointer]
  - link "Перейти на сторінку \"Про нас\"" [ref=e7] [cursor=pointer]:
    - /url: /about.html
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test.describe('Screenshot тести', () => {
  4  |     test('1. Порівняння скріншота всієї сторінки', async ({ page }) => {
  5  |         await page.goto('/');
  6  |         expect(await page.screenshot()).toMatchSnapshot('index-page.png');
  7  |     });
  8  | 
  9  |     test('2. Порівняння скріншота елемента h1', async ({ page }) => {
  10 |         await page.goto('/');
  11 |         const h1 = page.locator('h1');
> 12 |         expect(await h1.screenshot()).toMatchSnapshot('index-page-h1.png');
     |                                       ^ Error: expect(Buffer).toMatchSnapshot(expected) failed
  13 |     });
  14 | });
  15 | 
```