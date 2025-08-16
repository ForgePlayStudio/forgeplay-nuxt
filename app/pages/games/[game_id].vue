<script lang="ts" setup>
const route = useRoute();
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('games').path(route.path).first();
});

</script>

<template>
  <main v-if="data" id="main" class="game-page">
    <GamesHero :game="data" />
    <section class="page-content">
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <aside class="sidebar"><GamesSpec :game="data" /></aside>
        <div class="lg:order-1 pb-20">
          <ContentRenderer v-if="data" class="prose-forgeplay xl:text-lg" :value="data" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@reference 'assets/css/main.css';
.sidebar {
  @apply lg:order-2 shrink-0;
}
</style>