import { defineConfig } from 'vitepress'
import { getSidebar } from './sidebars'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Sockeon",
  description: "A framework-agnostic PHP WebSocket and HTTP server library",
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'author', content: 'Sockeon' }],
    ['meta', { name: 'keywords', content: 'PHP, WebSocket, HTTP Server, Real-time, Sockeon, PHP Framework, WebSocket Server' }],
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Sockeon' }],
    ['meta', { property: 'og:title', content: 'Sockeon - PHP WebSocket & HTTP Server' }],
    ['meta', { property: 'og:description', content: 'Build real-time applications with a unified server that handles both WebSocket and HTTP protocols seamlessly' }],
    ['meta', { property: 'og:image', content: 'https://sockeon.github.io/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://sockeon.github.io' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Sockeon - PHP WebSocket & HTTP Server' }],
    ['meta', { name: 'twitter:description', content: 'Build real-time applications with a unified server that handles both WebSocket and HTTP protocols seamlessly' }],
    ['meta', { name: 'twitter:image', content: 'https://sockeon.github.io/logo.png' }],
    
    // Algolia site verification
    ['meta', { name: 'algolia-site-verification', content: '69C814E8A28C3B41' }],

    // Favicon
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/v3.0/getting-started/installation', activeMatch: '/(v1\\.0|v2\\.0|v3\\.0)/' },
    ],

    sidebar: {
      ...getSidebar('v1.0'),
      ...getSidebar('v2.0'),
      ...getSidebar('v3.0')
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sockeon/sockeon' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'NDFUG8I0D2',
        apiKey: '649717b25060e28c3cef93af26888759',
        indexName: 'Sockeon',
        placeholder: 'Search documentation...',
        translations: {
          button: {
            buttonText: 'Search',
            buttonAriaLabel: 'Search documentation'
          },
          modal: {
            searchBox: {
              resetButtonTitle: 'Clear the query',
              resetButtonAriaLabel: 'Clear the query',
              cancelButtonText: 'Cancel',
              cancelButtonAriaLabel: 'Cancel'
            },
            startScreen: {
              recentSearchesTitle: 'Recent',
              noRecentSearchesText: 'No recent searches',
              saveRecentSearchButtonTitle: 'Save to recent searches',
              removeRecentSearchButtonTitle: 'Remove from recent searches',
              favoriteSearchesTitle: 'Favorite',
              removeFavoriteSearchButtonTitle: 'Remove from favorites'
            },
            errorScreen: {
              titleText: 'Unable to fetch results',
              helpText: 'You might want to check your network connection.'
            },
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            },
            noResultsScreen: {
              noResultsText: 'No results for',
              suggestedQueryText: 'Try searching for',
              reportMissingResultsText: 'Believe this query should return results?',
              reportMissingResultsLinkText: 'Let us know.'
            }
          }
        }
      }
    }
  }
})
