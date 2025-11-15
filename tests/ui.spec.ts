import 'dotenv/config';
import { test, expect } from '@playwright/test';
import fs from 'fs';

const URL = process.env.TEST_URL || 'http://localhost:5176';

test('homepage loads and screenshot', async ({ page }) => {
  await page.goto(URL, { waitUntil: 'networkidle' });
  await expect(page.locator('body')).toBeVisible();

  await fs.promises.mkdir('tests/screenshots', { recursive: true });
  const screenshotPath = 'tests/screenshots/home.png';
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('Screenshot saved to', screenshotPath);
});
