import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

test.describe('New Todo', () => {
  test.only('should allow me to add todo items', async ({ page }) => {
    // Create 1st todo.
    // await page.locator('Text=VueEco').click()

    debugger
    await page.locator('.el-sub-menu__title >> text=VueEco').click();
    await page.locator('.el-menu-item >> text=mavon-editor' ).click();

    // Make sure the list only has one todo item.
    await expect(page.locator('.el-card .el-card__body').first()).
    toContainText('mavonEditor - A markdown editor')
    

    // // Create 2nd todo.
    // await page.locator('.new-todo').fill(TODO_ITEMS[1]);
    // await page.locator('.new-todo').press('Enter');

    // // Make sure the list now has two todo items.
    // await expect(page.locator('.view label')).toHaveText([
    //   TODO_ITEMS[0],
    //   TODO_ITEMS[1]
    // ]);

    // await checkNumberOfTodosInLocalStorage(page, 2);
  });

  test('should clear text input field when an item is added', async ({ page }) => {
    // Create one todo item.
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    // Check that input is empty.
    await expect(page.locator('.new-todo')).toBeEmpty();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });

  test('should append new items to the bottom of the list', async ({ page }) => {
    // Create 3 items.
    await createDefaultTodos(page);

    // Check test using different methods.
    await expect(page.locator('.todo-count')).toHaveText('3 items left');
    await expect(page.locator('.todo-count')).toContainText('3');
    await expect(page.locator('.todo-count')).toHaveText(/3/);

    // Check all items in one call.
    await expect(page.locator('.view label')).toHaveText(TODO_ITEMS);
    await checkNumberOfTodosInLocalStorage(page, 3);
  });

  test('should show #main and #footer when items added', async ({ page }) => {
    await page.locator('.new-todo').fill(TODO_ITEMS[0]);
    await page.locator('.new-todo').press('Enter');

    await expect(page.locator('.main')).toBeVisible();
    await expect(page.locator('.footer')).toBeVisible();
    await checkNumberOfTodosInLocalStorage(page, 1);
  });
});

async function createDefaultTodos(page: Page) {
  for (const item of TODO_ITEMS) {
    await page.locator('.new-todo').fill(item);
    await page.locator('.new-todo').press('Enter');
  }
}

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}

async function checkNumberOfCompletedTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).filter(i => i.completed).length === e;
  }, expected);
}

async function checkTodosInLocalStorage(page: Page, title: string) {
  return await page.waitForFunction(t => {
    return JSON.parse(localStorage['react-todos']).map(i => i.title).includes(t);
  }, title);
}
