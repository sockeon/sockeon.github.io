<template>
  <div v-if="isDraftVersion" ref="bannerEl" class="draft-banner" role="status">
    <span class="draft-badge">Draft</span>
    <span class="draft-text">
      Sockeon 3.x is not released yet — the framework is in active development and testing.
    </span>
    <a class="draft-link" href="/v2.0/getting-started/installation">Stable v2.0 docs</a>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import versionsData from '../versions.json'

const route = useRoute()
const bannerEl = ref<HTMLElement | null>(null)
let resizeObserver: ResizeObserver | null = null

const isDraftVersion = computed(() => {
  const path = route.path
  return versionsData.versions.some(
    (v: { path: string; draft?: boolean }) => v.draft && path.startsWith(v.path)
  )
})

function syncLayoutTopHeight(): void {
  const height = isDraftVersion.value && bannerEl.value
    ? `${bannerEl.value.offsetHeight}px`
    : '0px'
  document.documentElement.style.setProperty('--vp-layout-top-height', height)
}

watch(isDraftVersion, async () => {
  await nextTick()
  if (resizeObserver) {
    resizeObserver.disconnect()
    if (bannerEl.value) {
      resizeObserver.observe(bannerEl.value)
    }
  }
  syncLayoutTopHeight()
}, { flush: 'post' })

onMounted(async () => {
  if (typeof ResizeObserver !== 'undefined') {
    resizeObserver = new ResizeObserver(syncLayoutTopHeight)
  }
  await nextTick()
  if (resizeObserver && bannerEl.value) {
    resizeObserver.observe(bannerEl.value)
  }
  syncLayoutTopHeight()
})

onUnmounted(() => {
  resizeObserver?.disconnect()
  document.documentElement.style.setProperty('--vp-layout-top-height', '0px')
})
</script>

<style scoped>
.draft-banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-warning-soft);
  border-bottom: 1px solid var(--vp-c-warning-3);
  color: var(--vp-c-text-2);
  font-size: 0.8125rem;
  line-height: 1.4;
  text-align: center;
  z-index: var(--vp-z-index-layout-top);
  backdrop-filter: blur(8px);
}

.draft-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  background: var(--vp-c-warning-3);
  color: var(--vp-c-bg);
  font-size: 0.6875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.draft-text {
  color: var(--vp-c-text-1);
}

.draft-link {
  color: var(--vp-c-brand-1);
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.draft-link:hover {
  text-decoration: underline;
}

@media (max-width: 640px) {
  .draft-banner {
    padding: 0.5rem 0.75rem;
    font-size: 0.75rem;
  }

  .draft-text {
    flex-basis: 100%;
  }
}
</style>
