<script lang="ts" setup>
import type { GamesCollectionItem } from '@nuxt/content';
import type { TIconId } from '../Svg/Social.vue';

const props = defineProps<{
  game: Partial<GamesCollectionItem>;
}>();
const gamesStatus = useState<Record<string, IGameStatus>>('gamesStatus', () => shallowRef({}));
const gameStatus = computed(() => props.game.game_id  ? gamesStatus.value[props.game.game_id as string] : null);
const releaseDate = computed(() => {
  const date = gameStatus.value?.releaseDate || new Date(props.game.release_date || '');
  if(props.game.show_full_release_date){
   
    return date ? date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : '';
  } else {
    return date.getFullYear() || 'TBD';
  }

});
</script>

<template>
  <div class="games-specs card">
    <div class="w-full pt-0">
      <h2 class="game-specs-title">
        <NuxtImg src="/images/icons/chest.svg" alt="" class="size-10" />
        Specs
      </h2>
      <div class="game-specs-content">
        <ul class="game-specs-list">
          <li v-if="game.genre" class="game-specs-item">
            <span class="game-specs-label">Genre:</span>
            <span class="game-specs-value">{{ game.genre }}</span>
          </li>
          <li v-if="releaseDate" class="game-specs-item">
            <span class="game-specs-label">Release Date:</span>
            <span class="game-specs-value">{{ releaseDate }}</span>
          </li>
          <li v-if="game.age_rating" class="game-specs-item">
            <span class="game-specs-label">Rating:</span>
            <span class="game-specs-value">{{ game.age_rating }}</span>
          </li>
          <li v-if="game.engine" class="game-specs-item">
            <span class="game-specs-label">Engine:</span>
            <span class="game-specs-value">{{ game.engine }}</span>
          </li>
          <li v-if="game.budget" class="game-specs-item">
            <span class="game-specs-label">Asking budget:</span>
            <span class="game-specs-value">{{ game.budget }}</span>
          </li>
        </ul>
        <div v-if="game.platforms?.length" class="game-specs-platforms">
          <h3 class="game-specs-label">Platforms:</h3>
          <ul class="flex flex-wrap gap-2 mt-4">
            <li v-for="platform in game.platforms" :key="platform.platform_id" class=" bg-foreground px-3 py-3 rounded-md text-sm">
              <NuxtLink :href="platform.url" target="_blank" rel="noopener noreferrer" class="text-black">
                <SvgSocial :icon-id="(platform.platform_id as TIconId)" class="inline-block size-8" />
                <span class="sr-only">{{ platform.platform_id }}</span>
              </NuxtLink>
              
            </li>
          </ul>
        </div>
    </div>
    </div>
  </div>
</template>

<style scoped>
@reference 'assets/css/main.css';

.games-specs {
  container-type: normal;
  @apply w-full max-w-max max-lg:max-w-prose lg:sticky lg:top-20;

  .game-specs-title {
    @apply text-2xl text-background bg-gradient-to-br from-neutral-200 to-neutral-300 px-4 py-2 rounded-lg -translate-y-1/2 relative flex items-center gap-2 w-full max-lg:max-w-48;
  }
  .game-specs-content {
    @apply lg:w-max grid gap-8  items-start;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .game-specs-list {
    @apply flex flex-col gap-2 sm:max-lg:flex-row flex-wrap gap-x-6;
  }
  .game-specs-item {
    @apply grid grid-cols-2 gap-4 max-lg:w-max;
    grid-template-columns: max-content 1fr;
  }
  .game-specs-label {
    @apply text-orange shrink-0;
  }
  .game-specs-value {
    @apply text-right shrink-0;
  }
  .game-specs-platforms {
    @apply shrink-0;
  }
}
</style>