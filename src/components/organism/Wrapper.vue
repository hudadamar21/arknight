<template>
  <div class="bg-image">
    <div class="bg-black/80">
    <Navbar/>
       <slot/>
    </div>
  </div>
</template>

<style>
  .bg-image {
    background-image: url("@/assets/images/bg-arknights.png");
    background-size: cover;
    background-position: 20% 20%;
    @apply md:bg-left
  }
</style>