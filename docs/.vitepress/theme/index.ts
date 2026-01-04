// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import VersionSelector from './../components/VersionSelector.vue'
import HomePage from './../components/HomePage.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-title-after': () => h(VersionSelector)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // Register global components
    app.component('HomePage', HomePage)
  }
} satisfies Theme
