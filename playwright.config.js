const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: 'tests',
    reporter: 'html',
    use: {
        baseURL: 'http://localhost:3000',
        trace: 'on-first-retry',
        headless: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'Mobile Chrome',
            use: { ...devices['Pixel 5'] },
        },
    ],
    webServer: {
        command: 'npm run start',
        url: 'http://localhost:3000',
        reuseExistingServer: !process.env.CI,
    },
});
