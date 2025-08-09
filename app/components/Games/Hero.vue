<script lang="ts" setup>


import type { GamesCollectionItem } from '@nuxt/content';

const props = defineProps<{game:Partial<GamesCollectionItem>}>();
  
const route = useRoute();  
const isGamePage = route.params.game_id !== undefined && route.params.game_id === props.game.game_id;
</script>

<template>
  <div class="hero">
    
    <div class="hero-wrapper">
      <NuxtImg
      :src="`/games/${game.game_id}${game.hero_bg}`"
      class="hero-bg full-width"
      alt=""
      width="100vw"
      height="800"
      />
      <div class="hero-content">
        <NuxtImg 
        :src="`/games/${game.game_id}${game.icon}`"
        class="icon"
        :alt="game.name"
        width="80"
        height="80"
        />
        <h2 class="page-title mb-10">{{ game.name }}</h2>
        <div>
          <NuxtLink v-if="!isGamePage" class="btn btn-ghost" :to="game.path">Discover {{ game.name }}</NuxtLink>
        </div>
      </div>
      
    </div>
    <NuxtImg 
    :src="`/games/${game.game_id}${game.hero_image}`" 
    class="hero-image" 
    alt="" 
    sizes="md:50vw lg:800px"
    />
  </div>
</template>

<style scoped>
@reference 'assets/css/main.css';
.hero {
  @apply relative isolate w-full  overflow-hidden pb-[2.7%];
  .hero-wrapper {
    @apply relative h-[800px] overflow-hidden wrapper-grid;
    &::before {
      @apply absolute inset-0 bg-gradient-to-tr from-slate-950/70 to-transparent top-0 h-full w-full;
      content: '';
    }
  }
  .hero-bg {
    @apply absolute inset-0 object-cover object-center w-full h-full blur-sm opacity-70;
    z-index: -1;
  }
  .hero-image {
    @apply absolute right-0 bottom-0 object-contain max-md:hidden h-[80%];
    
    z-index: 10;
  }
  .icon {
    @apply border-2 border-foreground rounded-xl;
  }
  .hero-content {
    @apply h-full flex flex-col justify-center gap-4 relative;
  }
}
</style>