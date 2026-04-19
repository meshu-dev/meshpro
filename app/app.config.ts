export default defineAppConfig({
  theme: {
    primaryColor: '#ababab',
  },
  ui: {
    card: {
      slots: {
        root: 'rounded-lg overflow-hidden',
        header: 'p-4 sm:px-6',
        body: 'p-0 sm:p-0',
        footer: 'p-4 sm:px-6'
      },
    }
  }
})
