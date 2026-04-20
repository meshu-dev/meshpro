export default defineAppConfig({
  theme: {
    primaryColor: '#ababab',
  },
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'purple',
      neutral: 'zinc'
    },
    card: {
      slots: {
        root: 'rounded-lg overflow-hidden',
        header: 'p-4 sm:px-6',
        body: 'p-0 sm:p-0',
        footer: 'p-4 sm:px-6'
      },
    },
    footer: {
      slots: {
        container: 'flex flex-col-reverse lg:flex-row py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3',
      }
    }
  }
})
