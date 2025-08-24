<script lang="ts" setup>


import type { GamesCollectionItem } from '@nuxt/content';

const props = defineProps<{game:Partial<GamesCollectionItem>}>();
  
const route = useRoute();  
const isGamePage = route.params.game_id !== undefined && route.params.game_id === props.game.game_id;
const gamesStatus = useState<Record<string, IGameStatus>>('gamesStatus', () => shallowRef({}));

if (props.game.game_id && !gamesStatus.value[props.game.game_id]) {    
    const status = useGameStatus(props.game.release_date);
    if (status.value) {
       Object.assign(gamesStatus.value, {
        [props.game.game_id]: status.value
      });
    }
  }
  const gameStatus = props.game.game_id ? gamesStatus.value[props.game.game_id] : null;
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
        <h2 class="page-title w-min min-w-1/2">{{ game.name }}</h2>
        <p class="text-lg mb-10 flex items-center gap-2"><span class="font-display font-medium text-orange uppercase tracking-widest">{{ game.genre }}</span> /  <span class="text-yellow">{{gameStatus?.status }}</span> </p>
        <div>
          <NuxtLink v-if="!isGamePage" class="btn btn-ghost" :to="game.path"><span>Discover {{ game.name }}</span></NuxtLink>
        </div>
      </div>
      
    </div>
    <div class="hero-image-wrapper">
      <div class="hero-image">
        <NuxtImg
        :src="`/games/${game.game_id}${game.hero_image}`"
        class="hero-image"
        alt=""
        
        sizes="md:50vw lg:600px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'assets/css/main.css';
.hero {
  @apply relative isolate w-full  overflow-hidden pb-[3%] z-2;
  .hero-wrapper {
    @apply relative pt-32 pb-10 lg:h-[80vh] overflow-hidden wrapper-grid;
    &::before {
      @apply absolute inset-0 bg-gradient-to-tr from-yellow-950/90 to-transparent top-0 h-full w-full;
      content: '';
    }
  }
  .hero-bg {
    @apply absolute inset-0 object-cover object-center w-full h-full blur-sm opacity-70;
    z-index: -1;
  }
  .hero-image {
    @apply h-full w-1/2 ml-auto relative;

    z-index: 10;
    img{
      @apply object-contain object-bottom-right w-full h-auto absolute bottom-0 translate-y-[5%];
    }
  }
  .hero-image-wrapper {
    @apply absolute inset-0 max-md:hidden wrapper-grid items-end justify-end pointer-events-none pb-[2.75%];
  }
  .icon {
    @apply border-2 border-foreground rounded-xl;
  }
  .hero-content {
    @apply h-full flex flex-col justify-center gap-4 relative;
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.5));
  }
  & + * {
    @apply -mt-[3%];
  }
}
</style>