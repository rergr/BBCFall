import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    await page.fill("input[name='email']", "adamadmin@blog.ch")
    await page.fill("input[name='password']", "admin1234")
    await page.click("form button")
    await page.waitForNavigation()
    await expect(page).toHaveURL('http://localhost:3000/')
})

test("can create post", async ({ page }) => {
    await page.goto('http://localhost:3000/posts/create')
    await page.fill("input[name='title']", "new post")
    await page.fill("textarea", "new post body")
    await page.click("form div button")
    await expect(await page.locator(".posts li:first-child h1")).toHaveText("new post")
})

test("can edit post", async ({ page }) => {
    await page.goto('http://localhost:3000/posts/42/edit')
    await page.type("input[name='title']", "")
    await page.type("input[name='title']", "edited text")
    await page.click("form div button")
    await page.goto("http://localhost:3000/posts/42")
    await expect(await page.locator(".posts li:first-child h1")).toContainText("edited text")
})