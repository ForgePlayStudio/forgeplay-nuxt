<script lang="ts" setup>
const { data } = await useAsyncData('hero_games', () => {
  return queryCollection('games')
    .select('title', 'path', 'game_id', 'hero_image', 'hero_bg', 'icon', 'name')
    .all();
});
</script>

<template>
  <div  v-if="data">
    <GamesHero v-for="game in data" :key="`hero-${game.game_id}`" :game="game"/>
  </div>
</template>

<style lang="postcss" scoped>

</style>