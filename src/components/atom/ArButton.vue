<template>
  <button class="ar-button ">
    {{ props.title }}
  </button>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string
  }>()

</script>

<style scoped>
  .ar-button {
    @apply px-3 py-2 rounded bg-arknights-pink uppercase font-ubuntu font-bold
  }
</style>