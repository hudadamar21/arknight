<script lang="ts" setup>
import { ref } from "vue"
import va1 from "@/assets/images/va1.png"

const lists = ref([
  {image: va1},
  {image: va1},
])
</script>

<template>
  <section id="voice-actor" class="relative py-32 overflow-hidden">
    <div class="lg:container grid grid-cols-1 md:grid-cols-2">
      <div class="px-8">
      <MySwiper
        :lists="lists"
        positionPagination="left"
      />
    </div>
    <div class="text-white flex flex-col pt-10 md:pt-20 items-center">
      <div class="flex flex-col justify-center items-center gap-5">
        <h2 class="font-ubuntu text-3xl md:text-5xl lg:text-6xl">Ami Koshimizu</h2>
        <h3 class="font-roboto text-2xl md:text-3xl lg:text-4xl">(小清水亚美)</h3>
      </div>
      <div class="mt-8 md:mt-12 lg:mt-20 flex items-center">
        <button class="h-20 md:h-24 w-20 md:w-24">
          <img src="@/assets/images/play-btn.svg" alt="">
        </button>
        <p class="text-xl md:text-2xl font-roboto">Zima Voice Character</p>
      </div>      
    </div>
    <h2 class="absolute bottom-0 -right-40 font-ubuntu font-bold text-8xl md:text-[150px] whitespace-nowrap text-arknights-blue tracking-widest opacity-60">声優アニメ</h2>
    </div>
  </section>
</template>