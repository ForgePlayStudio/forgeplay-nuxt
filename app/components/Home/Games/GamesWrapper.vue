<script lang="ts" setup>


const { data } = await useAsyncData('games', () => {
  return queryCollection('games').limit(3).select('title', 'path', 'game_id', 'cover_image','release_date','name').all();
});
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
  <section>
    <SvgNoiseBg />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10 pb-10 relative items-start">
      <BaseCopyBlock
        kicker="Games"
        title="Our latest creations"
        cta-label="Discover our games"
        cta-url="/games"
        class="md:sticky top-8 z-10"
        >
        <p class="sm:text-lg mb-6">
         We believe that video games can be much more than just entertainment! 
        <br>For this reason, we want to transform them into an opportunity to make people think, learn and grow. 
        </p>
      
      </BaseCopyBlock>
      
      <div class="grid grid-cols-1 gap-10 xl:gap-16">
        <BaseCoverCard
          v-for="game in data"
          :key="game.game_id"
          :image="game.cover_image && `/games/${game.game_id}${game.cover_image}`"
          :title="game.name"
          :url="`/games/${game.game_id}`"
          >
          <span v-if="gamesStatus[game.game_id]?.comingSoon" class="rounded-full px-4 py-1 text-sm bg-red absolute top-6 left-6 inline-block z-10 drop-shadow-md">Coming soon</span>
          </BaseCoverCard>
         
      </div>
    </div>
    </section>
</template>

<style scoped>
 section{
  position: relative;
  isolation: isolate;
  background-image: radial-gradient(circle 30vw at 70% 40%, --alpha(var(--color-orange) / 40%), transparent);
 }
</style>