<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = computed({
  get() {
    return route.query.search ?? ''
  },
  set(search) {
    router.replace({ query: { search } })
  },
})  
</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong></p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
