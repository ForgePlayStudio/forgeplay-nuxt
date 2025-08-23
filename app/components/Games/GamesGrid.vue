<script lang="ts" setup>
const { data } = await useAsyncData('games-list', () => {
  return queryCollection('games').select('title', 'path', 'game_id', 'cover_image','release_date','name', 'description').all();
});
const gamesFilters = [
  { text: 'All Games', value: 'all' },
  { text: 'Released', value: 'released' },
  { text: 'Work in Progress', value: 'in_progress' },
  { text: 'Concept', value: 'concept' }
]
const currentFilter = ref(gamesFilters[0]?.value)
const gamesStatus = useState<Record<string, IGameStatus>>('gamesStatus', () => shallowRef({}));
if (data.value) {
  for (const game of data.value) {
    if (!game.release_date && gamesStatus.value[game.game_id]) continue;
    const status = useGameStatus(game.release_date);
    if (status.value) {
       Object.assign(gamesStatus.value, {
        [game.game_id]: status.value
      });
    }
  }
}
</script>

<template>
  <section class="mb-16">
    <ul class="flex gap-4 mb-8 flex-wrap justify-center">
      <li v-for="filter in gamesFilters" :key="filter.value">
        <button 
        class="filter-button"
        :class="{ 'active': currentFilter === filter.value }"
        @click="currentFilter = filter.value">
        {{ filter.text }}
      </button>
      </li>
      
    </ul>
  
  <div class="grid grid-cols-1 gap-10 xl:gap-16">
    
      <div v-for="game in data" v-show="gamesStatus[game.game_id]?.status_id === currentFilter || currentFilter === 'all'" :key="game.game_id" >
        <div class="card">
          <div class="flex p-20 gap-16">
            
            <BaseCopyBlock
          :kicker="gamesStatus[game.game_id]?.status"
          :title="game.title"
          cta-label="Game details"
          :cta-url="game.path"
          class="basis-5/12"
          >
          <p class="mb-10">
            {{ game.description || 'No description available.' }}
          </p>
        </BaseCopyBlock>
            
        


            <NuxtImg :src="`/games/${game.game_id}${game.cover_image}`" :alt="game.title" width="600" height="350" class="rounded-lg drop-shadow-md" />
          </div>
        </div>
        
      </div>
    
  </div>
  </section>
</template>

<style  scoped>
@reference 'assets/css/main.css';
.filter-button {
  @apply px-4 py-2 bg-transparent rounded-full hover:bg-orange/50 transition-colors duration-300 font-display uppercase tracking-widest;
  &.active {
    @apply bg-orange text-background;
  }
}

</style>