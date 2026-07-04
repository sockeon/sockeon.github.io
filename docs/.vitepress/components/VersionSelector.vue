<template>
  <div v-if="isDocsPage" class="version-selector" @click.stop @mousedown.stop @dblclick.stop>
    <select
      v-model="selectedVersion"
      class="version-select"
    >
      <option
        v-for="version in versions"
        :key="version.version"
        :value="version.version"
      >
        {{ version.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vitepress'
import versionsData from '../versions.json'

// Version configuration from versions.json
const versions = versionsData.versions
const defaultVersion = versionsData.defaultVersion

const router = useRouter()
const route = useRoute()

// Check if current page is a docs page
const isDocsPage = computed(() => {
  const path = route.path
  // Show on versioned paths (e.g., /v1.0/, /v2.0/...)
  return path.match(/^\/v[\d.]+\//) !== null
})

function versionFromPath(path: string): string {
  const match = path.match(/^\/v([\d.]+)(?:\/|$)/)
  if (!match) return defaultVersion
  const version = versions.find(v => v.version === match[1])
  return version ? version.version : defaultVersion
}

const selectedVersion = computed({
  get: () => versionFromPath(route.path),
  set: (value: string) => {
    const version = versions.find(v => v.version === value)
    if (!version || version.version === versionFromPath(route.path)) {
      return
    }
    router.go(version.firstPage || version.path)
  }
})
</script>

<style scoped>
.version-selector {
  margin-left: 1rem;
  display: inline-block;
  pointer-events: auto;
}

.version-select {
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
  cursor: pointer;
  transition: border-color 0.25s;
}

.version-select:hover {
  border-color: var(--vp-c-brand);
}

.version-select:focus {
  outline: none;
  border-color: var(--vp-c-brand);
}
</style>

