module.exports = {
  server: {
    command: 'node -r esbuild-register ./serve.ts'
  },
  launch: {
    dumpio: false,
    headless: process.env.HEADLESS !== 'false'
  },
  browser: 'chromium',
  browserContext: 'default'
}
