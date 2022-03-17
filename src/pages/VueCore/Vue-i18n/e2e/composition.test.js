;['legacy'].forEach(pattern => {
  //vue-i18n v9.2-beta.32, useI18n is supported in legacy mode
  //https://github.com/intlify/vue-i18n-next/issues/953#issuecomment-1064939121
  describe.skip(`${pattern}`, () => {
    beforeAll(async () => {
      await page.goto(
        `http://localhost:8080/examples/${pattern}/composition.html`
      )
    })

    test('initial rendering', async () => {
      await expect(page).toMatchElement('#app p', {
        text: 'こんにちは、世界！'
      })
      await expect(page).toMatchElement('#app div.child p', {
        text: 'やあ！'
      })
    })

    test('change locale', async () => {
      // root
      await expect(page).toSelect('#app select', 'en')
      await expect(page).toMatchElement('#app p', { text: 'hello world!' })
      await expect(page).toMatchElement('#app div.child p', {
        text: 'Hi there!'
      })

      // Child
      await expect(page).toSelect('#app div.child select', 'ja')
      await expect(page).toMatchElement('#app p', { text: 'hello world!' })
      await expect(page).toMatchElement('#app div.child p', {
        text: 'やあ！'
      })
    })
  })
})
