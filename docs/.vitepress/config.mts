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
      { icon: 'github', link: 'https://github.com/sockeon/sockeon' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'NDFUG8I0D2',
        apiKey: '649717b25060e28c3cef93af26888759',
        indexName: 'sockeon',
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
