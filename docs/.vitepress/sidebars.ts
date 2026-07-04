import { DefaultTheme } from 'vitepress'

export function getSidebar(version: string): DefaultTheme.Sidebar {
  if (version === 'v1.0') {
    return {
      '/v1.0/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/v1.0/' },
            { text: 'Core Concepts', link: '/v1.0/core-concepts' },
            { text: 'Examples', link: '/v1.0/examples' },
            { text: 'API Reference', link: '/v1.0/api-reference' }
          ]
        }
      ]
    }
  }

  if (version === 'v2.0') {
    return {
      '/v2.0/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/v2.0/getting-started/installation' },
            { text: 'Quick Start', link: '/v2.0/getting-started/quick-start' },
            { text: 'Basic Concepts', link: '/v2.0/getting-started/basic-concepts' }
          ]
        },
        {
          text: 'Core Components',
          items: [
            { text: 'Server Configuration', link: '/v2.0/core/server-configuration' },
            { text: 'Controllers', link: '/v2.0/core/controllers' },
            { text: 'Routing', link: '/v2.0/core/routing' },
            { text: 'Middleware', link: '/v2.0/core/middleware' },
            { text: 'Namespaces and Rooms', link: '/v2.0/core/namespaces-rooms' },
            { text: 'System Room Controller', link: '/v2.0/core/system-room-controller' }
          ]
        },
        {
          text: 'WebSocket Features',
          items: [
            { text: 'WebSocket Events', link: '/v2.0/websocket/events' },
            { text: 'Connection Management', link: '/v2.0/websocket/connections' },
            { text: 'Broadcasting', link: '/v2.0/websocket/broadcasting' },
            { text: 'WebSocket Client', link: '/v2.0/websocket/client' }
          ]
        },
        {
          text: 'HTTP Features',
          items: [
            { text: 'HTTP Routing', link: '/v2.0/http/routing' },
            { text: 'Request and Response', link: '/v2.0/http/request-response' },
            { text: 'CORS Configuration', link: '/v2.0/http/cors' }
          ]
        },
        {
          text: 'Data Validation',
          items: [
            { text: 'Validation', link: '/v2.0/validation/validation' },
            { text: 'Sanitization', link: '/v2.0/validation/sanitization' }
          ]
        },
        {
          text: 'Advanced Features',
          items: [
            { text: 'Rate Limiting', link: '/v2.0/advanced/rate-limiting' },
            { text: 'Logging', link: '/v2.0/advanced/logging' },
            { text: 'Error Handling', link: '/v2.0/advanced/error-handling' },
            { text: 'Reverse Proxy', link: '/v2.0/advanced/reverse-proxy' }
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'Server API', link: '/v2.0/api/server' },
            { text: 'Controller API', link: '/v2.0/api/controller' },
            { text: 'Router API', link: '/v2.0/api/router' },
            { text: 'Request API', link: '/v2.0/api/request' },
            { text: 'Response API', link: '/v2.0/api/response' },
            { text: 'Client API', link: '/v2.0/api/client' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Basic Server', link: '/v2.0/examples/basic-server' },
            { text: 'HTTP Server', link: '/v2.0/examples/http-server' },
            { text: 'Hybrid Server', link: '/v2.0/examples/hybrid-server' },
            { text: 'Basic Client', link: '/v2.0/examples/basic-client' }
          ]
        }
      ]
    }
  }

  if (version === 'v3.0') {
    return {
      '/v3.0/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/v3.0/getting-started/installation' },
            { text: 'Quick Start', link: '/v3.0/getting-started/quick-start' },
            { text: 'Basic Concepts', link: '/v3.0/getting-started/basic-concepts' },
            { text: 'Migrating to 3.x', link: '/v3.0/getting-started/migration-v3' }
          ]
        },
        {
          text: 'Core Components',
          items: [
            { text: 'Server Configuration', link: '/v3.0/core/server-configuration' },
            { text: 'Engines', link: '/v3.0/core/engines' },
            { text: 'Survivability', link: '/v3.0/core/survivability' },
            { text: 'Controllers', link: '/v3.0/core/controllers' },
            { text: 'Routing', link: '/v3.0/core/routing' },
            { text: 'Middleware', link: '/v3.0/core/middleware' },
            { text: 'Namespaces and Rooms', link: '/v3.0/core/namespaces-rooms' }
          ]
        },
        {
          text: 'WebSocket Features',
          items: [
            { text: 'WebSocket Events', link: '/v3.0/websocket/events' },
            { text: 'Connection Management', link: '/v3.0/websocket/connections' },
            { text: 'Broadcasting', link: '/v3.0/websocket/broadcasting' },
            { text: 'WebSocket Client', link: '/v3.0/websocket/client' }
          ]
        },
        {
          text: 'HTTP Features',
          items: [
            { text: 'HTTP Routing', link: '/v3.0/http/routing' },
            { text: 'Request and Response', link: '/v3.0/http/request-response' },
            { text: 'CORS Configuration', link: '/v3.0/http/cors' }
          ]
        },
        {
          text: 'Data Validation',
          items: [
            { text: 'Validation', link: '/v3.0/validation/validation' },
            { text: 'Sanitization', link: '/v3.0/validation/sanitization' }
          ]
        },
        {
          text: 'Advanced Features',
          items: [
            { text: 'Rate Limiting', link: '/v3.0/advanced/rate-limiting' },
            { text: 'Logging', link: '/v3.0/advanced/logging' },
            { text: 'Error Handling', link: '/v3.0/advanced/error-handling' },
            { text: 'Swoole Engine', link: '/v3.0/advanced/swoole-engine' },
            { text: 'Scaling and Clustering', link: '/v3.0/advanced/scaling' },
            { text: 'Reverse Proxy', link: '/v3.0/advanced/reverse-proxy' }
          ]
        },
        {
          text: 'API Reference',
          items: [
            { text: 'Server API', link: '/v3.0/api/server' },
            { text: 'Controller API', link: '/v3.0/api/controller' },
            { text: 'Router API', link: '/v3.0/api/router' },
            { text: 'Request API', link: '/v3.0/api/request' },
            { text: 'Response API', link: '/v3.0/api/response' },
            { text: 'Client API', link: '/v3.0/api/client' },
            { text: 'Event API', link: '/v3.0/api/event' }
          ]
        },
        {
          text: 'Examples',
          items: [
            { text: 'Basic Server', link: '/v3.0/examples/basic-server' },
            { text: 'HTTP Server', link: '/v3.0/examples/http-server' },
            { text: 'Hybrid Server', link: '/v3.0/examples/hybrid-server' },
            { text: 'Basic Client', link: '/v3.0/examples/basic-client' }
          ]
        },
        {
          text: 'Reports',
          items: [
            { text: 'Performance Overview', link: '/v3.0/advanced/benchmark-report' }
          ]
        }
      ]
    }
  }

  // Default/fallback sidebar
  return {}
}

