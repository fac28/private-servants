// @ts-check

import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://private-servants.fly.dev/')
  await expect(page).toHaveTitle(/Private Servants/)
})

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Click the get started link.
  await page.click('text=All')

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/.*listing/)
})
