<script lang="ts" setup>
import { ref } from "vue"
import MySwiper from '../organism/MySwiper.vue';
import ark1 from '@/assets/images/ark1.png'
import ark2 from '@/assets/images/ark2.png'
import ark3 from '@/assets/images/ark3.png'

const lists = ref([
  {image: ark1},
  {image: ark2},
  {image: ark3},
])

</script>

<template>
<div id="home" class="md:container px-5 pt-32 mb-12 md:mb-32">
  <MySwiper 
    swiper-class="swiper-classes"
    :lists="lists"
  />
</div>
</template>


<style>
  .swiper-classes {
    @apply border-4 border-arknights-pink rounded-2xl p-2;
  }
</style>