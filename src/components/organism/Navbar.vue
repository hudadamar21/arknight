<script lang="ts" setup>
  import { ref } from "vue"
  import MenuList from "../atom/MenuList.vue";
  import MenuItem from "../atom/MenuItem.vue";
  import { isOpen, toggleMenu } from "../../store/menu";

  const closeMenu = () => {
    toggleMenu(false)
  }
  const openMenu = () => {
    toggleMenu(true)
  }

  const menuIndicator = ref<HTMLInputElement | any>(null);

  const indicatorMove = (e: any) => {
    menuIndicator.value.classList.remove('opacity-0')
    menuIndicator.value.style.left = `${e.target.offsetLeft}px`
    menuIndicator.value.style.width = `${e.target.offsetWidth}px`
  }

  const indicatorHide = () => {
    menuIndicator.value.classList.add('opacity-0')
  }

  const mouseEvent = ref({
    mouseover: indicatorMove,
    mouseleave: indicatorHide
  })

  const items = ref([
    {to: '#home', name: 'Home'},
    {to: '#about', name: 'About'},
    {to: '#voice-actor', name: 'Voice Actor'},
    {to: '#gallery', name: 'Gallery'},

  ])

</script>

<template>
  <div class="bg-black/60 fixed left-1/2 -translate-x-1/2 top-0 z-20 w-full">
    <nav 
      :class="!isOpen && 'backdrop-blur'"
      class="relative lg:container px-5 flex items-center justify-between text-white py-4 w-full z-30"
    >
      <div class="flex items-center gap-2">
        <img src="@/assets/images/logo-arknight.svg" class="-mt-2 h-14" alt="">
        <h1 class="font-ubuntu-condensed text-2xl">ARKNIGHT</h1>
      </div>
      <MenuList>
        <div class="flex lg:hidden items-center justify-between">
          <div class="flex items-center gap-2">
            <img src="@/assets/images/logo-arknight.svg" class="-mt-2 h-14" alt="">
            <h1 class="font-ubuntu-condensed text-2xl">ARKNIGHT</h1>
          </div>
          <button @click="closeMenu" class="text-arknights-pink">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
        <MenuItem 
          v-for="item of items" 
          :key="item.to" 
          :to="item.to" 
          v-on="mouseEvent"
          class="capitalize"
        >
          {{ item.name }}
        </MenuItem>
        <li>
          <ArButton class="block lg:hidden" title="Download" />
        </li>
        <div 
          ref="menuIndicator"
          class="absolute hidden lg:block -bottom-2 left-0 h-1 bg-arknights-pink transition-all">
        </div>
      </MenuList>
      <ArButton class="hidden lg:block" title="Download" />
      <button @click="openMenu" class="block lg:hidden text-arknights-pink">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      </button>
    </nav>
  </div>
</template>