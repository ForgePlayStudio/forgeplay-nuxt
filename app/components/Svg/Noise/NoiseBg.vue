
<template>
  <svg id="noise" class="full-width">
    
    <rect width="100%" height="100%" filter="url(#noise-filter)" />
</svg>
</template>
<style scoped>
@reference 'assets/css/main.css';
#noise {
  @apply absolute inset-0 pointer-events-none opacity-70 w-full h-full -z-10;
}
</style>