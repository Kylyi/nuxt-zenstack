<script setup lang="ts">
const user = ref()

async function handleClick() {
  user.value = await $fetch('/api')
}
</script>

<template>
  <div style="height: 100vh; width: 100vw; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 12px;">
    <button @click="handleClick">
      Get user
    </button>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>
