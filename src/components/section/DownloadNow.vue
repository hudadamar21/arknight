<template>
  <div class="lg:container px-5 py-32 lg:py-40 overflow-hidden">
    <div class="flex gap-3 w-2/3 lg:w-1/3">
      <div class="bg-arknights-pink h-5 lg:h-7 flex-grow"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
      <div class="bg-arknights-pink h-5 lg:h-7 w-5 lg:w-7"></div>
    </div>

    <div class="relative mt-3 lg:mt-6">
      <div class="absolute inset-0 border rounded-md bg-black/60"></div>
      <img src="@/assets/images/maxresdefault.png" alt="">
      <button class="w-28 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="@/assets/images/play-btn-border.svg" alt="">
      </button>
    </div>

    <div class="mt-10 lg:mt-20 px-0 lg:px-8 flex flex-col md:flex-row gap-5 items-center justify-between">
      <div class="flex flex-row md:flex-col gap-2 text-white text-2xl lg:text-7xl tracking-widest font-bold font-roboto w-max">
        <h2 class="mb-3">Download</h2>
        <div class="flex items-baseline md:justify-between gap-3 md:gap-10 md:pr-6">
          Now
          <svg class="w-10 lg:w-24 translate-y-1 md:translate-y-0" viewBox="0 0 143 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M141.536 40.5355C143.488 38.5829 143.488 35.4171 141.536 33.4645L109.716 1.64466C107.763 -0.307961 104.597 -0.307961 102.645 1.64466C100.692 3.59728 100.692 6.76311 102.645 8.71573L130.929 37L102.645 65.2843C100.692 67.2369 100.692 70.4027 102.645 72.3553C104.597 74.308 107.763 74.308 109.716 72.3553L141.536 40.5355ZM0 42H138V32H0V42Z" fill="#5C33F6"/>
          </svg>
        </div>
      </div>
      <div class="grid gap-5">
        <a href="#" class="block w-52 lg:w-80">
          <img src="@/assets/images/android.png" alt="">
        </a>
        <a href="#" class="block w-52 lg:w-80">
          <img src="@/assets/images/apple.png" alt="">
        </a>
      </div>
    </div>

    <h2 class="text-7xl lg:text-[150px] text-center mt-20 font-ubuntu font-bold text-arknights-blue/60">ゲームプレイ</h2>
  </div>
</template>