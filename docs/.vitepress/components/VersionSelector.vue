<template>
  <div v-if="isDocsPage" class="version-selector">
    <select
      :value="currentVersion"
      @change="handleVersionChange"
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

// Automatically detect current version from URL path (reactive)
const currentVersion = computed(() => {
  const path = route.path
  const version = versions.find(v => {
    return path.startsWith(v.path)
  })
  return version ? version.version : defaultVersion
})

function handleVersionChange(event: Event) {
  const target = event.target as HTMLSelectElement
  const selectedVersion = versions.find(v => v.version === target.value)
  if (selectedVersion) {
    // Always redirect to the main documentation page of the selected version
    const firstPage = selectedVersion.firstPage || selectedVersion.path
    router.go(firstPage)
  }
}
</script>

<style scoped>
.version-selector {
  margin-left: auto;
  display: inline-block;
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

