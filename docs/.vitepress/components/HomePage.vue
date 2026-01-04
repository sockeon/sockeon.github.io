<template>
  <div class="home-page">
    <!-- Hero Section with Animated Background -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="gradient-orb orb-1"></div>
        <div class="gradient-orb orb-2"></div>
        <div class="gradient-orb orb-3"></div>
      </div>

      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            <span>Production Ready</span>
          </div>

          <h1 class="hero-title">
            <span class="title-line">
              <span class="title-gradient">Sockeon</span>
            </span>
            <span class="title-subtitle">PHP WebSocket & HTTP Server</span>
          </h1>

          <p class="hero-description">
            Build real-time applications with a unified server that handles both WebSocket and HTTP protocols
            seamlessly.
            Zero dependencies, production-ready, and built for modern PHP.
          </p>

          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">0</div>
              <div class="stat-label">Dependencies</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">2</div>
              <div class="stat-label">Protocols</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-number">100%</div>
              <div class="stat-label">PHP Core</div>
            </div>
          </div>

          <div class="hero-actions">
            <a href="/v2.0/getting-started/installation" class="btn btn-primary">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
            <a href="https://github.com/sockeon/sockeon" class="btn btn-secondary" target="_blank" rel="noopener">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                </path>
              </svg>
              <span>View on GitHub</span>
            </a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="code-preview">
            <div class="code-preview-header">
              <div class="code-dots">
                <span class="dot red"></span>
                <span class="dot yellow"></span>
                <span class="dot green"></span>
              </div>
              <span class="code-filename">server.php</span>
            </div>
            <div class="code-preview-content">
              <div class="code-line"><span class="code-keyword">use</span> <span
                  class="code-class">Sockeon\Sockeon</span>;</div>
              <div class="code-line"><span class="code-keyword">class</span> <span
                  class="code-class">ChatController</span> {</div>
              <div class="code-line"> <span class="code-attr">#[SocketOn</span>(<span
                  class="code-string">'message'</span>)<span class="code-attr">]</span></div>
              <div class="code-line"> <span class="code-keyword">public function</span> <span
                  class="code-function">handle</span>() { }</div>
              <div class="code-line">}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section with Cards -->
    <section class="features-section">
      <div class="section-header">
        <h2 class="section-title">Everything You Need</h2>
        <p class="section-description">A complete solution for building real-time applications</p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index"
          :style="{ '--delay': index * 0.1 + 's' }">
          <div class="feature-icon-wrapper">
            <div class="feature-icon">{{ feature.icon }}</div>
            <div class="feature-glow"></div>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-link">
            <span>Learn more</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Example Section -->
    <section class="code-example-section">
      <div class="section-header">
        <h2 class="section-title">Get Started in Minutes</h2>
        <p class="section-description">Simple, powerful, and ready for production</p>
      </div>

      <div class="code-showcase">
        <div class="code-tabs">
          <button class="code-tab" :class="{ active: activeTab === 'install' }" @click="activeTab = 'install'">
            Installation
          </button>
          <button class="code-tab" :class="{ active: activeTab === 'example' }" @click="activeTab = 'example'">
            Example
          </button>
        </div>

        <div class="code-container">
          <div v-show="activeTab === 'install'" class="code-block">
            <div class="code-header">
              <span class="code-lang">bash</span>
              <button class="code-copy" @click="copyCode(installCode, 'install')"
                :title="copySuccess.install ? 'Copied!' : 'Copy code'">
                <svg v-if="!copySuccess.install" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5" />
                  <path d="M5 5V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.5" />
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="code-content"
              v-html="installCodeHtml || `<pre><code class='language-bash'>${installCode}</code></pre>`"></div>
          </div>

          <div v-show="activeTab === 'example'" class="code-block">
            <div class="code-header">
              <span class="code-lang">php</span>
              <button class="code-copy" @click="copyCode(exampleCode, 'example')"
                :title="copySuccess.example ? 'Copied!' : 'Copy code'">
                <svg v-if="!copySuccess.example" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="5" y="5" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5" />
                  <path d="M5 5V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="1.5" />
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 4L6 11L3 8" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <div class="code-content"
              v-html="exampleCodeHtml || `<pre><code class='language-php'>${exampleCode}</code></pre>`"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="use-cases-section">
      <div class="section-header">
        <h2 class="section-title">Built for Real-Time</h2>
        <p class="section-description">Powerful enough for any real-time application</p>
      </div>

      <div class="use-cases-grid">
        <div class="use-case-card" v-for="(useCase, index) in useCases" :key="index">
          <div class="use-case-icon">{{ useCase.icon }}</div>
          <h3 class="use-case-title">{{ useCase.title }}</h3>
          <p class="use-case-description">{{ useCase.description }}</p>
        </div>
      </div>
    </section>

    <!-- Why Section -->
    <section class="why-section">
      <div class="why-container">
        <div class="why-content">
          <h2 class="section-title">Why Sockeon?</h2>
          <p class="section-description">Built for developers who want simplicity without sacrificing power</p>

          <div class="why-grid">
            <div class="why-item" v-for="(reason, index) in reasons" :key="index">
              <div class="why-icon">{{ reason.icon }}</div>
              <div class="why-content-inner">
                <h3 class="why-title">{{ reason.title }}</h3>
                <p class="why-description">{{ reason.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Build Something Amazing?</h2>
          <p class="cta-description">Start building real-time applications with Sockeon today</p>
          <div class="cta-actions">
            <a href="/v2.0/getting-started/installation" class="btn btn-primary btn-large">
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </a>
            <a href="https://github.com/sockeon/sockeon" class="btn btn-ghost btn-large" target="_blank" rel="noopener">
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUpdated, nextTick } from 'vue'
import { createHighlighter } from 'shiki'

const activeTab = ref('install')
const copySuccess = ref({ install: false, example: false })
const highlighter = ref(null)
const installCodeHtml = ref('')
const exampleCodeHtml = ref('')

const installCode = `composer require sockeon/sockeon`

onMounted(async () => {
  try {
    highlighter.value = await createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['bash', 'php']
    })

    // Detect if dark mode is active (VitePress uses 'dark' class)
    const isDark = document.documentElement.classList.contains('dark') ||
      (document.querySelector('html')?.classList.contains('dark'))

    const theme = isDark ? 'github-dark' : 'github-light'

    // Highlight install code
    let installHtml = highlighter.value.codeToHtml(installCode, {
      lang: 'bash',
      theme: theme
    })
    // Remove background-color from inline styles
    installHtml = installHtml.replace(/background-color:[^;'"]+;?/gi, '')
    installCodeHtml.value = installHtml
    
    // Highlight example code
    let exampleHtml = highlighter.value.codeToHtml(exampleCode, {
      lang: 'php',
      theme: theme
    })
    // Remove background-color from inline styles
    exampleHtml = exampleHtml.replace(/background-color:[^;'"]+;?/gi, '')
    exampleCodeHtml.value = exampleHtml
  } catch (error) {
    console.error('Failed to load syntax highlighter:', error)
    // Fallback to plain text
    installCodeHtml.value = `<pre><code class="language-bash">${installCode}</code></pre>`
    exampleCodeHtml.value = `<pre><code class="language-php">${exampleCode}</code></pre>`
  }
})

const exampleCode = `<?php

use Sockeon\\Sockeon\\Config\\ServerConfig;
use Sockeon\\Sockeon\\Connection\\Server;
use Sockeon\\Sockeon\\Controllers\\SocketController;
use Sockeon\\Sockeon\\Http\\Attributes\\HttpRoute;
use Sockeon\\Sockeon\\Http\\Request;
use Sockeon\\Sockeon\\Http\\Response;
use Sockeon\\Sockeon\\WebSocket\\Attributes\\SocketOn;
use Sockeon\\Sockeon\\WebSocket\\Attributes\\OnConnect;

class ChatController extends SocketController
{
    #[OnConnect]
    public function onConnect(string $clientId): void
    {
        $this->emit($clientId, 'welcome', ['message' => 'Connected!']);
    }

    #[SocketOn('chat.message')]
    public function handleMessage(string $clientId, array $data): void
    {
        $this->broadcast('chat.message', [
            'user' => $clientId,
            'message' => $data['message']
        ]);
    }

    #[HttpRoute('GET', '/api/status')]
    public function getStatus(Request $request): Response
    {
        return Response::json(['status' => 'online']);
    }
}

$config = new ServerConfig([
    'host' => '0.0.0.0',
    'port' => 6001
]);

$server = new Server($config);
$server->registerController(new ChatController());
$server->run();`

const features = [
  {
    icon: '🚀',
    title: 'Dual Protocol Server',
    description: 'Single server handling both WebSocket and HTTP requests. Build real-time applications and REST APIs from the same codebase.'
  },
  {
    icon: '🎯',
    title: 'Attribute-Based Routing',
    description: 'Clean, declarative routing using PHP 8 attributes. Define WebSocket events and HTTP routes with simple annotations.'
  },
  {
    icon: '🏠',
    title: 'Namespaces & Rooms',
    description: 'Organize client connections with namespaces and rooms. Broadcast messages to specific groups efficiently.'
  },
  {
    icon: '🛡️',
    title: 'Built-in Security',
    description: 'Rate limiting, CORS support, authentication, and validation built-in. Production-ready security features out of the box.'
  },
  {
    icon: '⚡',
    title: 'High Performance',
    description: 'Zero dependencies, built with PHP core functionality. Lightweight and optimized for high-concurrency applications.'
  },
  {
    icon: '🔧',
    title: 'Production Ready',
    description: 'Reverse proxy support, health checks, comprehensive logging, error handling, and uptime tracking included.'
  }
]

const useCases = [
  {
    icon: '💬',
    title: 'Real-Time Chat',
    description: 'Build chat systems, live notifications, and collaborative features with WebSocket support.'
  },
  {
    icon: '📊',
    title: 'Live Dashboards',
    description: 'Create real-time monitoring dashboards that update instantly as data changes.'
  },
  {
    icon: '🎮',
    title: 'Gaming & Interactive',
    description: 'Power multiplayer games and interactive experiences with low-latency WebSocket connections.'
  },
  {
    icon: '🔌',
    title: 'API & WebSocket Hybrid',
    description: 'Serve REST APIs alongside WebSocket connections from a single server instance.'
  },
  {
    icon: '🌐',
    title: 'IoT & Devices',
    description: 'Connect and manage IoT devices with bidirectional real-time communication.'
  },
  {
    icon: '👥',
    title: 'Collaborative Tools',
    description: 'Build collaborative editing, live cursors, and shared workspace features.'
  }
]

const reasons = [
  {
    icon: '🎨',
    title: 'Modern PHP 8 Features',
    description: 'Leverage attributes, typed properties, and modern PHP syntax for clean, maintainable code.'
  },
  {
    icon: '📦',
    title: 'Zero Dependencies',
    description: 'Built with PHP core functionality only. No external dependencies to manage.'
  },
  {
    icon: '🔒',
    title: 'Security First',
    description: 'Built-in rate limiting, authentication, validation, and CORS support for secure applications.'
  },
  {
    icon: '🚀',
    title: 'Production Ready',
    description: 'Health checks, logging, error handling, and reverse proxy support included.'
  },
  {
    icon: '📚',
    title: 'Comprehensive Docs',
    description: 'Extensive documentation with examples, API reference, and best practices.'
  },
  {
    icon: '🌐',
    title: 'Framework Agnostic',
    description: 'Works with any PHP application. No framework lock-in.'
  }
]

function copyCode(code, type) {
  const codeToCopy = code.replace(/\\n/g, '\n')
  if (navigator.clipboard) {
    navigator.clipboard.writeText(codeToCopy).then(() => {
      copySuccess.value[type] = true
      setTimeout(() => {
        copySuccess.value[type] = false
      }, 2000)
    })
  } else {
    // Fallback for older browsers
    const textarea = document.createElement('textarea')
    textarea.value = codeToCopy
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copySuccess.value[type] = true
    setTimeout(() => {
      copySuccess.value[type] = false
    }, 2000)
  }
}
</script>

<style scoped>
.home-page {
  width: 100%;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}

.orb-1 {
  width: 500px;
  height: 500px;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  top: -200px;
  right: -200px;
  animation-delay: 0s;
}

.orb-2 {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--vp-c-brand-2), var(--vp-c-indigo-2));
  bottom: -150px;
  left: -150px;
  animation-delay: 5s;
}

.orb-3 {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, var(--vp-c-indigo-1), var(--vp-c-brand-1));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: 10s;
}

@keyframes float {

  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }

  33% {
    transform: translate(30px, -30px) scale(1.1);
  }

  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.hero-container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-soft);
  opacity: 0.6;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 999px;
  width: fit-content;
  font-size: 0.875rem;
  color: var(--vp-c-brand-1);
  font-weight: 500;
}

.badge-dot {
  width: 8px;
  height: 8px;
  background: var(--vp-c-brand-1);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
}

.title-line {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.title-gradient {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 50%, var(--vp-c-indigo-1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradient-shift 5s ease infinite;
}

@keyframes gradient-shift {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}

.title-subtitle {
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  opacity: 0.9;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  max-width: 600px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  backdrop-filter: blur(10px);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--vp-c-divider);
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s;
}

.btn:hover::before {
  transform: translateX(100%);
}

.btn-primary {
  background: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.btn-primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.btn-secondary {
  background: transparent;
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.btn-secondary:hover {
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}

.btn-ghost {
  background: transparent;
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.btn-ghost:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-preview {
  width: 100%;
  max-width: 500px;
  background: var(--vp-code-block-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: transform 0.3s;
}

.code-preview:hover {
  transform: perspective(1000px) rotateY(0) rotateX(0);
}

.code-preview-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background: #ff5f56;
}

.dot.yellow {
  background: #ffbd2e;
}

.dot.green {
  background: #27c93f;
}

.code-filename {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  font-family: 'SF Mono', Monaco, monospace;
}

.code-preview-content {
  padding: 1.5rem;
  font-family: 'SF Mono', Monaco, monospace;
  font-size: 0.875rem;
  line-height: 1.8;
}

.code-line {
  margin: 0.25rem 0;
}

.code-keyword {
  color: #c792ea;
}

.code-class {
  color: #82aaff;
}

.code-function {
  color: #7fdbca;
}

.code-string {
  color: #c3e88d;
}

.code-attr {
  color: #ffcb6b;
}

/* Features Section */
.features-section {
  position: relative;
  padding: 8rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  background: linear-gradient(135deg, var(--vp-c-text-1), var(--vp-c-text-2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.section-description {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2.5rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out both;
  animation-delay: var(--delay);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), transparent);
  opacity: 0;
  transition: opacity 0.4s;
}

.feature-card:hover {
  transform: translateY(-8px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card:hover::before {
  opacity: 0.1;
}

.feature-icon-wrapper {
  position: relative;
  width: fit-content;
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 3rem;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.feature-glow {
  position: absolute;
  inset: -10px;
  background: var(--vp-c-brand-soft);
  border-radius: 50%;
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.4s;
}

.feature-card:hover .feature-glow {
  opacity: 0.5;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
}

.feature-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0 0 1.5rem 0;
}

.feature-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--vp-c-brand);
  font-weight: 500;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: gap 0.3s;
}

.feature-card:hover .feature-link {
  gap: 0.75rem;
}

/* Code Example Section */
.code-example-section {
  padding: 8rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.code-showcase {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
}

.code-tabs {
  display: flex;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 0.5rem;
}

.code-tab {
  flex: 1;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.3s;
}

.code-tab.active {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.code-tab:hover:not(.active) {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.code-container {
  position: relative;
}

.code-block {
  position: relative;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.code-lang {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.code-copy {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.code-copy:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.code-copy svg {
  transition: transform 0.2s;
}

.code-copy:active svg {
  transform: scale(0.9);
}

.code-content {
  padding: 0;
  margin: 0;
  overflow-x: auto;
  padding: 5px 15px;
}

.code-content pre {
  margin: 0;
  background: transparent !important;
  background-color: transparent !important;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.7;
}

.code-content pre[style*="background-color"] {
  background-color: transparent !important;
}

.code-content pre code {
  display: block;
  width: 100%;
  overflow-x: auto;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  background: transparent !important;
}

.code-block code {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 0.875rem;
  line-height: 1.8;
}

/* Use Cases Section */
.use-cases-section {
  padding: 8rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.use-case-card {
  padding: 2rem;
  background: linear-gradient(135deg, var(--vp-c-bg-soft), transparent);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.use-case-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), transparent);
  opacity: 0;
  transition: opacity 0.3s;
}

.use-case-card:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.use-case-card:hover::after {
  opacity: 0.3;
}

.use-case-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1;
  position: relative;
  z-index: 1;
}

.use-case-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  color: var(--vp-c-text-1);
  position: relative;
  z-index: 1;
}

.use-case-description {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  margin: 0;
  position: relative;
  z-index: 1;
}

/* Why Section */
.why-section {
  padding: 8rem 2rem;
  background: linear-gradient(180deg, transparent, var(--vp-c-bg-soft));
}

.why-container {
  max-width: 1280px;
  margin: 0 auto;
}

.why-content {
  text-align: center;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.why-item {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  transition: all 0.3s;
  text-align: left;
}

.why-item:hover {
  border-color: var(--vp-c-brand);
  transform: translateX(8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.why-icon {
  font-size: 2.5rem;
  line-height: 1;
  flex-shrink: 0;
}

.why-content-inner {
  flex: 1;
}

.why-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
}

.why-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* CTA Section */
.cta-section {
  padding: 8rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.cta-container {
  text-align: center;
  padding: 4rem;
  background: linear-gradient(135deg, var(--vp-c-brand-soft), var(--vp-c-indigo-soft));
  border: 1px solid var(--vp-c-divider);
  border-radius: 32px;
  position: relative;
  overflow: hidden;
}

.cta-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent);
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-title {
  font-size: 3rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-1);
  letter-spacing: -0.02em;
}

.cta-description {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin: 0 0 2.5rem 0;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 960px) {
  .hero-container {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
    padding: 0 1rem;
  }

  .hero-visual {
    display: none;
  }

  .title-line {
    font-size: 3rem;
  }

  .hero-stats {
    justify-content: center;
  }

  .code-preview {
    transform: none;
  }

  .section-title {
    font-size: 2.25rem;
  }

  .features-grid,
  .use-cases-grid,
  .why-grid {
    grid-template-columns: 1fr;
  }

  .cta-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 3rem 0;
  }

  .title-line {
    font-size: 2.5rem;
  }

  .title-subtitle {
    font-size: 1.5rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
  }

  .stat-divider {
    width: 100%;
    height: 1px;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .code-preview {
    display: none;
  }

  .features-section,
  .code-example-section,
  .use-cases-section,
  .why-section,
  .cta-section {
    padding: 4rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-container {
    padding: 2.5rem 1.5rem;
  }

  .cta-title {
    font-size: 1.75rem;
  }
}
</style>
