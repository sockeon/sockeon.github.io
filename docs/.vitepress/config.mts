import { defineConfig } from 'vitepress'
import { getSidebar } from './sidebars'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sockeon",
  description: "A framework-agnostic PHP WebSocket and HTTP server library",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/v2.0/getting-started/installation', activeMatch: '/(v1\\.0|v2\\.0)/' },
    ],

    sidebar: {
      ...getSidebar('v1.0'),
      ...getSidebar('v2.0')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
