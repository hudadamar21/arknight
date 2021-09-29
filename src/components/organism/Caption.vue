<script lang="ts" setup>
  const props = defineProps<{
    title: string
  }>()
</script>

<template>
  <div class="mb-6">
    <div class="flex items-center gap-3 mb-5">
      <div class="h-14 w-1.5 rounded-md bg-arknights-blue"></div>
      <h2 class="title">
        {{ props.title }}
      </h2>
    </div>
    <p class="text-white font-turret-road text-xl tracking-wide font-medium">
      <slot/>
    </p>
  </div>
</template>

<style scoped>
  .title {
    @apply relative border-arknights-blue text-4xl font-ubuntu text-white font-medium
  }
</style>