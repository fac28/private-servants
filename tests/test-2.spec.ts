import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'The Queen Servant Profile Picture Price: £2000' }).click();
  await page.locator('svg').nth(1).click();
  await page.getByText('Give a speech', { exact: true }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link').nth(2).click();
  await page.getByText('[ "The Queen" ]').click();
});