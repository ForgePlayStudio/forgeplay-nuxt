<script lang="ts" setup>
const route = useRoute();
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('games').path(route.path).first();
});

</script>

<template>
  <main v-if="data">
    <GamesHero :game="data" />
  </main>
</template>

<style lang="postcss" scoped>

</style>