<script lang="ts" setup>

const props = defineProps<{
  to: string
}>()

</script>

<template>
  <li class="px-1 cursor-pointer ">
    <a :href="props.to" class="block w-max pr-3 border-b-4 lg:border-none border-transparent hover:border-arknights-pink transition duration-150">
      <slot/>
    </a>
  </li>
</template>