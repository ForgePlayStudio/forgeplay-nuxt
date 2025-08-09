<script lang="ts" setup>
defineProps<{
  kicker?: string;
  title?: string;
  ctaLabel?: string;
  ctaUrl?: string;
}>()
</script>

<template>
  <div class="copy-block">
    
      <header class="lg:w-1/2">
        <p class="kicker">{{ kicker }}</p>
        <h2 class="section-title">{{ title }}</h2>
      </header>
      <div class="lg:w-1/2 ml-auto mt-10">
        <slot />
        <NuxtLink v-if="ctaUrl" class="btn" :to="ctaUrl">{{ ctaLabel }}</NuxtLink> 
      </div>
    
  </div>
</template>

<style lang="postcss" scoped>

</style>