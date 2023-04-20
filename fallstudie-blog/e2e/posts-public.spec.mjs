import { test, expect } from '@playwright/test'

test('should display a list of posts', async ({ page }) => {
    await page.goto('http://localhost:3000')
    await expect(await page.locator("article")).not.toBeFalsy()
})

test('should display a single post', async ({ page }) => {
    await page.goto('http://localhost:3000/posts/32')
    await expect(await page.locator(".posts li:first-child h1")).toHaveText("3242342342")
})

test("should redict to /login when unauthorized access to /posts/create", async ({ page }) => {
    await page.goto("http://localhost:3000/posts/create")
    await expect(page).toHaveURL('http://localhost:3000/login')
})

test("should redict to /login when unauthorized access to /posts/[id]/edit", async ({ page }) => {
    await page.goto("http://localhost:3000/posts/33/edit")
    await expect(page).toHaveURL('http://localhost:3000/login')
})