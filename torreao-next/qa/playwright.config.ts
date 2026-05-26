import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 60_000,
  retries: 0,
  reporter: [
    ['html', { outputFolder: 'qa/reports/html', open: 'never' }],
    ['json', { outputFile: 'qa/reports/results.json' }],
    ['list'],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'off',
    trace: 'off',
  },
  projects: [
    // Mobile
    { name: 'mobile-360',   use: { browserName: 'chromium', viewport: { width: 360,  height: 640  } } },
    { name: 'mobile-390',   use: { browserName: 'chromium',  viewport: { width: 390,  height: 844  } } },
    { name: 'mobile-412',   use: { browserName: 'chromium',  viewport: { width: 412,  height: 915  } } },
    // Tablet
    { name: 'tablet-768',   use: { browserName: 'chromium', viewport: { width: 768,  height: 1024 } } },
    { name: 'tablet-820',   use: { browserName: 'chromium', viewport: { width: 820,  height: 1180 } } },
    // Desktop
    { name: 'desktop-1280', use: { browserName: 'chromium', viewport: { width: 1280, height: 800  } } },
    { name: 'desktop-1440', use: { browserName: 'chromium', viewport: { width: 1440, height: 900  } } },
    { name: 'desktop-1920', use: { browserName: 'chromium', viewport: { width: 1920, height: 1080 } } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
