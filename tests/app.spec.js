// @ts-check

import { test, expect } from '@playwright/test'

const siteURL = 'http://localhost:3000/'

test('site has title', async ({ page }) => {
  await page.goto(siteURL)
  await expect(page).toHaveTitle(/Private Servants/)
})

test('listings link redirects to correct page', async ({ page }) => {
  await page.goto(siteURL)
  await page.click('text=All')
  await expect(page).toHaveURL(/.*listing/)
})

test('can add servant to basket', async ({ page }) => {
  await page.goto(siteURL)
  await page
    .getByRole('link', {
      name: 'Theresa May Servant Profile Picture Price: £950',
    })
    .click()
  await page.locator('svg').nth(1).click()
  await page.getByText('Go on a panel show', { exact: true }).click()
  await page.getByRole('button', { name: 'Add to Cart' }).click()
  await page.getByRole('link').nth(2).click()
  await expect(page).toHaveURL(`${siteURL}cart`)
  await expect(page.getByText('[ "Theresa May" ]')).toBeVisible()
})

test('can filter displayed servant by price', async ({ page }) => {
  await page.goto(siteURL)
  await page.getByRole('link', { name: 'All' }).click()
  await page.getByLabel('Max price 10000').fill('35')
  await expect(page.locator('ul > a').nth(3)).toHaveText(/Winston Churchill/)
})
