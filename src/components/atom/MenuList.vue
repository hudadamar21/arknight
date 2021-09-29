<script lang="ts" setup>
import { isOpen } from "../../store/menu";
console.log(isOpen.value)
</script>

<template>
  <ul 
    :class="isOpen ? 'backdrop-blur' : '-translate-y-full'"
    class="
      absolute lg:relative 
      top-0 left-0
      w-full 
      p-5 lg:p-0
      bg-black/60 lg:bg-transparent
      lg:backdrop-blur-0
      flex flex-col lg:flex-row 
      justify-center gap-8 lg:gap-12 
      font-roboto font-medium
      lg:-translate-y-0
      transition duration-500
  ">
    <slot/>
  </ul>
</template>