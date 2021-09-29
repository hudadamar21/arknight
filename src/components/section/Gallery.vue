<template>
  <section id="gallery" class="relative bg-arknights-blue/20 py-20 md:py-28 mt-[400px]">
    
    <div class="md:container overflow-hidden py-20">
      <h2 class="absolute top-[-10%] sm:top-[-11%] -left-4 text-7xl sm:text-8xl md:text-[150px] font-ubuntu font-bold text-arknights-pink tracking-widest leading-[1.2] opacity-60">ギャラリ <br/> ー写真</h2>
      <div class="relative flex h-[450px] px-5 md:h-[960px] mt-10 w-full">
        <div class="absolute -bottom-8 md:-bottom-12 -right-80 md:-right-5">
          <img src="@/assets/images/dot.svg" alt="">
        </div>
        
        <div class="w-[60%]">
          <img class="img-cover" src="@/assets/images/gallery/g1.png">
        </div>
        <div class="w-[40%] h-full">
          <div class="flex h-[35%] w-full">
            <div class="w-[60%]"><img class="img-cover" src="@/assets/images/gallery/g5.png"></div>
            <div class="w-[40%]"><img class="img-cover" src="@/assets/images/gallery/g4.png"></div>
          </div>
          <div class="flex h-[30%] w-full">
            <div class="flex-grow">
              <img class="img-cover" src="@/assets/images/gallery/g2.png">
            </div>
            <div>
              <img class="img-cover" src="@/assets/images/gallery/g3.png">
            </div>
            <div >
              <img class="img-cover" src="@/assets/images/gallery/g6.png">
            </div>
          </div>
          <div class="flex h-[35%]">
            <div>
              <img class="img-cover" src="@/assets/images/gallery/g7.png">
            </div>
            <div>
              <img class="img-cover" src="@/assets/images/gallery/g8.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
</template>

<style>
  .img-cover {
    @apply w-full h-full object-cover
  }
</style>