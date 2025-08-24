<script lang="ts" setup>
const route = useRoute();
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('games').path(route.path).first();
});
useHead({
  title: data.value?.title,
})
</script>

<template>
  <main v-if="data" id="main" class="game-page">
    
    <GamesHero :game="data" />
    <section class="page-content relative">
      <SvgNoiseBg />
      <div class="flex flex-col lg:flex-row gap-6 justify-between">
        <aside class="sidebar"><GamesSpec :game="data" />
        
        </aside>
        <div class="lg:order-1 pb-20">
          
          <ContentRenderer v-if="data" class="prose-forgeplay xl:text-lg" :value="data" />

            <div class="bg-neutral-700/20 p-2 -mx-4 sm:p-4 rounded-xl mt-20 @container">
              <GamesCarousel v-if="data.carousel" :carousel="data.carousel" :game-id="data.game_id" />
            </div>
          
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
@reference 'assets/css/main.css';
.page-content{
  @apply isolate;
  background-image: radial-gradient(circle 30vw at 85% 30%, --alpha(var(--color-orange) / 50%), transparent);
  
}
.sidebar {
  @apply lg:order-2 shrink-0 pb-20;
}
</style>