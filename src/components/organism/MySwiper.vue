<script lang="ts" setup>
	import { Pagination } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';
	import 'swiper/css/pagination';
import { computed } from 'vue';

	const modules = [Pagination]

	type List = {
	  image: string
	}

	interface Props {
	  swiperClass: string
	  lists: List[],
	  positionPagination: string
	}

	const props = withDefaults(
	  defineProps<Props>(), {
		  positionPagination: 'center'
	  }
	)

  const paddingLeft = computed(() => {
    return props.positionPagination === 'left' ? '3rem' : '0'
  })

</script>

<template>
<div class="relative overflow-hidden pb-14 md:pb-20">
  <Swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    :class="props.swiperClass"
    class="h-[max-content] overflow-hidden static"
  >
    <SwiperSlide v-for="list of lists">
      <img :src="list.image" class="w-full h-full object-cover" alt="ark1">
    </SwiperSlide>
  </Swiper>
  
</div>
</template>

<style>
  .swiper-pagination {
    text-align: v-bind('props.positionPagination');
    padding-left: v-bind(paddingLeft);
    @apply mb-0 space-x-2 md:space-x-4 
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    @apply bg-arknights-pink opacity-100 w-12 h-4 md:h-5 rounded-full
  }
  .swiper-pagination-bullet {
    @apply bg-white opacity-60 w-4 md:w-5 h-4 md:h-5 rounded-full
  }
</style>