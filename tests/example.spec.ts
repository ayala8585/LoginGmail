import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Dhe&ec=GAlA8wE&hl=iw&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S874158674%3A1740932470887641&ddm=1');

  // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
