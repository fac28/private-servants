import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Liz Truss Servant Profile Picture Price: £8.41' }).click();
  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link').nth(2).click();
  await page.getByText('[ "Liz Truss" ]').click();
});